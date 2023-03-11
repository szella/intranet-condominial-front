import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss'],
})
export class DialogDeleteComponent {
  mensagem: string = '';

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {
    this.mensagem = data;
  }

  deletar() {
    this.dialogRef.close(true);
  }

  fechar(): void {
    this.dialogRef.close(false);
  }
}
