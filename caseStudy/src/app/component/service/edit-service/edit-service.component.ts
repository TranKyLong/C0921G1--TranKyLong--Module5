import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {FuramaService} from '../../../model/FuramaService';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../../furama_service/facility.service';


@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {

  furamaService: FuramaService;
  editRentType: string[];
  serviceForm: FormGroup;


  constructor(private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.editRentType = this.facilityService.getAllRentType();
    const editId = Number(this.activatedRoute.snapshot.params.id)
    console.log(editId + ' ---------------');
    this.facilityService.findById(editId).subscribe(value => {
      this.furamaService = value;
      // console.log(this.furamaService.id + '/. ' + this.furamaService.serviceName);
    }, error => {
    }, () => {
      this.serviceForm.patchValue(this.furamaService);
      // console.log('day la gia tri form '+this.serviceForm.value.id + '/. ' + this.serviceForm.value.serviceName);
    });

    this.serviceForm = new FormGroup({
      id: new FormControl(''),
      code: new FormControl('',[Validators.required]),
      serviceName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]+')]),
      usingArea: new FormControl('',[Validators.required, this.soNguyenDuong]),
      serviceCost: new FormControl('',[Validators.required, this.soNguyenDuong]),
      maxPeople: new FormControl('',[Validators.required, this.soNguyenDuong]),
      rentType: new FormControl('',[Validators.required]),
      imgLink: new FormControl(''),
      roomStandar: new FormControl('',[Validators.required]),
      otherStandar: new FormControl('',[Validators.required]),
      poolArea: new FormControl('',[Validators.required, this.soNguyenDuong]),
      floorNumber: new FormControl('',[Validators.required, this.soNguyenDuong]),
      freeService: new FormControl('',[Validators.required]),
    },);
  }

  submit() {
    const furamaService = this.serviceForm.value;
    console.log(furamaService);
    this.facilityService.updateService(furamaService).subscribe(value => {
      this.router.navigateByUrl('');
    });

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
