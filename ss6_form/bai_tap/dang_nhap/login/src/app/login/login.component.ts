import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9._]+[@][A-Za-z0-9._]+[.][A-Za-z0-9._]+$')]),
      pass: new FormControl('', [Validators.required, Validators.minLength(6)]),
    },
  );
  confirmPass: Boolean;

  constructor() {
  }

  ngOnInit(): void {
  }


  get email() {
    return this.myForm.get('email');
  }

  get pass() {
    return this.myForm.get('pass');
  }

  onSubmit() {

  }
}
