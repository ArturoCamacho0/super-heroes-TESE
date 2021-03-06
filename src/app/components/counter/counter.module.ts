import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CounterComponent } from './counter.component';


@NgModule({
    declarations: [
        CounterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule
    ],
    exports: [
        CounterComponent
    ]
})
export class CounterModule{};