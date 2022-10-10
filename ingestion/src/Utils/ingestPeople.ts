import fs from "fs"
import { Person } from "./../Models/Person"

import { log } from "console"
import { City } from "./../Models/City"
import chalk from "chalk"

import { Country } from "../Models/Country"
import { County } from "../Models/County"
import path from "path"
import { parse } from "csv-parse/sync"
import { Place } from "../Models/Places"

const people = fs.readFileSync(path.join(__dirname, "../../data/people.csv"))

const data = parse(people, {
  columns: true,
})

export async function ingestPeopleData() {
  Object.values(data).forEach(async (item: any) => {
    await Person.create({
      givenName: item.given_name,
      familyName: item.family_name,
      dob: item.date_of_birth,
      place_of_birth: item.place_of_birth,
    })
  })
}
