import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  nombre: string = 'Saitama';
  edad: number = 30;

  constructor(){}

  ngOnInit(): void {
  }

  obtenerNombre(): string{
    return this.nombre + '-' + this.edad;
  }

  cambiarNombre(): void{
    this.nombre = 'Superman';
  }

  cambiarEdad(): void{
    this.edad = 49;
  }

  cambiarMayusculas(): void{
    this.nombre = this.nombre.toUpperCase();
  }
}
