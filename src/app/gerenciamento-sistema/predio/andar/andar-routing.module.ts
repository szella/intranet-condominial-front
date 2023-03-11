import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AndarComponent } from './andar.component';

const routes: Routes = [{ path: '', component: AndarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AndarRoutingModule { }
