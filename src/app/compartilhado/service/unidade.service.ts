import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Unidade, UnidadeSalvarEditar } from '../model/unidade';

const URL = environment.url_api + '/v1/unidades';

@Injectable({
  providedIn: 'root',
})
export class UnidadeService {
  constructor(private http: HttpClient) {}

  listarTodos(params?: HttpParams): Observable<Unidade[]> {
    return this.http.get<Unidade[]>(`${URL}`, { params: params });
  }

  salvarAtualizar(
    andarId: number,
    object: UnidadeSalvarEditar
  ): Observable<Unidade[]> {
    return this.http.post<Unidade[]>(`${URL}/${andarId}`, object);
  }
}
