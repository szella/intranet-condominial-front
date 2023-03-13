import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalEventoComponent } from './local-evento.component';

const routes: Routes = [{ path: '', component: LocalEventoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalEventoRoutingModule { }
