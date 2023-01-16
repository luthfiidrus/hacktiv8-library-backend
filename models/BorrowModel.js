import { Sequelize } from "sequelize";
import db from '../models/index.js';
import Book from "./BookModel.js";
import Reader from "./ReaderModel.js";

const { DataTypes } = Sequelize;

const Borrow = db.define('borrow', {
    reader_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    borrow_date: {
        type: DataTypes.DATE,
        allowNull: false,
        primaryKey: true
    },
    return_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
});

Reader.hasMany(Borrow, { foreignKey: 'reader_id' });
Borrow.belongsTo(Reader, { foreignKey: 'reader_id' });
Book.hasOne(Borrow, { foreignKey: 'book_id' });
Borrow.belongsTo(Book, { foreignKey: 'book_id' });

export default Borrow;