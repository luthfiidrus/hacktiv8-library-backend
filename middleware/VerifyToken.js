import jwt from 'jsonwebtoken';

export const VerifyToken = (req, res, next) => {
    const token = req.session.token;
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            req.session.token = null;
            return res.sendStatus(403);
        }
        req.user = decoded.user;
        next();
    })
}