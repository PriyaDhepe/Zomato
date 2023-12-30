import { Component } from '@angular/core';

@Component({
  selector: 'app-zomato-login',
  templateUrl: './zomato-login.component.html',
  styleUrls: ['./zomato-login.component.scss'],
})
export class ZomatoLoginComponent {
  hide: boolean = true;
  login() {}
  pass() {
    this.hide = !this.hide;
  }
}
