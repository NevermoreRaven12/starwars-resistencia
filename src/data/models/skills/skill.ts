export interface Skill {
    id: number,
    nivel: number,
    nome: string,
    icon: string,
    tipo: 'Ativo' | 'Passivo'
    efeito: string,
    custo?: string
}