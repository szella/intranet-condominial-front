import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CabecalhoModule } from '../cabecalho/cabecalho.module';
 
import { CorpoComponent } from './corpo.component';

@NgModule({
  declarations: [CorpoComponent],
  imports: [CommonModule, CabecalhoModule],
  exports: [CorpoComponent],
})
export class CorpoModule {}
