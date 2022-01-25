import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.sass']
})
export class DropdownComponent implements OnInit {
  @Input('dropDownItem') items:string[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
