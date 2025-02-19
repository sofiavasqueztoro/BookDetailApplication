import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookDetail } from '../bookDetail';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  standalone: false

})
export class BookDetailComponent implements OnInit {
  @Input() bookDetail!: BookDetail;
  constructor() { }

  ngOnInit() {
  }

}
