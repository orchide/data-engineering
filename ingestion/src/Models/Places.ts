import { Person } from "./Person"
import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  PrimaryKey,
} from "sequelize-typescript"
import { City } from "./City"
import { County } from "./County"

@Table
export class Place extends Model<Place> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  country: string
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  county: string

  @PrimaryKey
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  city: string

  @HasMany(() => Person)
  people: Person[]
}
