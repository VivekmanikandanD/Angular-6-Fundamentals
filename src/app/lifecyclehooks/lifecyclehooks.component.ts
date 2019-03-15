import { Component, OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  lifecycleinput="";
  lifecyclemsgs=[];
  constructor() { }

  ngOnInit() {
    //this.lifecycleinput=this.lifecycleinput+'OnInit() lifecylce method called';
    this.lifecyclemsgs.push('OnInit() lifecylce method called');
  }
  ngOnChanges(changes:SimpleChanges){
    let cur="";
    let prev="";
    for(let propName in changes){
      let chng=changes[propName];
      cur=JSON.stringify(chng.currentValue);
      prev=JSON.stringify(chng.previousValue);
      alert(JSON.stringify(changes)+" JSON.stringify(changes)")
      //alert(prev+" prev")
    }
    //this.lifecycleinput=this.lifecycleinput+cur+prev;
    this.lifecyclemsgs.push(`OnChanges() lifecylce method called ${cur} + ${prev}`);
  }
  ngDoCheck(){
    this.lifecyclemsgs.push('DoCheck() lifecylce method called');
  }
  ngAfterContentInit(){
    this.lifecyclemsgs.push('AfterContentInit() lifecylce method called');
  }
  ngAfterContentChecked(){
    this.lifecyclemsgs.push('AfterContentChecked() lifecylce method called');
  }
  ngAfterViewInit(){
    this.lifecyclemsgs.push('AfterViewInit() lifecylce method called');
  }
  ngAfterViewChecked(){
    this.lifecyclemsgs.push('AfterViewChecked() lifecylce method called');
  }
  ngOnDestroy(){
    this.lifecyclemsgs.push('OnDestroy() lifecylce method called');
  }

  clearlifecylcemsgs(){
    this.lifecycleinput="";
    this.lifecyclemsgs=[];
  }

}
