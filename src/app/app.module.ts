import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module';

import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RentComponent } from './pages/rent/rent.component';
import { MyVehiclesComponent } from './pages/my-vehicles/my-vehicles.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { SubscriptionsComponent } from './pages/subscriptions/subscriptions.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    RentComponent,
    MyVehiclesComponent,
    PromotionsComponent,
    SubscriptionsComponent,
    ConfigurationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
