import { Acessorio } from './types/acessorio';
import { Arma } from './types/arma';
import { Armadura } from "./types/armadura"
import { Bota } from "./types/bota"
import { Calca } from "./types/calca"
import { Capacete } from "./types/capacete"
import { Miscelaneo } from "./types/miscelaneo"
import { Utilizavel } from "./types/utilizavel"



export type Item = 
| Arma
| Armadura
| Bota
| Calca
| Capacete
| Miscelaneo
| Utilizavel
| Acessorio