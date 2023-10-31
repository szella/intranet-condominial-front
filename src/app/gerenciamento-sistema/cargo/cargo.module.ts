import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogDeleteModule } from 'src/app/compartilhado/dialog-delete/dialog-delete.module';
import { CargoRoutingModule } from './cargo-routing.module';
import { CargoComponent } from './cargo.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    CargoComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,

    ReactiveFormsModule,
    MatDialogModule,
    DialogDeleteModule,

    CargoRoutingModule
  ]
})
export class CargoModule { }
