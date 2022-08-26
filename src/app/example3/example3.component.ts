import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.css']
})
export class Example3Component implements OnInit {
  products: any[] = []
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://fakestoreapi.com/products').subscribe(data => {
      this.products = data
    })
  }
}
