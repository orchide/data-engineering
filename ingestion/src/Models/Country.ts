import { Person } from "./Person"
import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript"
import { City } from "./City"
import { County } from "./County"

@Table
export class Country extends Model<Country> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string
}
