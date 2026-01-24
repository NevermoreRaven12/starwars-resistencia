import { Character } from "../models/char/baseSheet";
import { getBonus } from "../models/char/utils";
import { calcularXpMax } from "../models/char/utils";

const nivel = 4

export const CharMock: Character = {
    id: 1,
    titulo: "",
    nome: "Ronn Sho'Gun",
    nivel: nivel,
    portrait: 'ronn.png',

    raca: "Twi'lek",
    classe: "Cavaleiro Jedi",

    experiencia: {
        atual: 2000,
        max: calcularXpMax(nivel)
    },

    atributos: [
        {tipo: 'Fisico', valor: 14, bonus: getBonus(14)},
        {tipo: "observacao", valor: 12, bonus: getBonus(12)},
        {tipo: "Raciocinio", valor: 10, bonus: getBonus(10)},
        {tipo: "Carisma", valor: 8, bonus: getBonus(8)},
        {tipo: "Espírito", valor: 18, bonus: getBonus(18)}
    ],

    recursos: {
        hp: {
            atual: 29,
            max: 29
        },
        forca: {
            name: "Força",
            atual: 147,
            max: 147
        }
    },

    historia: "Era um guarda pessoal do Deputado Jonas Carlorin, com a queda da República ele teve um encontro direto com a Força no meio do caos e conseguiu fugir graças à Força. Desde então está em busca da mesma conexão que teve naquele momento, mas nunca conseguiu. Mesmo assim, jamais perdeu a fé na Força."
}