import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @Input() fileItem: string;

  constructor() { }
  

  array = [
    { id: "1", name: 'X' },
    { id: "2", name: 'Y' },
    { id: "3", name: 'Z' }
  ];

  bookItem(){
    for (var i=0; i<=this.array.length; i++){
      if(this.array[i].id == this.fileItem){
        console.log("ok");
        return i;
        
      }
    }
  }


  ngOnInit() {
    // let bookArray = null;
    console.log(this.fileItem);
    // bookArray = this.array[this.bookItem()];
    this.bookItem();
  }

}
