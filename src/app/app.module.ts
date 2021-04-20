import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroModule } from './components/heroes/hero.module';
import { HeroComponent } from './components/heroes/hero/hero.component';
import { ListHeroesComponent } from './components/heroes/list-heroes/list-heroes.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterModule } from './components/counter/counter.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroModule,
    CounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
