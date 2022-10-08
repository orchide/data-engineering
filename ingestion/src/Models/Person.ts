import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  HasOne,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript"
import { City } from "./City"
import { Country } from "./Country"
import { County } from "./County"
import { Place } from "./Places"

@Table
export class Person extends Model<Person> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  givenName: string
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  familyName: string
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  dob: string

  @ForeignKey(() => Place)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  place_of_birth: string

  @BelongsTo(() => Place)
  city: Place
}
