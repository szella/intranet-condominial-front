import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorpoComponent } from './corpo.component';

const routes: Routes = [{ path: '', component: CorpoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorpoRoutingModule { }
