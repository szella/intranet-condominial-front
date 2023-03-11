import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FerramentasRoutingModule } from './ferramentas-routing.module';
import { FerramentasComponent } from './ferramentas.component';


@NgModule({
  declarations: [
    FerramentasComponent
  ],
  imports: [
    CommonModule,
    FerramentasRoutingModule
  ]
})
export class FerramentasModule { }
