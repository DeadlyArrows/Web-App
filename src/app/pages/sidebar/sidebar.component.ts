import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  userId: number = 0;
  customer: Customer = new Customer();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.customerService.getCustomerById(this.userId).subscribe(
      (datos) => {
        console.log(datos);
        this.customer = datos;
      },
      (error) => console.log(error)
    );
  }

  loadCustomerData() {
    this.customerService.getCustomerById(this.userId).subscribe((customer) => {
      console.log(customer);
      this.customer = customer;
    });
  }
}
