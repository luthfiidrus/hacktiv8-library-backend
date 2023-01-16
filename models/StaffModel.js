import { Sequelize } from "sequelize";
import db from '../models/index.js';

const { DataTypes } = Sequelize;

const Staff = db.define('staff', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    }
});

export default Staff;