import { Address } from 'src/entities/address.entity';

export const AddressProviders = [
  {
    provide: 'ADDRESS_REPOSITORY',
    useValue: Address,
  },
];
