import Staff from "../models/StaffModel.js";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
    Staff.findOne(
        {
            where: {
                username: req.body.username    
            }
        }
    ).then((staff) => {
        if (staff == null) {
            return res.status(404).send({ message: "Staff not found." });
        }
        if (staff.password != req.body.password) {
            return res.status(401).send({ message: "Incorrect password." });
        }
        const staffId = staff.id;
        const username = staff.username;
        const email = staff.email;
        const accessToken = jwt.sign({staffId, username, email}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '10s'
        });
        req.session.token = accessToken;
        res.status(200).json({ message: 'Login successful' });
    }).catch((err) => {
        res.status(500).send({ message: err.message });
    });
};