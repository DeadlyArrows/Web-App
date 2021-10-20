import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
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
        // console.log(customer);
        this.customer = customer;
        this.router.navigate(['dashboard', customer.id]);
      });
  }

  insertCustomer() {
    this.customerService.createCustomer(this.customer).subscribe(
      (datos) => console.log(datos),
      (error) => console.log(error)
    );
    this.customer = new Customer();
    this.router.navigate(['login']);
  }
}
