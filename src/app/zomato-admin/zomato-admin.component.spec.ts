import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZomatoAdminComponent } from './zomato-admin.component';

describe('ZomatoAdminComponent', () => {
  let component: ZomatoAdminComponent;
  let fixture: ComponentFixture<ZomatoAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZomatoAdminComponent]
    });
    fixture = TestBed.createComponent(ZomatoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
