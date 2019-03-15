import { Component, AfterViewInit,ViewChild } from '@angular/core';
import { ParentinteractswithchildvialocalvariableComponent } from '../parentinteractswithchildvialocalvariable/parentinteractswithchildvialocalvariable.component';

@Component({
  selector: 'app-parentforviewchild',
  templateUrl: './parentforviewchild.component.html',
  styleUrls: ['./parentforviewchild.component.css']
})

export class ParentforviewchildComponent implements AfterViewInit {

  @ViewChild(ParentinteractswithchildvialocalvariableComponent)

  private timerComponent:ParentinteractswithchildvialocalvariableComponent;

  constructor() { }
  
  seconds(){
    return 0;
  }
  ngAfterViewInit() {
    setTimeout(() => this.seconds=()=>this.timerComponent.seconds, 0);
  }

  start(){
    this.timerComponent.start();
  }
  stop(){
    this.timerComponent.stop();
  } 

}
