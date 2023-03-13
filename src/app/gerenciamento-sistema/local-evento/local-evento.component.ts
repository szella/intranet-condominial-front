import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from 'src/app/compartilhado/dialog-delete/dialog-delete.component';
import { TipoAcao } from 'src/app/compartilhado/enum/tipo-acao.enum';
import { LocalEvento } from 'src/app/compartilhado/model/local-evento';
import { LocalEventoService } from 'src/app/compartilhado/service/local-evento.service';
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-local-evento',
  templateUrl: './local-evento.component.html',
  styleUrls: ['./local-evento.component.scss'],
})
export class LocalEventoComponent {
  locaisEvento?: LocalEvento[] = [];

  constructor(
    private localEventoService: LocalEventoService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.buscarTodos();
  }

  buscarTodos(): void {
    this.localEventoService.listarTodos().subscribe((result: LocalEvento[]) => {
      this.locaisEvento = result ?? [];
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

  deletar(localEvento: LocalEvento) {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      data: 'Você tem certeza que deseja deletar: ' + localEvento.nome + ' ?',
    });

    dialogRef.afterClosed().subscribe((deletar) => {
      if (deletar) {
        this.localEventoService.deletar(localEvento.id).subscribe(() => {
          this.buscarTodos();
        });
      }
    });
  }
}
