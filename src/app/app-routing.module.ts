import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZomatoAdminComponent } from './zomato-admin/zomato-admin.component';
import { ZomatoDashboardComponent } from './zomato-dashboard/zomato-dashboard.component';
import { ZomatoLoginComponent } from './zomato-login/zomato-login.component';
import { RegistrationComponent } from './registration/registration.component';
const routes: Routes = [
  {
    path: 'admin',
    component: ZomatoAdminComponent,
  },
  {
    path: 'login',
    component: ZomatoLoginComponent,
  },
  {
    path: 'dashboard',
    component: ZomatoDashboardComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
