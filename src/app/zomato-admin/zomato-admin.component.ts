import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ZomatoService } from '../zomato.service';
@Component({
  selector: 'app-zomato-admin',
  templateUrl: './zomato-admin.component.html',
  styleUrls: ['./zomato-admin.component.scss'],
})
export class ZomatoAdminComponent {
  zomatoAllInfo: any;
  hotelInfo: any;
  hotelArray: any = [];
  locationArray: any = [];
  cuisinesArray: any = [];
  timeArray: any = [];
  starterArray: any;
  maincourseArray: any;
  dessertArray: any;
  priceArray: any;
  starterPrice: any;
  getHotelInfo: any;
  zomatoAdmin: FormGroup;
  constructor(private fb: FormBuilder, private service: ZomatoService) {
    this.zomatoAdmin = this.fb.group({
      // id: ['', Validators.required],
      hotelName: ['', Validators.required],
      // cuisines: ['', Validators.required],
      // location: ['', Validators.required],
      // time: ['', Validators.required],
      type: ['', Validators.required],
      // mainCourse: ['', Validators.required],
      dish: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      // description: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.service.getZomatoInfo().subscribe(
      (res: any) => {
        this.zomatoAllInfo = res.data;
        console.log('kkk', this.zomatoAllInfo[0].hotelDetails);
        console.log('ppp', this.zomatoAllInfo[0].menu);
        // this.hotelInfo = this.zomatoAllInfo[0].hotelDetalis;

        console.log('success', res);
      },
      (error) => {
        console.log('error', error);
      }
    );
    this.service.GetHotelInfo().subscribe(
      (res: any) => {
        this.getHotelInfo = res.data;
        console.log('success', res.data);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  // selectiOnChangehotel() {
  //   let hotel: any = [];
  //   let location: any = [];
  //   let cuisines: any = [];
  //   let time: any = [];
  //   this.zomatoAllInfo[0].hotelDetails.forEach((element: any) => {
  //     if (element.id == this.zomatoAdmin.controls['id'].value) {
  //       hotel.push(element.name);
  //       location.push(element.location);
  //       cuisines = element.cuisines;
  //       time.push(element.time);
  //     }
  //   });
  //   this.hotelArray = hotel;
  //   this.locationArray = location;
  //   this.cuisinesArray = cuisines;
  //   this.timeArray = time;

  //   this.zomatoAdmin.controls['hotelName'].setValue(this.hotelArray.toString());
  //   this.zomatoAdmin.controls['location'].setValue(
  //     this.locationArray.toString()
  //   );
  //   this.zomatoAdmin.controls['time'].setValue(this.timeArray.toString());
  // }
  // ontypeSelection() {
  //   let starter: any = [];
  //   let maincourse: any = [];
  //   let dessert: any = [];

  //   this.zomatoAllInfo[0].menu.forEach((item: any) => {
  //     if (item.category == this.zomatoAdmin.controls['category'].value) {
  //       starter = item.starter;
  //       maincourse = item.mainCourse;
  //       dessert = item.dessert;
  //     }
  //   });
  //   this.starterArray = starter;
  //   this.maincourseArray = maincourse;
  //   this.dessertArray = dessert;
  // }
  // onPriceSelection() {
  //   let price: any = [];
  //   this.zomatoAllInfo[0].menu.forEach((item: any) => {
  //     if (item.starter == this.zomatoAdmin.controls['starter'].value) {
  //       price = item.price;
  //     }
  //   });
  //   this.starterPrice = price;
  // }
  submitData() {}
}
