import { Person } from "./Person"
import { County } from "./County"
import { Country } from "./Country"
import { City } from "./City"
import { Sequelize } from "sequelize-typescript"
import { databaseConfig } from "../config/config.db"
import { Place } from "./Places"

export const sequelize = new Sequelize(
  databaseConfig.development.database,
  databaseConfig.development.username,
  databaseConfig.development.password,
  {
    dialect: "postgres",
    port: 5432,
    host: databaseConfig.development.host,
    logging: true,
  }
)

sequelize.authenticate()
sequelize.addModels([County, Country, City, Person, Place])
