import {
  Column,
  CreatedAt,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { User } from './user.entity';
import { DataTypes } from 'sequelize';
@Table({
  tableName: 'address',
})
export class Address extends Model<Address> {
  @Column({
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataTypes.STRING,
  })
  street: string;

  @Column({
    type: DataTypes.STRING,
  })
  city: string;

  @Column({
    type: DataTypes.INTEGER,
  })
  zipcode: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @HasMany(() => User)
  user: User[];
}
