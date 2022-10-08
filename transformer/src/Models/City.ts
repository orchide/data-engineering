import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript"
import { Country } from "./Country"
import { County } from "./County"

@Table
export class City extends Model<City> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string
}
