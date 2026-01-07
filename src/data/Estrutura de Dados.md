Pra uma ficha de personagem, um objeto json seria o mais apropriado pra guardar pares key/value

Alguns valores podem ser guardados em lista, como classes, raças e níveis, já que não possuem nenhuma conexão direta

Evitar nesting pesado e lógica o máximo possível

Personagem: {
    id: number
    titulo: string
    nome: string
    nivel: number
    portrait: image
    raca: string
    classe: string
    experiencia: {}
    recursos: [{}]
    atributos: [{}]
    historia: text
}

- raças: Humano, Togruta, Wookie, Twi'lek, Zabrak, Rodiano e Yaddle
- classes: Cavaleiro, Consular, Inquisidor, Lorde Sith, Rebelde, Caçador de Recompensa, Diplomata, Monge
- experiencia: atual/max, começa com 250 e aumenta exponencialmente a cada nível (1 -> 2 = 250; 2 -> 3 = 500; 3 -> 4 = 1000; etc.) até o nível 10 (detecta o nível que o personagem está)
- recursos: lista de HP, Força/Stamina (necessita de lógica pra saber qual usar dependendo da classe)
- atributos: lista de objetos atributo: {id, nome, valor, bônus} (adicionar lógica para calcular o bônus conforme valor)

Equipamentos: {
    cabeca: item
    tronco: item
    arma1: item
    arma2: item
    perna: item
    pes: item
}

Inventário: [item]

Item: {
    id: number
    tipo: itemType
    icon: image
    nome: string
    descricao: text
    efeito: text
}


itemType: [Capacete, Armadura, Arma, Calça, Bota, miscelâneo, Utilizavel]

Arvore de talentos: [{skill}]

Skill: {
    id: number
    icon: image
    nivel: number
    nome: string
    descricao: text
    custo: number
}

Diário: [{
    id: number
    title: string
    body: string
}]


