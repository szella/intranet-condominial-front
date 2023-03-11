import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TipoAcao } from 'src/app/compartilhado/enum/tipo-acao.enum';
import { Predio } from 'src/app/compartilhado/model/predio';
import { PredioService } from '../../compartilhado/service/predio.service';
import { DialogDeleteComponent } from './../../compartilhado/dialog-delete/dialog-delete.component';
import { AndarComponent } from './andar/andar.component';
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-predio',
  templateUrl: './predio.component.html',
  styleUrls: ['./predio.component.scss'],
})
export class PredioComponent implements OnInit {
  predios?: Predio[] = [];

  constructor(private predioService: PredioService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.buscarTodos();
  }

  buscarTodos(): void {
    this.predioService.listarTodos().subscribe((result: Predio[]) => {
      this.predios = result ?? [];
    });
  }

  adicionarPredio(): void {
    const dialogRef = this.dialog.open(FormularioComponent, {
      data: { tipo: TipoAcao.ADICIONAR },
    });

    dialogRef.afterClosed().subscribe((refresh) => {
      if (refresh) this.buscarTodos();
    });
  }

  editarPredio(predioId: number): void {
    const dialogRef = this.dialog.open(FormularioComponent, {
      data: { tipo: TipoAcao.EDITAR, id: predioId },
    });

    dialogRef.afterClosed().subscribe((refresh) => {
      if (refresh) this.buscarTodos();
    });
  }

  deletar(predio: Predio) {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      data: 'Você tem certeza que deseja deletar: ' + predio.nome + ' ?',
    });

    dialogRef.afterClosed().subscribe((deletar) => {
      if (deletar) {
        this.predioService.deletar(predio.id).subscribe(() => {
          this.buscarTodos();
        });
      }
    });
  }

  andares(predioId: number) {
    this.dialog.open(AndarComponent, {
      data: predioId,
    });
  }
}
