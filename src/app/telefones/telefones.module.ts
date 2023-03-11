import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelefonesRoutingModule } from './telefones-routing.module';
import { TelefonesComponent } from './telefones.component';


@NgModule({
  declarations: [
    TelefonesComponent
  ],
  imports: [
    CommonModule,
    TelefonesRoutingModule
  ]
})
export class TelefonesModule { }
