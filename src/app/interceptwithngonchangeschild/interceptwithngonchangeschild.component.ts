import { Component,Input, SimpleChange, OnChanges } from '@angular/core';

@Component({
  selector: 'app-interceptwithngonchangeschild',
  templateUrl: './interceptwithngonchangeschild.component.html',
  styleUrls: ['./interceptwithngonchangeschild.component.css']
})
export class InterceptwithngonchangeschildComponent implements OnChanges {
 @Input() minor:number;
 @Input() major:number;
 changeLog:string[]=[];

 ngOnChanges(changes:{[propKey:string]:SimpleChange}){
  
  let log:string[]=[];
  for(let propName in changes)
  {
      let changedProp=changes[propName];
      let to=JSON.stringify(changedProp.currentValue);
      //alert("changes "+JSON.stringify(changes))
      if(changedProp.isFirstChange())
      {
        log.push(`Initial value of ${propName} set to ${to}`);
      }
      else{
        let from=JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
  }
  this.changeLog.push(log.join(','));

 }

  constructor() { }

  ngOnInit() {
  }

}
