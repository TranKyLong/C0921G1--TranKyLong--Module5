// import {Component, OnInit} from '@angular/core';
// import {Customer} from './Customer';
// import {FuramaService} from '../service-list/FuramaService';
// import {Contract} from '../contract-list/Contract';
//
// @Component({
//   selector: 'app-customer-list',
//   templateUrl: './customer-list.component.html',
//   styleUrls: ['./customer-list.component.css']
// })
// export class CustomerListComponent implements OnInit {
//
//   public customerList: Customer[];
//   contract : Contract;
//
//   constructor() {
//   }
//   ngOnInit(): void {
//     (new Contract(1, '20-05-2021', '30-0-2022', 300, 500, 1, 1, 1, 1));
//     (new Contract(2, '20-05-2021', '30-0-2022', 300, 500, 1, 1, 1, 1));
//     (new Contract(13, '20-06-2021', '30-0-2022', 300, 500, 1, 1, 1, 1));
//     (new Contract(14, '20-05-2021', '30-0-2022', 233, 500, 1, 1, 1, 1));
//     (new Contract(15, '20-05-2021', '30-0-2022', 567, 500, 1, 1, 1, 1));
//     (new Contract(16, '20-05-2021', '30-0-2022', 123, 500, 1, 1, 1, 1));
//     (new Contract(17, '20-05-2021', '30-0-2022', 224, 500, 2, 1, 1, 1));
//
//     this.customerList = [];
//     this.customerList.push(new Customer(1, 1, 'customerCode', 'customerName', '25-5-2005', 1, '0123456789', '0901234567', 'mail@gmail.com', 'customerAdress', 1));
//     this.customerList.push(new Customer(2, 2, 'customerCode', 'customerName2', '25-5-2005', 1, '0123456789', '0901234567', 'mail@gmail.com', 'customerAdress', 1));
//     this.customerList.push(new Customer(3, 3, 'customerCode', 'customerName3', '25-5-2005', 1, '0123456789', '0901234567', 'mail@gmail.com', 'customerAdress', 1));
//     this.customerList.push(new Customer(4, 4, 'customerCode', 'customerName4', '25-5-2005', 1, '0123456789', '0901234567', 'mail@gmail.com', 'customerAdress', 1));
//     this.customerList.push(new Customer(5, 5, 'customerCode', 'customerName5', '25-5-2005', 1, '0123456789', '0901234567', 'mail@gmail.com', 'customerAdress', 1));
//     this.customerList.push(new Customer(6, 2, 'customerCode', 'customerName6', '25-5-2005', 1, '0123456789', '0901234567', 'mail@gmail.com', 'customerAdress', this.contract : {}));
//     this.customerList.push(new Customer(11, 1, 'customerCode', 'customerName7', '25-5-2005', 1, '0123456789', '0901234567', 'mail@gmail.com', 'customerAdress', ));
//     this.customerList.push(new Customer(12, 1, 'customerCode', 'customerName7', '25-5-2005', 1, '0123456789', '0901234567', 'mail@gmail.com', 'customerAdress', ));
//     this.customerList.push(new Customer(13, 1, 'customerCode', 'customerName7', '25-5-2005', 1, '0123456789', '0901234567', 'mail@gmail.com', 'customerAdress', ));
//     this.customerList.push(new Customer(14, 1, 'customerCode', 'customerName7', '25-5-2005', 1, '0123456789', '0901234567', 'mail@gmail.com', 'customerAdress', ));
//     this.customerList.push(new Customer(15, 1, 'customerCode', 'customerName7', '25-5-2005', 1, '0123456789', '0901234567', 'mail@gmail.com', 'customerAdress', ));
//
//   }
//
// }
