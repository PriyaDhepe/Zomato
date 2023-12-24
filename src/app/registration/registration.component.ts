import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  zomatoRegistration: FormGroup;
  constructor(public fb: FormBuilder) {
    this.zomatoRegistration = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      mobileNo: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      emailId: ['', Validators.required],
    });
  }
  submit() {}
}
