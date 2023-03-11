import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciamentoSistemaComponent } from './gerenciamento-sistema.component';

const routes: Routes = [
  { path: '', component: GerenciamentoSistemaComponent },
  {
    path: 'predio',
    loadChildren: () =>
      import('./predio/predio.module').then((m) => m.PredioModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerenciamentoSistemaRoutingModule {}
