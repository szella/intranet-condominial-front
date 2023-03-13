import { Predio } from './predio';

export interface LocalEvento {
  id: number;
  nome: String;
  valor?: number;
  predio: Predio;
}

export interface LocalEventoSalvarEditar {
  id?: number;
  nome: String;
  valor?: number;
  predioId: number;
}
