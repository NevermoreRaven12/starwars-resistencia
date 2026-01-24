export const stats = ["Fisico", "observacao", "Raciocinio", "Carisma", "Espírito"] as const

export interface Atributo {
    tipo: typeof stats[number],
    valor: number,
    bonus: number
}