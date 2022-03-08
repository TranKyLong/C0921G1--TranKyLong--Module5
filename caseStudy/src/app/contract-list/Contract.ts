import {FuramaService} from '../service-list/FuramaService';
import {Customer} from '../customer-list/Customer';

export class Contract {
  contractId: number;
  startDate: string;
  endDate: string;
  deposit: number;
  totalMoney: number;
  contractDetailId: number;
  serviceId: FuramaService;
  customerId: Customer;

  // tslint:disable-next-line:max-line-length

  constructor(contractId: number, startDate: string, endDate: string, deposit: number, totalMoney: number, contractDetailId: number, serviceId: FuramaService, customerId: Customer) {
    this.contractId = contractId;
    this.startDate = startDate;
    this.endDate = endDate;
    this.deposit = deposit;
    this.totalMoney = totalMoney;
    this.contractDetailId = contractDetailId;
    this.serviceId = serviceId;
    this.customerId = customerId;
  }
}

