export class Customer {
  customerId: number;
  customerType: number;
  customerCode: string;
  customerName: string;
  customerBirthday: string;
  customerGender: number;
  customerIdCard: string;
  customerPhone: string;
  customerEmail: string;
  customerAdress: string;
  contractId: number;

  // tslint:disable-next-line:max-line-length
  constructor(customerId: number, customerType: number, customerCode: string, customerName: string, customerBirthday: string, customerGender: number, customerIdCard: string, customerPhone: string, customerEmail: string, customerAdress: string, contractId: number) {
    this.customerId = customerId;
    this.customerType = customerType;
    this.customerCode = customerCode;
    this.customerName = customerName;
    this.customerBirthday = customerBirthday;
    this.customerGender = customerGender;
    this.customerIdCard = customerIdCard;
    this.customerPhone = customerPhone;
    this.customerEmail = customerEmail;
    this.customerAdress = customerAdress;
    this.contractId = contractId;
  }
}
