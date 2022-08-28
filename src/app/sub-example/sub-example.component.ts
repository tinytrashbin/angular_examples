import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sub-example',
  templateUrl: './sub-example.component.html',
  styleUrls: ['./sub-example.component.css']
})
export class SubExampleComponent implements OnInit {
  @Input("name") name!: string
  @Output("resetName") resetName = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }
}
