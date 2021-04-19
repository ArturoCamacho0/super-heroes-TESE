import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.css']
})
export class ListHeroesComponent implements OnInit {
  heroes: string[] = ['Hulk', 'Superman', 'Green Arrow', 'Flash'];
  public deleted: string;

  constructor() { }

  ngOnInit(): void {
  }

  deleteHero(hero: string): void{
    this.heroes.splice(this.heroes.indexOf(hero), 1);

    this.deleted = hero;
  }

}
