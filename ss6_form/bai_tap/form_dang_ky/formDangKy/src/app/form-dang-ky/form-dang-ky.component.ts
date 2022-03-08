import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-form-dang-ky',
  templateUrl: './form-dang-ky.component.html',
  styleUrls: ['./form-dang-ky.component.css']
})
export class FormDangKyComponent implements OnInit {
  countryList = [
    {id: 1, name: 'Huế'},
    {id: 2, name: 'Sài Gòn'},
    {id: 3, name: 'Hà Nội'},
    {id: 4, name: 'Hoàng Sa'},
    {id: 5, name: 'Hạ Long'}
  ];
  myForm = new FormGroup({
      email: new FormControl(),
      pass: new FormControl(),
      country: new FormControl(),
      age: new FormControl(),
      gender: new FormControl(),
      phone: new FormControl()
    }
  )
  ;

  constructor() {
  }

  ngOnInit()
    :
    void {
  }


  onSubmit() {
    console.log(this.myForm.value);
  }
}
