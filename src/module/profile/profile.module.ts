import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { UserProviders } from 'src/providers/user.providers';
import { AddressProviders } from 'src/providers/address.providers';
import { CompanyProviders } from 'src/providers/company.providers';

@Module({
  controllers: [ProfileController],
  providers: [
    ProfileService,
    ...UserProviders,
    ...CompanyProviders,
    ...AddressProviders,
  ],
})
export class ProfileModule {}
