import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CondominosRoutingModule } from './condominos-routing.module';
import { CondominosComponent } from './condominos.component';


@NgModule({
  declarations: [
    CondominosComponent
  ],
  imports: [
    CommonModule,
    CondominosRoutingModule
  ]
})
export class CondominosModule { }
