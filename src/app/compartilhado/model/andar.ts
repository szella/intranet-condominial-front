export interface Andar {
  id: number;
  nome: String;
  posicao: number;
}

export interface AndarSalvarEditar {
  id?: number;
  nome: String;
  posicao: number;
}
