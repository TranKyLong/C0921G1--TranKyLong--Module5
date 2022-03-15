import {Contract} from './Contract';


export class Customer {
  id: number;
  customerType: number;
  customerCode: string;
  customerName: string;
  customerBirthday: string;
  customerGender: number;
  customerIdCard: string;
  customerPhone: string;
  customerEmail: string;
  customerAdress: string;
  contractId?: Contract[];

  constructor() {
  }
}
