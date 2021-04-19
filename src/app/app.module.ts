import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './components/heroes/hero/hero.component';
import { ListHeroesComponent } from './components/heroes/list-heroes/list-heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ListHeroesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
