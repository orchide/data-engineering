import fs from "fs"
const fsPromises = require("fs/promises")
import { sequelize } from "./src/Models/index"
import chalk from "chalk"
import path from "path"
import express from "express"
import { Place } from "./src/Models/Places"
import { Person } from "./src/Models/Person"
import moment from "moment"

const { v4: uuid } = require("uuid")

const app = express()
const http = require("http")
const server = http.createServer(app)

async function transform() {
  const results = await Place.findAll({
    attributes: [
      "city",
      [sequelize.fn("COUNT", sequelize.col("*")), "population"],
    ],

    include: [
      {
        model: Person,
        attributes: [],
      },
    ],

    group: ["city"],
    raw: true,
  })

  console.log(results)

  await writeToDisk(results)
}

async function writeToDisk(data: any[]) {
  if (!fs.existsSync(path.join(__dirname, "./data"))) {
    await fsPromises.mkdir(path.join(__dirname, "./data"))
  }

  let output: any = {}
  data.forEach((item: any) => {
    output[item.city] = item.population
  })

  fs.appendFile(
    path.join(__dirname, `./data/${moment()}.json`),
    `${JSON.stringify(output)}\n`,
    function (err) {
      if (err) throw err
      console.log("File is created successfully.")
    }
  )
}

const port = 5000
server.listen(port, async () => {
  console.log(
    chalk.greenBright(
      `Transformation line running on ${port} in ${process.env.NODE_ENV} mode`
    )
  )
  sequelize.sync().then(async () => {
    console.log(chalk.cyanBright(`Connected to the database`))

    transform()
  })
})
