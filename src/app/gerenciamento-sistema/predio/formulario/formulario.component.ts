import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TipoAcao } from 'src/app/compartilhado/enum/tipo-acao.enum';
import { PredioService } from 'src/app/compartilhado/service/predio.service';
import { Predio } from 'src/app/compartilhado/model/predio';

export interface DialogFormularioPredioData {
  tipo: TipoAcao;
  id: number;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  id?: number;
  titulo: string = '';

  formulario: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required)
  });

  constructor(
    public dialogRef: MatDialogRef<FormularioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogFormularioPredioData,
    private predioService: PredioService
  ) {
    this.titulo = data.tipo;
    if (null != data.id) {
      this.id = data.id;
      this.buscar();
    }
  }

  buscar() {
    this.predioService.buscarPorId(this.id!).subscribe((result: Predio) => {
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
    this.predioService.salvar(this.formulario.value).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  editar() {
    this.predioService.editar(this.id!, this.formulario.value).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  fechar(): void {
    this.dialogRef.close(false);
  }
}
