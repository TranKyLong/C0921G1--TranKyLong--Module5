import {Component, OnInit} from '@angular/core';
import {FuramaService} from '../../../model/FuramaService';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../../furama_service/facility.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../../model/Customer';
import {CustomerService} from '../../../furama_service/customer.service';
import {ArletComponent} from '../../../arlet/arlet.component';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customer: Customer;
  editCustomerType: string[];
  customerForm: FormGroup;


  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private alert: ArletComponent
  ) {
  }

  ngOnInit(): void {
    this.editCustomerType = this.customerService.getAllCustomerType();
    const editId = Number(this.activatedRoute.snapshot.params.id);
    console.log(editId + ' ---------------');
    this.customerService.findById(editId).subscribe(value => {
      this.customer = value;

      // console.log(this.furamaService.id + '/. ' + this.furamaService.serviceName);
    }, error => {
    }, () => {
      this.customerForm.patchValue(this.customer);
      console.log('day la gia tri form '+this.customerForm.value.customerPhone );
    });

    this.customerForm = new FormGroup({
      id: new FormControl(''),
      customerType: new FormControl('',[Validators.required, this.soNguyenDuong]),
      customerCode: new FormControl('',[Validators.required, Validators.pattern('^(KH-)[0-9]{4}$')]),
      customerName: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-z ]+')]),
      customerBirthday: new FormControl('',[Validators.required]),
      customerGender: new FormControl('',[Validators.required]),
      customerIdCard: new FormControl('',[Validators.required,  Validators.pattern('^\\d{9,10}$')]),
      customerPhone: new FormControl('',[Validators.required, Validators.pattern('^(84+|0)(90|91)[0-9]{7}$')]),
      customerEmail: new FormControl('',[Validators.required, Validators.pattern('^[A-Za-z0-9._]+[@][A-Za-z0-9._]+[.][A-Za-z0-9._]+$')]),
      customerAdress: new FormControl('',[Validators.required]),
      contractId: new FormControl('',),

    },);

  }

  submit() {

    const newCustomer = this.customerForm.value;

    this.customerService.updateCustomer(newCustomer).subscribe(value => {
      this.router.navigateByUrl('/customer/list');
    });

    this.alert.topend('Edit customer success')

  }

  soNguyenDuong(numb: AbstractControl): any {
    const validateNumb = Number(numb.value);
    return validateNumb > 0 ? null : {checkNguyenDuong: true};
  }


  get customerType() {
    return this.customerForm.get('customerType');
  }

  get customerCode() {
    return this.customerForm.get('customerCode');
  }

  get customerName() {
    return this.customerForm.get('customerName');
  }

  get customerBirthday() {
    return this.customerForm.get('customerBirthday');
  }

  get customerGender() {
    return this.customerForm.get('customerGender');
  }

  get customerIdCard() {
    return this.customerForm.get('customerIdCard');
  }

  get customerPhone() {
    return this.customerForm.get('customerPhone');
  }

  get customerEmail() {
    return this.customerForm.get('customerEmail');
  }

  get customerAdress() {
    return this.customerForm.get('customerAdress');
  }

  get contractId() {
    return this.customerForm.get('contractId');
  }



}
