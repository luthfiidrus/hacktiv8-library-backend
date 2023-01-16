import { Sequelize } from "sequelize";
import db from '../models/index.js';

const { DataTypes } = Sequelize;

const Book = db.define('book', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publisher: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year_of_publication: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export default Book;