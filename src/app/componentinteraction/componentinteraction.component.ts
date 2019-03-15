import { Component, OnInit } from '@angular/core';
import { Heroes } from '../heroes';
import { ParentinteractswithchildvialocalvariableComponent } from '../parentinteractswithchildvialocalvariable/parentinteractswithchildvialocalvariable.component';

@Component({
  selector: 'app-componentinteraction',
  templateUrl: './componentinteraction.component.html',
  styleUrls: ['./componentinteraction.component.css']
})
export class ComponentinteractionComponent implements OnInit {

  master:string='Master';
  heroes=Heroes;
  names=['Dhanapal','','Surya'];

  //Intercept input property changes with ngOnChanges
  minor=23;
  major=1;  

  //Parent listens for child event
  agreed=0; 
  disagreed=0; 
  voters=Heroes;
  constructor() { }

  ngOnInit() {
    //We can initialize heroes array in this way also
    /*  this.heroes=[
      new Hero(1,'Surya','11/11/1998'),
      new Hero(2,'Dhanapal','06/26/1964'),
      new Hero(3,'Vivek','11/02/1993'),
      new Hero(4,'Sulochana','01/01/1950'),  
      ]; */
    
  }

  //Intercept input property changes with ngOnChanges
  newMinor(){
    this.minor++;
  }
  newMajor(){
    this.major++;
    this.minor=0;
  }

  //Parent listens for child event
  onVoted(agreed:boolean){
    agreed?this.agreed++ : this.disagreed++;
  }

}
