import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parentlistensforchildevent',
  templateUrl: './parentlistensforchildevent.component.html',
  styleUrls: ['./parentlistensforchildevent.component.css']
})
export class ParentlistensforchildeventComponent implements OnInit {

  @Input() name;
  @Output() voted=new EventEmitter<boolean>();
  didVote:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  vote(agreed:boolean){
    this.voted.emit(agreed);
    this.didVote=true;
  }

}
