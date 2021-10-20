import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
// import { Customer } from 'src/app/model/customer';
import { ActivatedRoute, Router } from '@angular/router';
// import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  // userId: number = 0;
  // customer: Customer = new Customer();

  constructor(
    private observer: BreakpointObserver,
    private route: ActivatedRoute,
    private router: Router,
    // private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    // this.userId = this.route.snapshot.params['userId'];
    // this.customerService.getCustomerById(this.userId).subscribe(
    //   (datos) => {
    //     console.log(datos);
    //     this.customer = datos;
    //   },
    //   (error) => console.log(error)
    // );
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
}
