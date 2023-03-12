import { Unidade } from './../../../../compartilhado/model/unidade';
import { UnidadeService } from 'src/app/compartilhado/service/unidade.service';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-unidade',
  templateUrl: './unidade.component.html',
  styleUrls: ['./unidade.component.scss'],
})
export class UnidadeComponent {
  formulario: FormGroup;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<UnidadeComponent>,
    @Inject(MAT_DIALOG_DATA) public andarId: number,
    private unidadeService: UnidadeService,
    private fb: FormBuilder
  ) {
    this.formulario = this.carregarFormulario();

    this.buscarUnidades();
  }

  carregarFormulario(): FormGroup {
    return this.fb.group({
      unidades: this.fb.array([]),
    });
  }

  get unidades(): FormArray {
    return this.formulario.get('unidades') as FormArray;
  }

  adicionarUnidade(unidade?: Unidade, posicao?: number): void {
    this.unidades.push(
      this.fb.group({
        id: [unidade?.id ?? null],
        nome: [unidade?.nome ?? '', Validators.required],
        posicao: [posicao ?? unidade?.posicao ?? this.unidades.length + 1],
      })
    );
  }

  subirUnidade(posicao: number) {
    if (posicao > 0) {
      this.reposicionarUnidades(posicao, posicao - 1);
    }
  }

  descerUnidade(posicao: number) {
    if (posicao < this.unidades.length - 1) {
      this.reposicionarUnidades(posicao, posicao + 1);
    }
  }

  deletarUnidade(posicao: number) {
    this.formulario.value.unidades.splice(posicao, 1);
    this.ordernarUnidades(this.formulario.value.unidades);
  }

  private reposicionarUnidades(posicaoPartida: number, posicaoDestino: number) {
    let novaDisposicao: Unidade[] = this.formulario.value.unidades;

    let unidadeDestino = this.formulario.value.unidades[posicaoDestino];
    let unidadePartida = this.formulario.value.unidades[posicaoPartida];

    novaDisposicao[posicaoPartida] = unidadeDestino;
    novaDisposicao[posicaoDestino] = unidadePartida;

    this.ordernarUnidades(novaDisposicao);
  }

  private ordernarUnidades(unidades: Unidade[]) {
    this.formulario = this.carregarFormulario();
    unidades.forEach((unidade, index) => {
      this.adicionarUnidade(unidade, index + 1);
    });
  }

  buscarUnidades(): void {
    let params = new HttpParams().set('andarId', this.andarId);

    this.unidadeService.listarTodos(params).subscribe((result: Unidade[]) => {
      if (result) {
        result.forEach((unidade) => {
          this.adicionarUnidade(unidade);
        });
      }
    });
  }

  salvar() {
    this.unidadeService
      .salvarAtualizar(this.andarId, this.unidades.value)
      .subscribe((result: Unidade[]) => {
        this.formulario = this.carregarFormulario();
        if (result) {
          result.forEach((unidade) => {
            this.adicionarUnidade(unidade);
          });
        }
      });
  }

  fechar(): void {
    this.dialogRef.close();
  }
}
