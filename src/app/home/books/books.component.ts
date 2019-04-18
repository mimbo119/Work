import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @Input() fileItem: string;

  constructor() { }
  
  bookArray = [];
  
  array = [
    { id: "1", name: 'X' },
    { id: "2", name: 'YY' },
    { id: "2", name: 'Y' },
    { id: "3", name: 'Z' }
  ];

  bookItem(file){
    for (var i=0; i<=this.array.length; i++){
      if(this.array[i].id == file){
        this.bookArray.push(this.array[i]);
      }
    }
  }


  ngOnInit() {
    this.bookItem(this.fileItem);
    console.log(this.bookArray)
  }

}
