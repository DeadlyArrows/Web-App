import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RentComponent } from './pages/rent/rent.component';
import { MyVehiclesComponent } from './pages/my-vehicles/my-vehicles.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { SubscriptionsComponent } from './pages/subscriptions/subscriptions.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard/:userId',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'rent', pathMatch: 'full' },
      { path: 'rent', component: RentComponent },
      { path: 'my-vehicles', component: MyVehiclesComponent },
      { path: 'promotions', component: PromotionsComponent },
      { path: 'subscriptions', component: SubscriptionsComponent },
      { path: 'configurations', component: ConfigurationComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
