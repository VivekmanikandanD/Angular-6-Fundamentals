import { Component, OnInit, EventEmitter, Output, Directive } from '@angular/core';
import { Hero } from '../hero';
import { Heroes } from '../heroes';
@Component({
  selector: 'app-interpolationandtemplateexpressions',
  templateUrl: './interpolationandtemplateexpressions.component.html',
  styleUrls: ['./interpolationandtemplateexpressions.component.css']
})

//For Aliasing input/output properties
/* @Directive({
  outputs:['clicks:myClick']
}) */

export class InterpolationandtemplateexpressionsComponent implements OnInit {

  currentCustomer:string;
  title:string;
  customers;
  templatereferencevariable;
  heroImageUrl;
  titlebinding;
  titlenew;
  evilTitle;
  actionName:string;
  isSpecial;
  isSpecialStyle;
  currentHero:Hero;
  size:number=8;
  currentClasses={}; //For ngClass attribute binding
  canSave; //For ngClass attribute binding
  isUnchanged; //For ngClass attribute binding
  isSpecialforngClass;
  
  heroes=Heroes;
  //For ngStyle attribute binding
  currentStyles;
  isitalic;
  isbold;
  issizeforngStyle;

  constructor() { }

  ngOnInit() {
    this.currentCustomer="Vivek Manikandan D";
    this.title="Software Programmer"
    this.customers=[
      {
      "id":1,
      "name":"Dhanapal V"},
      {
        "id":2,
        "name":"Surya Velayudam D"},
      {
        "id":3,
        "name":"Vivek Manikandan D"}
    ];

    this.heroImageUrl="images/ConnectorLogo2.jpg";
    this.titlebinding="Interpolated title and property bound title";
    this.titlenew="Interpolated title and property bound title 2";
    this.evilTitle='Template <script>alert("evil never sleeps")</script>Syntax';
    this.actionName="Aria-Label example";
    this.isSpecial=true;
    this.isSpecialStyle=true;
    this.currentHero={
      id:1,
      name:"Dhanapal Surya Vivek",
      dob:"11/02/1993"
    }

    this.canSave=false;
    this.isUnchanged=false;
    this.isSpecialforngClass=false;
    this.setCurrentClasses();
    
    this.isitalic=false;
    this.isbold=false;
    this.issizeforngStyle=false;
    this.setCurrentStyles();
  }

  deleteHero(gethero){
    alert("Delete hero")
  }
  onSave(){
    alert("Saved")
  }

  getVal():number{
    return 2;
  }

  gettheValue(getthisvalue){
    this.templatereferencevariable=getthisvalue;
  }
  checkClassBinding(){
    this.isSpecial=!this.isSpecial;
  }

  checkStyleBinding(){
    this.isSpecialStyle=!this.isSpecialStyle;
  }

  /* Custom events with EventEmitter */
  deleteRequest=new EventEmitter<Hero>();
  delete()
  {
    this.deleteRequest.emit(this.currentHero);
  }
  /* we should invoke deleteHero from emitted $event object from Child component in parent component like this*/
  /* <app-hero-detail (deleteRequest)="deleteHero($event)" [hero]="currentHero"></app-hero-detail> */

  
  decrease(){
    if(this.size>8)
    {
      this.size=this.size-1;
    }
  }

  increase(){
    if(this.size<40)
    {
      this.size=this.size+1;
    }
  }

  //For ngClass binding
  setCurrentClasses(){
    this.currentClasses={
      'saveable': this.canSave,
      'modified': this.isUnchanged,
      'specialforngClass': this.isSpecialforngClass
    }
  }

  checksaveableclass(){
    this.canSave=!this.canSave;
    this.setCurrentClasses();
  }
  
  checkunchangedclass(){
    this.isUnchanged=!this.isUnchanged;
    this.setCurrentClasses();
  }
  checkspecialclass(){
    this.isSpecialforngClass=!this.isSpecialforngClass;
    this.setCurrentClasses();
  }

  
  //For ngStyle binding
  setCurrentStyles(){
    this.currentStyles={
      'font-style': this.isitalic ? 'italic':'normal',
      'font-weight': this.isbold? 'bold':'normal',
      'font-size': this.issizeforngStyle? '28px':'16px'
    }
  }

  checkfontstyle(){
    this.isitalic=!this.isitalic;
    this.setCurrentStyles();
  }
  
  checkfontweight(){
    this.isbold=!this.isbold;
    this.setCurrentStyles();
  }
  checkfontsize(){
    this.issizeforngStyle=!this.issizeforngStyle;
    this.setCurrentStyles();
  }

  //For Two-way binding with [ngModel] and (ngModelChange)
  setUpperCaseName(name:string){
    this.currentHero.name=name.toUpperCase();
  }

  trackByHeroes(index:number,hero:Hero):number{
    return hero.id;
  }

  callPhone(phonenumber){
    alert("The entered phone number is "+phonenumber)
  }
  
  withrefalternative(testname)
  {
   alert("The entered test name is "+testname) 
  }

  /* @Output('myClick') clicks=new EventEmitter<string>(); */

  

}
