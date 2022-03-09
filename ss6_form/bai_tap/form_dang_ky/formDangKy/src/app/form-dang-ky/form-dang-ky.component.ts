import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';


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
      email: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9._]+[@][A-Za-z0-9._]+[.][A-Za-z0-9._]+$')]),
      pwGroup: new FormGroup({
        pass: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPass: new FormControl('', [Validators.required])
      }, this.comparePassword),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required,this.checkAge18]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(84)\\d{9,10}$')])
    },
  );

  constructor() {
  }

  ngOnInit()
    :
    void {
  }

  comparePassword(c: AbstractControl) {
    const v = c.value;
    return (v.pass === v.confirmPass) ?
      null : {passWordNotMatch: true};
  }

  checkAge18(age: AbstractControl): any {
    const yearRegister = Number(age.value.substr(0, 4));
    const yearCurrent = new Date().getFullYear();
    return yearCurrent - yearRegister > 18 ? null : {check18: true}
  }

  get email() {
    return this.myForm.get('email');
  }

  get pass() {
    return this.myForm.get('pwGroup').get('pass');
  }

  get confirmPass() {
    return this.myForm.get('pwGroup').get('confirmPass');
  }

  // this.myForm['controls'].child['controls'].id.valid
  get age() {
    return this.myForm.get('age');
  }

  get phone() {
    return this.myForm.get('phone');
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
