import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelefonesComponent } from './telefones.component';

const routes: Routes = [{ path: '', component: TelefonesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelefonesRoutingModule { }
