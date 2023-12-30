import { Component } from '@angular/core';
import { ZomatoService } from '../zomato.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent {
  postedHotelDetails: any;
  hotel: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: ZomatoService,
    private toastr: ToastrService
  ) {
    this.hotel = this.fb.group({
      hotelName: ['', Validators.required],
      location: ['', Validators.required],
      time: ['', Validators.required],
      cuisines: ['', Validators.required],
      type: ['', Validators.required],
    });
  }
  addHotel() {
    let body = {
      name: this.hotel.controls['hotelName'].value,
      location: this.hotel.controls['location'].value,
      type: this.hotel.controls['time'].value,
      cuisines: this.hotel.controls['cuisines'].value,
      time: this.hotel.controls['type'].value,
    };
    this.service.postHotelInfo(body).subscribe(
      (res: any) => {
        this.postedHotelDetails = res;
        console.log('success', res);
        this.toastr.success('Hotel added successfully');
      },
      (error) => {
        console.log('error', error);
      }
    );
    this.hotel.reset();
  }
}
