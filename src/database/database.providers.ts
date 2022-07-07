import { Sequelize } from 'sequelize-typescript';
import { Address } from 'src/entities/address.entity';
import { Company } from 'src/entities/company.entity';
import { User } from 'src/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        password: process.env.DATABASE_PASSWORD,
        username: process.env.DATABASE_USERNAME,
        database: process.env.DATABASE_NAME,
        logging: false,
        pool: {
          max: 100,
          min: 0,
          acquire: 30000,
          idle: 5000,
        },
      });
      sequelize.addModels([User, Address, Company]);
      await sequelize.sync();

      return sequelize;
    },
  },
];
