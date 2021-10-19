import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  email: string = '';
  password: string = '';
  customer: Customer = new Customer();
  customers: Customer[] = [];

  constructor(
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.loadDataCustomers();
  }

  loadDataCustomers() {
    this.customerService
      .getCustomerList()
      .subscribe((customers) => (this.customers = customers));
  }

  searchAddressesByEmailAndPassword() {
    this.customerService
      .getAddressesByEmailAndPassword(this.email, this.password)
      .subscribe((customer) => {
        console.log(customer);
        this.customer = customer;
        this.router.navigate(['dashboard', customer.id]);
      });
  }

  // loadCustomer(customer: Customer) {
  //   this.router.navigate(['dashboard', customer.id]);
  // }
}
