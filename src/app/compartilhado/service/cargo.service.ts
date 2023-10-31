import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cargo, CargoEditar, CargoSalvar } from '../model/cargo';

const URL = environment.url_api + '/v1/cargos';

@Injectable({
  providedIn: 'root',
})
export class CargoService {
  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(`${URL}`);
  }

  buscarPorId(id: number): Observable<Cargo> {
    return this.http.get<Cargo>(`${URL}/${id}`);
  }

  salvar(object: CargoSalvar): Observable<Cargo> {
    return this.http.post<Cargo>(`${URL}`, object);
  }

  editar(id: number, object: CargoEditar): Observable<Cargo> {
    return this.http.put<Cargo>(`${URL}/${id}`, object);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${URL}/${id}`);
  }
}
