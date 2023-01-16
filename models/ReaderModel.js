import { Sequelize } from "sequelize";
import db from '../models/index.js';

const { DataTypes } = Sequelize;

const Reader = db.define('reader', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
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

export default Reader;