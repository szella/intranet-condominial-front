import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Predio, PredioEditar, PredioSalvar } from '../model/predio';

const URL = environment.url_api + '/v1/predios';

@Injectable({
  providedIn: 'root',
})
export class PredioService {
  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Predio[]> {
    return this.http.get<Predio[]>(`${URL}`);
  }

  buscarPorId(id: number): Observable<Predio> {
    return this.http.get<Predio>(`${URL}/${id}`);
  }

  salvar(object: PredioSalvar): Observable<Predio> {
    return this.http.post<Predio>(`${URL}`, object);
  }

  editar(id: number, object: PredioEditar): Observable<Predio> {
    return this.http.put<Predio>(`${URL}/${id}`, object);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${URL}/${id}`);
  }
}
