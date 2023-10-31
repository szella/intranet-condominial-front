import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from 'src/app/compartilhado/dialog-delete/dialog-delete.component';
import { TipoAcao } from 'src/app/compartilhado/enum/tipo-acao.enum';
import { Cargo } from 'src/app/compartilhado/model/cargo';
import { CargoService } from 'src/app/compartilhado/service/cargo.service';
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.scss']
})
export class CargoComponent implements OnInit{
  cargos?: Cargo[] = [];

  constructor(
    private cargoService: CargoService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.buscarTodos();
  }

  buscarTodos(): void {
    this.cargoService.listarTodos().subscribe((result: Cargo[]) => {
      this.cargos = result ?? [];
    });
  }

  adicionar(): void {
    const dialogRef = this.dialog.open(FormularioComponent, {
      data: { tipo: TipoAcao.ADICIONAR },
    });

    dialogRef.afterClosed().subscribe((refresh) => {
      if (refresh) this.buscarTodos();
    });
  }

  editar(id: number): void {
    const dialogRef = this.dialog.open(FormularioComponent, {
      data: { tipo: TipoAcao.EDITAR, id: id },
    });

    dialogRef.afterClosed().subscribe((refresh) => {
      if (refresh) this.buscarTodos();
    });
  }

  deletar(cargo: Cargo) {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      data: 'Você tem certeza que deseja deletar: ' + cargo.nome + ' ?',
    });

    dialogRef.afterClosed().subscribe((deletar) => {
      if (deletar) {
        this.cargoService.deletar(cargo.id).subscribe(() => {
          this.buscarTodos();
        });
      }
    });
  }
}
