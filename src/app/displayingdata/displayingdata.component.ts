import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-displayingdata',
  styleUrls: ['./displayingdata.component.css'],
  //templateUrl:'./displayingdata.component.html'
   template:
    `<h1>Displaying Data</h1>
    <h2>{{ title }}</h2>
    <h3>My favorite hero is: {{ myHero.name }}</h3>
    <ul>
    <li *ngFor="let hero of heroes">
    {{ hero.name  }}
    </li>
    </ul>
    ` 
})
export class DisplayingdataComponent implements OnInit {
  title='Tour of Heroes';
  heroes;
  myHero;
  constructor() { }

  ngOnInit() {
    this.heroes=[
      new Hero(1,'Surya','11/11/1998'),
      new Hero(2,'Dhanapal','06/26/1964'),
      new Hero(3,'Vivek','11/02/1993'),
      new Hero(4,'Sulochana','01/01/1950'),  
      ];
      this.myHero=this.heroes[1];
    
  }

}
