import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ZomatoService {
  constructor(private http: HttpClient) {}
  getZomatoInfo() {
    const url = 'http://localhost:3000/getFoodsOption';
    return this.http.get(url);
  }
  postHotelInfo(body: any) {
    const url = 'http://localhost:3000/createHotel';
    return this.http.post(url, body);
  }
  GetHotelInfo() {
    const url = 'http://localhost:3000/getHotelInfo';
    return this.http.get(url);
  }
  postFoodItem(body: any) {
    const url = 'http://localhost:3000/listFoodItem';
    return this.http.post(url, body);
  }
}
