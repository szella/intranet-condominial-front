import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogDeleteModule } from 'src/app/compartilhado/dialog-delete/dialog-delete.module';

import { AndarComponent } from './andar/andar.component';
import { UnidadeComponent } from './andar/unidade/unidade.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PredioRoutingModule } from './predio-routing.module';
import { PredioComponent } from './predio.component';

@NgModule({
  declarations: [
    PredioComponent,
    FormularioComponent,
    AndarComponent,
    UnidadeComponent,
  ],
  imports: [
    CommonModule,

    ReactiveFormsModule,
    MatDialogModule,
    DialogDeleteModule,

    PredioRoutingModule,
  ],
})
export class PredioModule {}
