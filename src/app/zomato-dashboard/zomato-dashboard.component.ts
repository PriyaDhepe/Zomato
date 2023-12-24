import { Component } from '@angular/core';

@Component({
  selector: 'app-zomato-dashboard',
  templateUrl: './zomato-dashboard.component.html',
  styleUrls: ['./zomato-dashboard.component.scss'],
})
export class ZomatoDashboardComponent {
  images = [
    { id: 1, src: 'assets/images/download1.jpeg' },
    { id: 2, src: 'assets/images/download2.jpeg' },
    { id: 3, src: 'assets/images/download3.jpeg' },
  ];
  slideIndex = 0;
  slideWidth: any;
  imageWidth = 300;
  imageHeight = 200;

  ngAfterViewInit() {
    const slidesElement = document.querySelector('.slides');
    if (slidesElement !== null) {
      this.slideWidth = slidesElement.clientWidth;
    } else {
      console.error('.slides element not found!');
      this.slideWidth = 5;
    }
  }

  nextSlide() {
    if (this.slideIndex < this.images.length - 1) {
      this.slideIndex++;
    }
  }

  prevSlide() {
    if (this.slideIndex > 0) {
      this.slideIndex--;
    }
  }
}
