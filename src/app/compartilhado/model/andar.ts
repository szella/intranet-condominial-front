export interface Andar {
  id: number;
  nome: String;
  descricao?: String;
  posicao: number;
}

export interface AndarSalvarEditar {
  id?: number;
  nome: String;
  descricao?: String;
  posicao: number;
}
