import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Andar, AndarSalvarEditar } from '../model/andar';

const URL = environment.url_api + '/andares';

@Injectable({
  providedIn: 'root',
})
export class AndarService {
  constructor(private http: HttpClient) {}

  listarTodos(params?: HttpParams): Observable<Andar[]> {
    return this.http.get<Andar[]>(`${URL}`, { params: params });
  }

  buscarPorId(id: number): Observable<Andar> {
    return this.http.get<Andar>(`${URL}/${id}`);
  }

  salvarAtualizar(
    predioId: number,
    object: AndarSalvarEditar
  ): Observable<Andar[]> {
    return this.http.post<Andar[]>(`${URL}/${predioId}`, object);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${URL}/${id}`);
  }
}
