import { Component, OnInit } from '@angular/core';

interface NavBarItem {
  path:string,
  name:string
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})

export class NavbarComponent implements OnInit {
  navbarItems:NavBarItem[]=[{path:'/shopping-cart',
    name:'Shopping Cart'}]
  dropDownItmes:string[]=['My Orders','Manage Orders','Manage Products','Log Out']
  constructor() { }

  ngOnInit(): void {
  }

}
