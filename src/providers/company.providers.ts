import { Company } from 'src/entities/company.entity';

export const CompanyProviders = [
  {
    provide: 'COMPANY_REPOSITORY',
    useValue: Company,
  },
];
