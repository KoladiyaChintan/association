import { Address } from 'src/entities/address.entity';
import { Company } from 'src/entities/company.entity';

export class UserDto {
  name: string;
  username: string;
  email: string;
  website: string;
  phone: number;
  address: Address;
  company: Company;
}
