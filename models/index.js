import { DB, USER, PASSWORD, HOST, dialect as _dialect, pool as _pool } from "../config/DBConfig.js";
import Sequelize from "sequelize";

const db = new Sequelize(
  DB,
  USER,
  PASSWORD,
  {
    host: HOST,
    dialect: _dialect,
    operatorsAliases: false,
    pool: {
      max: _pool.max,
      min: _pool.min,
      acquire: _pool.acquire,
      idle: _pool.idle
    }
  }
);

export default db;