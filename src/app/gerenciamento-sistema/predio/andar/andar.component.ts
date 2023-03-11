import { UnidadeComponent } from './unidade/unidade.component';
import { HttpParams } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Andar } from 'src/app/compartilhado/model/andar';
import { AndarService } from 'src/app/compartilhado/service/andar.service';

@Component({
  selector: 'app-andar',
  templateUrl: './andar.component.html',
  styleUrls: ['./andar.component.scss'],
})
export class AndarComponent {
  formulario: FormGroup;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AndarComponent>,
    @Inject(MAT_DIALOG_DATA) public predioId: number,
    private andarService: AndarService,
    private fb: FormBuilder
  ) {
    this.formulario = this.carregarFormulario();

    this.buscarAndares();
  }

  carregarFormulario(): FormGroup {
    return this.fb.group({
      andares: this.fb.array([]),
    });
  }

  get andares(): FormArray {
    return this.formulario.get('andares') as FormArray;
  }

  adicionarAndar(andar?: Andar, posicao?: number): void {
    this.andares.push(
      this.fb.group({
        id: [andar?.id ?? null],
        nome: [andar?.nome ?? '', Validators.required],
        descricao: [andar?.descricao ?? null],
        posicao: [posicao ?? andar?.posicao ?? this.andares.length + 1],
      })
    );
  }

  subirAndar(posicao: number) {
    console.log(posicao);
    if (posicao > 0) {
      this.reposicionarAndares(posicao, posicao - 1);
    }
  }

  descerAndar(posicao: number) {
    if (posicao > 0) {
      this.reposicionarAndares(posicao, posicao + 1);
    }
  }

  deletarAndar(posicao: number) {
    this.formulario.value.andares.splice(posicao, 1);
    this.ordernarAndares(this.formulario.value.andares);
  }

  private reposicionarAndares(posicaoPartida: number, posicaoDestino: number) {
    let novaDisposicao: Andar[] = this.formulario.value.andares;

    let andarDestino = this.formulario.value.andares[posicaoDestino];
    let andarPartida = this.formulario.value.andares[posicaoPartida];

    novaDisposicao[posicaoPartida] = andarDestino;
    novaDisposicao[posicaoDestino] = andarPartida;

    this.ordernarAndares(novaDisposicao);
  }

  private ordernarAndares(andares: Andar[]) {
    this.formulario = this.carregarFormulario();
    andares.forEach((andar, index) => {
      this.adicionarAndar(andar, index + 1);
    });
  }

  buscarAndares(): void {
    let params = new HttpParams().set('predioId', this.predioId);

    this.andarService.listarTodos(params).subscribe((result: Andar[]) => {
      if (result) {
        result.forEach((andar) => {
          this.adicionarAndar(andar);
        });
      }
    });
  }

  salvar() {
    this.andarService
      .salvarAtualizar(this.predioId, this.andares.value)
      .subscribe((result: Andar[]) => {
        this.formulario = this.carregarFormulario();
        if (result) {
          result.forEach((andar) => {
            this.adicionarAndar(andar);
          });
        }
      });
  }

  unidades(posicao: number) {
    let andarId = this.andares.controls[posicao].get('id')?.value;

    if (andarId) {
      this.dialog.open(UnidadeComponent, {
        data: andarId,
      });
    }
  }

  fechar(): void {
    this.dialogRef.close();
  }
}
