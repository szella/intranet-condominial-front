import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CredenciadosRoutingModule } from './credenciados-routing.module';
import { CredenciadosComponent } from './credenciados.component';


@NgModule({
  declarations: [
    CredenciadosComponent
  ],
  imports: [
    CommonModule,
    CredenciadosRoutingModule
  ]
})
export class CredenciadosModule { }
