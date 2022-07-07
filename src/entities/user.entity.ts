import {
  BelongsTo,
  Column,
  CreatedAt,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Address } from './address.entity';
import { Company } from './company.entity';

@Table({
  tableName: 'user',
})
export class User extends Model<User> {
  @Column({
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => Address)
  @Column({
    type: DataTypes.UUID,
  })
  addressid: string;

  @ForeignKey(() => Company)
  @Column({
    type: DataTypes.UUID,
  })
  companyid: string;

  @Column({
    type: DataTypes.STRING,
  })
  name: string;

  @Column({
    type: DataTypes.STRING,
  })
  username: string;

  @Column({
    type: DataTypes.STRING,
  })
  email: string;

  @Column({
    type: DataTypes.STRING,
  })
  website: string;

  @Column({
    type: DataTypes.INTEGER,
  })
  phone: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @BelongsTo(() => Address)
  address: Address[];

  @BelongsTo(() => Company)
  company: Company[];
}
