import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-componentinteractionchild',
  templateUrl: './componentinteractionchild.component.html',
  styleUrls: ['./componentinteractionchild.component.css']
})
export class ComponentinteractionchildComponent implements OnInit {

  @Input() hero:Hero;
  @Input('master') masterName;
  constructor() { }

  ngOnInit() {
  }

}
