export interface Predio {
  id: number;
  nome: string;
  descricao?: string;
}

export interface PredioSalvar {
  nome: string;
  descricao?: string;
}

export interface PredioEditar {
  nome: string;
  descricao?: string;
}
