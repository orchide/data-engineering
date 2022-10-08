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

@Table
export class County extends Model<County> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string
}
