import { Component, Input, OnInit } from '@angular/core';
import { NavBarItem } from '../navbar/navbar.component';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.sass'],
})
export class DropdownComponent implements OnInit {
  @Input('dropDownItem') items: NavBarItem[] = [];
  constructor() {}

  ngOnInit(): void {}
}
