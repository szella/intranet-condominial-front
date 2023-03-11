import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondominosComponent } from './condominos.component';

const routes: Routes = [{ path: '', component: CondominosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CondominosRoutingModule { }
