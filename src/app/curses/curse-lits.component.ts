import { Component, OnInit } from '@angular/core';
import { Course } from './curse';

@Component({
  selector: 'app-curse-lits',
  templateUrl: './curse-lits.component.html',
  styleUrls: ['./curse-lits.component.css']
})
export class CurseLitsComponent implements OnInit {

  courses :Course[] = [];

 // constructor() { }

  ngOnInit(): void {

    this.courses = [
      {id: 1,
        name: 'Angular',
        imageUrl:'',
        price: 99.99,
        code:'XPS-8796',
        duration:120,
        rating:5.4,
        releaseDate:'December, 2, 2019'
      },
      {id: 2,
        name: 'JAVA',
        imageUrl:'',
        price: 399.99,
        code:'JAVA-8796',
        duration:80,
        rating:4,
        releaseDate:'Octuber, 09, 2021'
      },
      {id: 3,
        name: 'Ruby',
        imageUrl:'',
        price: 89,
        code:'RRB-8796',
        duration:80,
        rating:4,
        releaseDate:'Octuber, 09, 2020'
      }


    ]
  }

}
