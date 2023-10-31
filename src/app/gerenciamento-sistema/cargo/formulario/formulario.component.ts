import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cargo } from 'src/app/compartilhado/model/cargo';
import { DialogData } from 'src/app/compartilhado/model/dialog-data';
import { CargoService } from 'src/app/compartilhado/service/cargo.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  id?: number;
  titulo: string = '';

  formulario: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
  });

  constructor(
    public dialogRef: MatDialogRef<FormularioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private cargoService: CargoService
  ) {
    this.titulo = data.tipo;
    if (null != data.id) {
      this.id = data.id;
      this.buscar();
    }
  }

  buscar() {
    this.cargoService.buscarPorId(this.id!).subscribe((result: Cargo) => {
      this.formulario.get('nome')?.setValue(result.nome);
    });
  }

  salvarOuEditar() {
    if (null == this.id) {
      this.salvar();
    } else if (null != this.id) {
      this.editar();
    }
  }

  salvar() {
    this.cargoService.salvar(this.formulario.value).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  editar() {
    this.cargoService.editar(this.id!, this.formulario.value).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  fechar(): void {
    this.dialogRef.close(false);
  }
}
