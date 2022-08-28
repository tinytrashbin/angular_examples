import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example4',
  templateUrl: './example4.component.html',
  styleUrls: ['./example4.component.css']
})
export class Example4Component implements OnInit {
  name: string = "Abc"
  constructor() { }
  ngOnInit(): void { }
  resetName(new_name: string): void {
    this.name = new_name
  }
}
