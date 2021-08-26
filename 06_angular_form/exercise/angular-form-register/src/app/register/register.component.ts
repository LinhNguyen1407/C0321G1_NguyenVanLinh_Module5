import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  countryList: country[] = [
    new country(1, 'Việt Nam'),
    new country(2, 'Anh'),
    new country(3, 'Pháp')
  ];

  constructor() {
    this.registerForm = new FormGroup({
      email: new FormControl('',
        [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('',
        [Validators.required, Validators.minLength(6)]),
      country: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, this.checkAge]),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('',
        [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
    }, {
      validators: this.checkConfirmPassword('password', 'confirmPassword')
    });
  }

  ngOnInit(): void {
  }

  checkAge(age: AbstractControl): any {
    return age.value >= 18 ? null: {invalidAge: true}
  }

  checkConfirmPassword(password: string, confirmPassword: string): any {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[password];
      const matchingControl = formGroup.controls[confirmPassword];
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ passwordNotMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  sendInfoRegister() {
    console.log(this.registerForm.value)
  }
}

class country {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
