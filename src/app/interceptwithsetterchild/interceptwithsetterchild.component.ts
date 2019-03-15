import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interceptwithsetterchild',
  templateUrl: './interceptwithsetterchild.component.html',
  styleUrls: ['./interceptwithsetterchild.component.css']
})
export class InterceptwithsetterchildComponent implements OnInit {
  private _name;

  @Input()

  set name(name:string){
    this._name=(name && name.trim()) || '<no-name-set>';
  }

  get name():string{
    return this._name; 
  }
  constructor() { }

  ngOnInit() {
  }

}
