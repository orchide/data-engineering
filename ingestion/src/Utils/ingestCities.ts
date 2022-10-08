import { log } from "console"
import { City } from "./../Models/City"
import chalk from "chalk"

import { Country } from "../Models/Country"
import { County } from "../Models/County"
import { ingestPeopleData } from "./ingestPeople"
import fs from "fs"
import path from "path"
import { parse } from "csv-parse/sync"

const places = fs.readFileSync(path.join(__dirname, "../../../data/places.csv"))

const data = parse(places, {
  columns: true,
})

async function getCities() {
  let citySet = new Set()

  Object.values(data).forEach(async (item: any) => {
    citySet.add(item.city)
  })

  return citySet
}
