import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userinput',
  templateUrl: './userinput.component.html',
  styleUrls: ['./userinput.component.css'],
  /* template:`
  <div class="sectionstartingdiv">
  <h3 class="headings">User Input</h3>
  <h4 class="subheadings">Binding to user input events</h4>
  <button (click)="onClickMe()">Click me!</button>
  {{ clickMessage }}
  </div>` */
})
export class UserinputComponent implements OnInit {

  constructor() { }
  
  clickMessage:string;
  values='';
  keynamevalues='';
  valueswithtemplaterefvar:string='';
  valuesforenterkey='';
  heroes=['Dhanapal','Surya','Vivek'];

  ngOnInit() {
  }
  
  onClickMe(){
  this.clickMessage="You are my hero!";  
  }

  //Without type declaration
  /* onKey(event:any){
    this.values+=event.target.value +'|';
  } */

  onKey(event:KeyboardEvent){
    this.values+=(<HTMLInputElement>event.target).value +'|';
  }
  onKeyTyped(event:any){
    this.keynamevalues+=event.key +'|';
  }

  onKeywithTemplateRef(values:string){
    this.valueswithtemplaterefvar+=values+'|';
  }

  onEnter(values:string){
    this.valuesforenterkey=values;
  }

  addHero(newHero:string){
    if(newHero)
    {
      this.heroes.push(newHero);
    }
  }
  clearHeroes(){
    if(this.heroes.length>0){
      this.heroes=[];
    }
  }
}
