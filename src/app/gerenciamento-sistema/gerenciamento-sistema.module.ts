import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerenciamentoSistemaRoutingModule } from './gerenciamento-sistema-routing.module';
import { GerenciamentoSistemaComponent } from './gerenciamento-sistema.component';


@NgModule({
  declarations: [
    GerenciamentoSistemaComponent
  ],
  imports: [
    CommonModule,
    GerenciamentoSistemaRoutingModule
  ]
})
export class GerenciamentoSistemaModule { }
