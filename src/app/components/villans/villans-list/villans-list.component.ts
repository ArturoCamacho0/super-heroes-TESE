import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-villans-list',
  templateUrl: './villans-list.component.html',
  styleUrls: ['./villans-list.component.css']
})
export class VillansListComponent implements OnInit {
  villans = [
    {'name': 'Joker', 'level': 1},
    {'name': 'Freezer', 'level': 1},
    {'name': 'Thanos', 'level': 1},
    {'name': 'Doomsday', 'level': 1},
    {'name': 'Madara', 'level': 1}
  ];
  public deleted: string;
  public level: number;
  public interval;

  constructor(){
    this.level = 1;
  }

  ngOnInit(): void {
  }

  deleteHero(villan: string){
    clearInterval(this.interval);

    for(let i = 0; i < this.villans.length; i++){
      if(this.villans[i].name === villan){
        this.villans.splice(i, 1);
        this.deleted = villan;
        break;
      }
    }


    this.interval = setTimeout(() => {
      this.deleted = null;
    }, 3000);
  }

  sum(name: string){
    for(let i = 0; i < this.villans.length; i++){
      if(this.villans[i].name === name){
        this.villans[i].level += 1;
        break;
      }
    }
  }

  sub(name: string){
    for(let i = 0; i < this.villans.length; i++){
      if(this.villans[i].name === name){
        this.villans[i].level -= 1;
        break;
      }
    }
  }

}
