import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

import {ActivatedRoute, Router} from '@angular/router';
import {FuramaService} from '../../../model/FuramaService';
import {FacilityService} from '../../../furama_service/facility.service';

@Component({
  selector: 'app-add-new-service',
  templateUrl: './add-new-service.component.html',
  styleUrls: ['./add-new-service.component.css']
})
export class AddNewServiceComponent implements OnInit {

  rentTypeList: string[];
  furamaService: FuramaService;
  serviceForm: FormGroup;

  constructor(private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {

    this.rentTypeList = this.facilityService.getAllRentType();

    this.serviceForm = new FormGroup({
      id: new FormControl(''),
      code: new FormControl('', [Validators.required]),
      serviceName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]+')]),
      usingArea: new FormControl('', [Validators.required, this.soNguyenDuong]),
      serviceCost: new FormControl('', [Validators.required, this.soNguyenDuong]),
      maxPeople: new FormControl('', [Validators.required, this.soNguyenDuong]),
      rentType: new FormControl('', [Validators.required]),
      imgLink: new FormControl(''),
      roomStandar: new FormControl('', [Validators.required]),
      otherStandar: new FormControl('', [Validators.required]),
      poolArea: new FormControl('', [Validators.required, this.soNguyenDuong]),
      floorNumber: new FormControl('', [Validators.required, this.soNguyenDuong]),
      freeService: new FormControl('', [Validators.required]),
    },);


    // age: new FormControl('', [Validators.required,this.soNguyenDuong]),
    //   phone: new FormControl('', [Validators.required, Validators.pattern('^(84)\\d{9,10}$')])
  }

  submit() {

    if (this.serviceForm.valid) {
      this.serviceForm.value.imgLink = '../../../../assets/img/reosrt.jpg';
      console.log(this.serviceForm.value.imgLink);
      const newFuramaService = this.serviceForm.value;
      this.facilityService.createNew(newFuramaService).subscribe(value => {
        this.router.navigateByUrl('');
      });
    }

  }

  soNguyenDuong(numb: AbstractControl): any {
    const validateNumb = Number(numb.value);
    return validateNumb > 0 ? null : {checkNguyenDuong: true};
  }


  get code() {
    return this.serviceForm.get('code');
  }

  get serviceName() {
    return this.serviceForm.get('serviceName');
  }

  get usingArea() {
    return this.serviceForm.get('usingArea');
  }

  get serviceCost() {
    return this.serviceForm.get('serviceCost');
  }

  get maxPeople() {
    return this.serviceForm.get('maxPeople');
  }

  get otherStandar() {
    return this.serviceForm.get('otherStandar');
  }

  get roomStandar() {
    return this.serviceForm.get('roomStandar');
  }

  get rentType() {
    return this.serviceForm.get('rentType');
  }

  get poolArea() {
    return this.serviceForm.get('poolArea');
  }

  get floorNumber() {
    return this.serviceForm.get('floorNumber');
  }

  get freeService() {
    return this.serviceForm.get('freeService');
  }
}
