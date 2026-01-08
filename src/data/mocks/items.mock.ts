import { Acessorio } from '../models/inventory/types/acessorio';
import { Arma } from '../models/inventory/types/arma';
import { Armadura } from '../models/inventory/types/armadura';
import { Bota } from '../models/inventory/types/bota';
import { Calca } from '../models/inventory/types/calca';
import { Capacete } from '../models/inventory/types/capacete';
import { Miscelaneo } from '../models/inventory/types/miscelaneo';
import { Utilizavel } from '../models/inventory/types/utilizavel';

export const armaMock: Arma = {
    id: 1,
    nome: 'Sabre de Luz Instável',
    tipo: 'Energia',
    dano: '2d10',
    descricao: 'Um sabre de luz com cristal danificado, emanando energia caótica.',
    efeito: 'Chance de causar dano crítico adicional',
    preco: 1200
}

export const armaduraMock: Armadura = {
    id: 2,
    tipo: 'Pesada',
    nome: 'Couraça Mandaloriana',
    ca: 18,
    descricao: 'Armadura forjada em beskar, resistente a blasters e sabres.',
    efeito: 'Reduz dano de energia em 2',
    preco: 1800
}

export const capaceteMock: Capacete = {
    id: 3,
    nome: 'Elmo de Reconhecimento',
    descricao: 'Capacete com sensores avançados e HUD tático.',
    efeito: 'Aumenta percepção',
    preco: 750
}

export const calcaMock: Calca = {
    id: 4,
    nome: 'Calça de Combate Leve',
    descricao: 'Permite maior mobilidade em combate.',
    efeito: 'Aumenta esquiva',
    preco: 500
}

export const botaMock: Bota = {
    id: 5,
    nome: 'Botas Magnéticas',
    descricao: 'Botas usadas para combate em ambientes de gravidade zero.',
    efeito: 'Imune a empurrões',
    preco: 600
}

export const acessorioMock: Acessorio = {
    id: 6,
    nome: 'Amuleto do Lado Cinzento',
    descricao: 'Um artefato que equilibra luz e trevas.',
    efeito: 'Reduz custo de habilidades',
    preco: 950
}

export const utilizavelMock: Utilizavel = {
    id: 7,
    nome: 'Estimulante Médico',
    tipo: 'Cura',
    descricao: 'Restaura vitalidade quando usado.',
    efeito: 'Recupera 50 HP',
    preco: 120
}

export const miscelaneoMock: Miscelaneo = {
    id: 8,
    nome: 'Cristal Kyber Fragmentado',
    descricao: 'Fragmento raro de um cristal kyber instável.',
    preco: 300
}