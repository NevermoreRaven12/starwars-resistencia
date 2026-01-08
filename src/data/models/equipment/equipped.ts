import { Acessorio } from "../inventory/types/acessorio";
import { Arma } from "../inventory/types/arma";
import { Armadura } from "../inventory/types/armadura";
import { Bota } from "../inventory/types/bota";
import { Calca } from "../inventory/types/calca";
import { Capacete } from "../inventory/types/capacete";

export interface Equips {
    cabeca: Capacete | null
    tronco: Armadura | null
    arma1: Arma | null
    arma2: Arma | null
    pernas: Calca | null
    pes: Bota | null
    acessorio1: Acessorio | null
    acessorio2: Acessorio | null
}

