import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalEvento, LocalEventoSalvarEditar } from '../model/local-evento';

const URL = environment.url_api + '/locais-evento';

@Injectable({
  providedIn: 'root',
})
export class LocalEventoService {
  constructor(private http: HttpClient) {}

  listarTodos(): Observable<LocalEvento[]> {
    return this.http.get<LocalEvento[]>(`${URL}`);
  }

  buscarPorId(id: number): Observable<LocalEvento> {
    return this.http.get<LocalEvento>(`${URL}/${id}`);
  }

  salvar(object: LocalEventoSalvarEditar): Observable<LocalEvento> {
    return this.http.post<LocalEvento>(`${URL}`, object);
  }

  editar(id: number, object: LocalEventoSalvarEditar): Observable<LocalEvento> {
    return this.http.put<LocalEvento>(`${URL}/${id}`, object);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${URL}/${id}`);
  }
}
