import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compartilhado/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then((m) => m.ChatModule),
  },
  {
    path: 'eventos',
    loadChildren: () =>
      import('./eventos/eventos.module').then((m) => m.EventosModule),
  },
  {
    path: 'condominos',
    loadChildren: () =>
      import('./condominos/condominos.module').then((m) => m.CondominosModule),
  },
  {
    path: 'telefones',
    loadChildren: () =>
      import('./telefones/telefones.module').then((m) => m.TelefonesModule),
  },
  {
    path: 'funcionarios',
    loadChildren: () =>
      import('./funcionarios/funcionarios.module').then(
        (m) => m.FuncionariosModule
      ),
  },
  {
    path: 'ferramentas',
    loadChildren: () =>
      import('./ferramentas/ferramentas.module').then(
        (m) => m.FerramentasModule
      ),
  },
  {
    path: 'credenciados',
    loadChildren: () =>
      import('./credenciados/credenciados.module').then(
        (m) => m.CredenciadosModule
      ),
  },
  {
    path: 'gerenciamento-sistema',
    loadChildren: () =>
      import('./gerenciamento-sistema/gerenciamento-sistema.module').then(
        (m) => m.GerenciamentoSistemaModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
