import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FerramentasComponent } from './ferramentas.component';

const routes: Routes = [{ path: '', component: FerramentasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FerramentasRoutingModule { }
