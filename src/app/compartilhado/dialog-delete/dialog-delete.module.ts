import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogDeleteComponent } from './dialog-delete.component';

@NgModule({
  declarations: [DialogDeleteComponent],
  imports: [CommonModule, MatDialogModule],
  exports: [DialogDeleteComponent],
})
export class DialogDeleteModule {}
