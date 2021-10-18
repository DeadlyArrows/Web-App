import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  links = ['sign-in', 'sign-up'];
  activeLink = 'sign-in';
  activeLink1 = 'sign-up';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  toSignIn() {
    this.router.navigate(['sign-in']);
  }
  toSignUp() {
    this.router.navigate(['sign-up']);
  }
}
