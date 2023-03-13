import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/compartilhado/model/dialog-data';
import { LocalEvento } from 'src/app/compartilhado/model/local-evento';
import { Predio } from 'src/app/compartilhado/model/predio';
import { LocalEventoService } from 'src/app/compartilhado/service/local-evento.service';
import { PredioService } from 'src/app/compartilhado/service/predio.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  id?: number;
  titulo: string = '';
  predios: Predio[] = [];

  formulario: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    valor: new FormControl(null),
    predioId: new FormControl(null, Validators.required),
  });

  constructor(
    public dialogRef: MatDialogRef<FormularioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private localEventoService: LocalEventoService,
    private predioService: PredioService
  ) {
    this.titulo = data.tipo;
    this.buscarPredio();
    if (null != data.id) {
      this.id = data.id;
      this.buscar();
    }
  }

  buscarPredio() {
    this.predioService.listarTodos().subscribe((result: Predio[]) => {
      this.predios = result ?? []; 
    });
  }

  buscar() {
    this.localEventoService
      .buscarPorId(this.id!)
      .subscribe((result: LocalEvento) => {
        this.formulario.get('nome')?.setValue(result.nome);
        this.formulario.get('valor')?.setValue(result.valor);
        this.formulario.get('predioId')?.setValue(result.predio.id);
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
    this.localEventoService.salvar(this.formulario.value).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  editar() {
    this.localEventoService
      .editar(this.id!, this.formulario.value)
      .subscribe(() => {
        this.dialogRef.close(true);
      });
  }

  fechar(): void {
    this.dialogRef.close(false);
  }
}
