import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../model/Customer';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../furama_service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FuramaService} from '../../../model/FuramaService';
import {FacilityService} from '../../../furama_service/facility.service';

@Component({
  selector: 'app-add-new-contract',
  templateUrl: './add-new-contract.component.html',
  styleUrls: ['./add-new-contract.component.css']
})
export class AddNewContractComponent implements OnInit {
  customer: Customer;
  service: FuramaService;
  customerList: Customer[];
  serviceList: FuramaService[];
  cusId: number;
  contractForm: FormGroup;


  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private furamaService: FacilityService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.cusId = Number(this.activatedRoute.snapshot.params.id);
    if (this.cusId != -1) {
      this.customerService.findById(this.cusId).subscribe(value => {
        this.customer = value;
        this.contractForm.value.customerId = value;
      });
    }
    this.customerService.getAll().subscribe(value => {
      this.customerList = value;
    });
    this.furamaService.getAll().subscribe(value => {
      this.serviceList = value;
    });

    this.contractForm = new FormGroup({
      id: new FormControl(''),
      contractCode: new FormControl('', [Validators.required]),
      customerId: new FormControl('', [Validators.required]),
      serviceId: new FormControl('', [Validators.required]),
      starDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      deposit: new FormControl('', [Validators.required, this.soNguyenDuong])
    },);
  }

  submit() {
    const newCustomer = this.contractForm.value;
    this.customerService.createNew(newCustomer).subscribe(value => {
      this.router.navigateByUrl('/contract/list');
    });

  }

  soNguyenDuong(numb: AbstractControl): any {
    const validateNumb = Number(numb.value);
    return validateNumb > 0 ? null : {checkNguyenDuong: true};
  }

  get contractCode() {
    return this.contractForm.get('contractCode');
  }

  get customerId() {
    return this.contractForm.get('customerId');
  }

  get serviceId() {
    return this.contractForm.get('serviceId');
  }

  get starDate() {
    return this.contractForm.get('starDate');
  }

  get endDate() {
    return this.contractForm.get('endDate');
  }

  get deposit() {
    return this.contractForm.get('deposit');
  }



}
