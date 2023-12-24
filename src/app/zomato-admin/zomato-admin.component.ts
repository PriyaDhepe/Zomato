import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-zomato-admin',
  templateUrl: './zomato-admin.component.html',
  styleUrls: ['./zomato-admin.component.scss'],
})
export class ZomatoAdminComponent {
  zomatoAdmin: FormGroup;
  constructor(private fb: FormBuilder) {
    this.zomatoAdmin = this.fb.group({
      id: ['', Validators.required],
      hotelName: ['', Validators.required],
      cuisines: ['', Validators.required],
      location: ['', Validators.required],
      time: ['', Validators.required],
      type: ['', Validators.required],
      category: ['', Validators.required],
      dishName: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  submitData() {}
}
