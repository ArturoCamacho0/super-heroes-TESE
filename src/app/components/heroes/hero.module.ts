import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroComponent } from './hero/hero.component';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';

@NgModule({
    declarations: [
        HeroComponent,
        ListHeroesComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HeroComponent,
        ListHeroesComponent
    ]
})
export class HeroModule{};