import { IDatabaseConfig } from "../Core/core.db.contants/db.contants"
import dotenv from "dotenv"
import path from "path"

const parse = dotenv.config({ path: __dirname + "/.env" })

export const databaseConfig: IDatabaseConfig = {
  development: {
    username: "orchide",
    password: "",
    database: "data_engineering",
    host: "localhost",
    port: 5432,
    dialect: "postgres",
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  },
}
