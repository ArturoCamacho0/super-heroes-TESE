import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public number: number;
  public count: number;

  constructor(){
    this.number = 0;
    this.count = 1;
  }

  ngOnInit(): void {
  }

  sum(){
    this.number += this.count;
  }

  sub(){
    this.number -= this.count;
  }

}
