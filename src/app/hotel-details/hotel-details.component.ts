import { Component } from '@angular/core';
import { ZomatoService } from '../zomato.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss'],
})
export class HotelDetailsComponent {
  getHotelInfo: any;
  constructor(private service: ZomatoService, private toastr: ToastrService) {}
  ngOnInit() {
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
}
