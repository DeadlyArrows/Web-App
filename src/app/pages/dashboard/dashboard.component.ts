import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { Customer } from 'src/app/model/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  id: number = 0;
  customer: Customer = new Customer();

  constructor(
    private observer: BreakpointObserver,
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe(
      (datos) => {
        console.log(datos);
        this.customer = datos;
      },
      (error) => console.log(error)
    );
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }
  
  loadCustomerData() {
    this.customerService.getCustomerById(this.id).subscribe((customer) => {
      console.log(customer);
      this.customer = customer;
    });
  }
}
