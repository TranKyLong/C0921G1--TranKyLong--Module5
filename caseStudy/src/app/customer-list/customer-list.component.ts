import {Component, OnInit} from '@angular/core';
import {Customer} from './Customer';
import {FuramaService} from '../service-list/FuramaService';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  public customerList: Customer[];

  constructor() {
  }

  ngOnInit(): void {
    this.customerList = [];
    this.customerList.push(new Customer(1, 1, 'customerCode', 'customerName', '25-5-2005', 1, '0123456789', '0901234567', 'mail@gmail.com', 'customerAdress', 1));
    this.customerList.push(new Customer(1, 1, 'customerCode', 'customerName', '25-5-2005', 1, '0123456789', '0901234567', 'mail@gmail.com', 'customerAdress', 1));
    this.customerList.push(new Customer(1, 1, 'customerCode', 'customerName', '25-5-2005', 1, '0123456789', '0901234567', 'mail@gmail.com', 'customerAdress', 1));
    this.customerList.push(new Customer(1, 1, 'customerCode', 'customerName', '25-5-2005', 1, '0123456789', '0901234567', 'mail@gmail.com', 'customerAdress', 1));
    this.customerList.push(new Customer(1, 1, 'customerCode', 'customerName', '25-5-2005', 1, '0123456789', '0901234567', 'mail@gmail.com', 'customerAdress', 1));
    this.customerList.push(new Customer(1, 1, 'customerCode', 'customerName', '25-5-2005', 1, '0123456789', '0901234567', 'mail@gmail.com', 'customerAdress', 1));
    this.customerList.push(new Customer(1, 1, 'customerCode', 'customerName', '25-5-2005', 1, '0123456789', '0901234567', 'mail@gmail.com', 'customerAdress', 1));
  }

}
