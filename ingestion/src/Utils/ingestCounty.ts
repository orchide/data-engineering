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

function getCounties() {
  let countySet = new Set()

  Object.values(data).forEach(async (item: any) => {
    countySet.add(item.county)
  })

  return countySet
}

// export async function ingestCounties() {
//   try {
//     const county = getCounties()
//     const counties = Array.from(county)

//     data.forEach(async (item: any) => {
//       let country = await Country.findOne({
//         where: {
//           name: item.country,
//         },
//       })

//       if (country) {
//         await County.create({
//           name: item.county,
//           countryId: country.id,
//         })
//         return
//       }
//       console.log("Found no country ")
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }
