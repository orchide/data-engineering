import { log } from "console"
import { City } from "./../Models/City"
import chalk from "chalk"

import { Country } from "../Models/Country"
import { County } from "../Models/County"
import { ingestPeopleData } from "./ingestPeople"
import fs from "fs"
import path from "path"
import { parse } from "csv-parse/sync"
import { Place } from "../Models/Places"

const places = fs.readFileSync(path.join(__dirname, "../../data/places.csv"))

const data = parse(places, {
  columns: true,
})

export async function ingestPlaces() {
  try {
    Object.values(data).forEach(async (item: any) => {
      await Place.create({
        country: item.country,
        city: item.city,
        county: item.county,
      })
    })
  } catch (error) {
    if (error) {
      console.log(chalk.red(error))
    }
  }
}



