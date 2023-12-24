import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZomatoLoginComponent } from './zomato-login.component';

describe('ZomatoLoginComponent', () => {
  let component: ZomatoLoginComponent;
  let fixture: ComponentFixture<ZomatoLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZomatoLoginComponent]
    });
    fixture = TestBed.createComponent(ZomatoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
