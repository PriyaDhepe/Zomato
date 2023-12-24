import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZomatoDashboardComponent } from './zomato-dashboard.component';

describe('ZomatoDashboardComponent', () => {
  let component: ZomatoDashboardComponent;
  let fixture: ComponentFixture<ZomatoDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZomatoDashboardComponent]
    });
    fixture = TestBed.createComponent(ZomatoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
