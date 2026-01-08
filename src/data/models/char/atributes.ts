export const stats = ["Fisico", "Observacao", "Raciocinio", "Carisma", "Espírito"] as const

export interface Atributo {
    tipo: typeof stats[number],
    valor: number,
    bonus: number
}