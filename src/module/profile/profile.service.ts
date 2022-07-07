import { Inject, Injectable } from '@nestjs/common';
import { Address } from 'src/entities/address.entity';
import { Company } from 'src/entities/company.entity';
import { User } from 'src/entities/user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class ProfileService {
  constructor(
    @Inject('USER_REPOSITORY') private readonly USER_REPOSITORY: typeof User,
    @Inject('COMPANY_REPOSITORY')
    private readonly COMPANY_REPOSITORY: typeof Company,
    @Inject('ADDRESS_REPOSITORY')
    private readonly ADDRESS_REPOSITORY: typeof Address,
  ) {}

  async createUser(userDto: UserDto) {
    const address = await this.ADDRESS_REPOSITORY.create({
      street: userDto.address.street,
      city: userDto.address.city,
      zipcode: userDto.address.zipcode,
    });

    const company = await this.COMPANY_REPOSITORY.create({
      name: userDto.company.name,
      catchPhrase: userDto.company.catchPhrase,
      bs: userDto.company.bs,
    });

    const user = await this.USER_REPOSITORY.create({
      addressid: address.id,
      companyid: company.id,
      name: userDto.name,
      username: userDto.username,
      email: userDto.email,
      website: userDto.website,
      phone: userDto.phone,
    });

    return user;
  }

  async getUser(id): Promise<any> {
    const userprofile = await this.USER_REPOSITORY.findAll({
      where: { id },
      attributes: ['id', 'name', 'username', 'email', 'website', 'phone'],
      include: [
        {
          model: Address,
          attributes: ['street', 'city', 'zipcode'],
        },
        {
          model: Company,
          attributes: ['name', 'catchPhrase', 'bs'],
        },
      ],
    });
    return { data: userprofile };
  }
}
