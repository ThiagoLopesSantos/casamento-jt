export interface Convidado {
  id: number
  nome: string
  familia: string // Útil para você filtrar por grupos no Excel depois
}

export const LISTA_CONVIDADOS: Convidado[] = [
  { id: 1, nome: 'Aline Santiago', familia: 'Noiva' },
  { id: 2, nome: 'Pedro Lopes', familia: 'Noivo' },
  { id: 3, nome: 'Samantha Tavares', familia: 'Amigos Noiva' },
  { id: 4, nome: 'Rosane Siqueira', familia: 'Família Thiago' }
  // DICA: Você pode copiar as colunas do Excel e usar ferramentas online
  // como "Excel to JSON" para gerar essas linhas em segundos!
]
