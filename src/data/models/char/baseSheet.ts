import { Races } from './races';
import { Classes } from './classes';
import { Atributo } from './atributes';

export interface Character{
    id: number,
    titulo: string,
    nome: string,
    nivel: number,
    portrait: string,
    // criei a lista de raças e classes, não sei se é assim que faz pra dizer que tem q ser algum dos q tão la na array
    raca: typeof Races[number],
    classe: typeof Classes[number],
    // TODO - lembrar do cálculo da experiência com base no valor
    experiencia: {
        atual: number,
        max: number
    },
    // opcionais para a interface comportar tanto forca quanto stamina dependendo da classe, evita criar lógica de detecção, aceita ambos
    recursos: {
        hp: {
            atual: number,
            max: number
        }
        forca?: {
            name: string
            atual: number
            max: number
        }
        stamina?: {
            name: string
            atual: number
            max: number
        }
    },
    // nao tenho certeza se funciona do jeito q eu gostaria
    atributos: Atributo[]
    historia: string
}



