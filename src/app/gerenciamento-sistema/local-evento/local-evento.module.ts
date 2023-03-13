import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogDeleteModule } from 'src/app/compartilhado/dialog-delete/dialog-delete.module';
import { FormularioComponent } from './formulario/formulario.component';
import { LocalEventoRoutingModule } from './local-evento-routing.module';
import { LocalEventoComponent } from './local-evento.component';


@NgModule({
  declarations: [
    LocalEventoComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,

    ReactiveFormsModule,
    MatDialogModule,
    DialogDeleteModule,

    LocalEventoRoutingModule
  ]
})
export class LocalEventoModule { }
