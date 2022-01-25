import { Component, OnInit } from '@angular/core';

export interface NavBarItem {
  path: string;
  name: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  navbarItems: NavBarItem[] = [
    { path: '/shopping-cart', name: 'Shopping Cart' },
  ];
  dropDownItmes: NavBarItem[] = [
    { path: '/my-orders', name: 'My Orders' },
    { path: 'admin/orders', name: 'Manage Orders' },
    { path: 'admin/products', name: 'Manage Products' },
    { path: 'logout', name: 'Log Out' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
