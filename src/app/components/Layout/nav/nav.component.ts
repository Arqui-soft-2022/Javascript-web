import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  active:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  toggleOptions():void { this.active= !this.active }
}
