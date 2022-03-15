import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../model/Customer';

import {FuramaService} from '../../../model/FuramaService';
import {FacilityService} from '../../../furama_service/facility.service';
import {CustomerService} from '../../../furama_service/customer.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerList: Customer[];
  customer: Customer = new Customer();
  modalType: number;
  p: number = 1;
  name: string;

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
    console.log('hi');
  }

  getAll() {
    this.customerService.getAll().subscribe(value => this.customerList = value
    );

  }

  findById(id: number) {

    this.customerService.findById(id).subscribe(value => {
      this.customer = value;
    });


  }

  deleteCustomer(id: number) {
    console.log('this id :: ' + id);
    this.customerService.deleteCustomer(id).subscribe(() => {
        this.ngOnInit();
        this.router.navigateByUrl('customer/list');
      }
    );

  }

  search() {
    if (this.name == '') {
      this.ngOnInit();
    } else {
      this.customerList = this.customerList.filter(res => {
        return res.customerName.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
      this.p = 0;
    }
  }
}
