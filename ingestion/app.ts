import dotenv from "dotenv"
import { sequelize } from "./src/Models/index"
import chalk from "chalk"
import path from "path"
import express from "express"

import { ingestPlaces } from "./src/Utils/ingestPlaces"
import { ingestPeopleData } from "./src/Utils/ingestPeople"
import fs from "fs"

import { parse } from "csv-parse/sync"

const app = express()
const http = require("http")
const server = http.createServer(app)

const port = process.env.PORT || 5000
server.listen(port, async () => {
  console.log(
    chalk.greenBright(
      `Ingestion server running on ${port} in ${process.env.NODE_ENV} mode`
    )
  )
  sequelize.sync().then(async () => {
    console.log(chalk.cyanBright(`Connected to the database`))

    await ingestPlaces()
    await ingestPeopleData()
  })
})

// handling unexpexted errors
process.on("unhandledRejection", (err, promise) => {
  console.log(chalk.redBright(`Error , ${err}`))

  server.close(() => {
    process.exit(1)
  })
})
