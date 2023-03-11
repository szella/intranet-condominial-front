import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CredenciadosComponent } from './credenciados.component';

const routes: Routes = [{ path: '', component: CredenciadosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CredenciadosRoutingModule { }
