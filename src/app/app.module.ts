import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroModule } from './components/heroes/hero.module';
import { CounterModule } from './components/counter/counter.module';
import { VillansModule } from './components/villans/villans.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroModule,
    CounterModule,
    VillansModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
