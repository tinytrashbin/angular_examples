import { Component, OnInit } from '@angular/core';

type Book = {id: number, is_open: boolean, price: number}

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component implements OnInit {
  name: String = "Tiger Saini"
  books: Book[] = [
    {id: 1, is_open: true, price: 100},
    {id: 2, is_open: false, price: 200},
    {id: 3, is_open: true, price: 300},
  ]
  id_counter: number = 4
  constructor() { }
  ngOnInit(): void {
    console.log("API Calls here")
  }
  open(book: Book): void {
    book.is_open = true
  }
  close(book: Book): void {
    book.is_open = false
  }
  increase_price(book: Book, price: number): void {
    book.price += price
  }
  add(): void {
    this.books.push({id: this.id_counter, is_open: false, price: 600});
    this.id_counter += 1
  }
}
