import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-unidade',
  templateUrl: './unidade.component.html',
  styleUrls: ['./unidade.component.scss']
})
export class UnidadeComponent {

  constructor(
    public dialogRef: MatDialogRef<UnidadeComponent>,
    @Inject(MAT_DIALOG_DATA) public andarId: number,
  ) {

  }
}
