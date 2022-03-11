import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FacilityService} from '../module/facility.service';
import {FuramaService} from '../service-list/FuramaService';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {

  furamaService: FuramaService;

  serviceForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),

  },);

  constructor(private facility: FacilityService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
