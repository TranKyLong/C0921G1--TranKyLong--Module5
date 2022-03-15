import {FuramaService} from './FuramaService';
import {Customer} from './Customer';

export class Contract {
  id: number;
  contractCode: string;
  customerId: Customer;
  serviceId: FuramaService;
  starDate: string;
  endDate: string;
  deposit: number;

  constructor() {
  }
}
