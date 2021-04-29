import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillansListComponent } from './villans-list/villans-list.component';

@NgModule({
  declarations: [
    VillansListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VillansListComponent
  ]
})
export class VillansModule { }
