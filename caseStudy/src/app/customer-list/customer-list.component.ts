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
    this.customerList.push(new Customer(2, 2, 'customerCode', 'customerName2', '25-5-2005', 1, '0123456789', '0901234567', 'mail@gmail.com', 'customerAdress', 1));
    this.customerList.push(new Customer(3, 3, 'customerCode', 'customerName3', '25-5-2005', 1, '0123456789', '0901234567', 'mail@gmail.com', 'customerAdress', 1));
    this.customerList.push(new Customer(4, 4, 'customerCode', 'customerName4', '25-5-2005', 1, '0123456789', '0901234567', 'mail@gmail.com', 'customerAdress', 1));
    this.customerList.push(new Customer(5, 5, 'customerCode', 'customerName5', '25-5-2005', 1, '0123456789', '0901234567', 'mail@gmail.com', 'customerAdress', 1));
    this.customerList.push(new Customer(6, 2, 'customerCode', 'customerName6', '25-5-2005', 1, '0123456789', '0901234567', 'mail@gmail.com', 'customerAdress', 1));
    this.customerList.push(new Customer(11, 1, 'customerCode', 'customerName7', '25-5-2005', 1, '0123456789', '0901234567', 'mail@gmail.com', 'customerAdress', 1));

  }

}
