import { Skill } from "../models/skills/skill";

export const JediKnightSkills: Skill[] = [
  // =========================
  // NÍVEL 1
  // =========================
  {
    id: 1,
    nivel: 1,
    nome: 'Aprendiz da Força',
    icon: 'icon-placeholder',
    tipo: 'Passivo',
    efeito: 'Você está apenas começando nos caminhos dos Jedi, por isso você recebe um bônus de 30 pontos na sua reserva de Força.'
  },
  {
    id: 2,
    nivel: 1,
    nome: 'Empurrão de Força Básico',
    icon: 'icon-placeholder',
    tipo: 'Ativo',
    efeito:
      'Empurra objetos pequenos e médios a até 10m. Se atingir um ser, causa 1d4 de dano concussivo.',
    custo: '20 Força'
  },

  // =========================
  // NÍVEL 2
  // =========================
  {
    id: 3,
    nivel: 2,
    nome: 'Treinamento em Sabres de Luz',
    icon: 'icon-placeholder',
    tipo: 'Passivo',
    efeito:
      'Enquanto empunhar um Sabre de Luz, recebe +1 nas jogadas de ataque'
  },

  // =========================
  // NÍVEL 3
  // =========================
  {
    id: 4,
    nivel: 3,
    nome: 'Proficiência em Sabre de Luz',
    icon: 'icon-placeholder',
    tipo: 'Passivo',
    efeito:
      'Recebe +2 nas jogadas de ataque com Sabres de Luz.'
  },
  {
    id: 5,
    nivel: 3,
    nome: 'Escolha de Caminho',
    icon: 'icon-placeholder',
    tipo: 'Passivo',
    efeito:
      'Você completou o seu treinamento e está prestes a se tornar um Jedi, escolha qual caminho irá seguir: Cavaleiro Jedi ou Acadêmico Jedi.'
  },

  // =========================
  // NÍVEL 4
  // =========================
  {
    id: 6,
    nivel: 4,
    nome: 'Conexão Maior',
    icon: 'icon-placeholder',
    tipo: 'Passivo',
    efeito:
      'Aumenta a reserva de Força em 20 e o dano de habilidades de Força em 1d4.'
  },
  {
    id: 7,
    nivel: 4,
    nome: 'Puxão de Força',
    icon: 'icon-placeholder',
    tipo: 'Ativo',
    efeito:
      'Puxa e levita objetos pequenos e médios a até 10m.',
    custo: '30 Força'
  },

  // =========================
  // NÍVEL 5
  // =========================
  {
    id: 8,
    nivel: 5,
    nome: 'Maestria da Força',
    icon: 'icon-placeholder',
    tipo: 'Passivo',
    efeito:
      'Aumenta a reserva de Força em 50 e o dano de habilidades de Força em 1d4.'
  },
  {
    id: 9,
    nivel: 5,
    nome: 'Puxão e Empurrão Melhorados',
    icon: 'icon-placeholder',
    tipo: 'Passivo',
    efeito:
      'Permite afetar objetos médios e grandes e criaturas médias a até 20m.'
  },

  // =========================
  // NÍVEL 6
  // =========================
  {
    id: 10,
    nivel: 6,
    nome: 'Influência da Força',
    icon: 'icon-placeholder',
    tipo: 'Ativo',
    efeito:
      'Uma vez por descanso longo, força seres com pouca conexão com a Força a obedecer uma ordem plausível.'
  },

  // =========================
  // NÍVEL 7
  // =========================
  {
    id: 11,
    nivel: 7,
    nome: 'Mestre Jedi',
    icon: 'icon-placeholder',
    tipo: 'Passivo',
    efeito:
      'Aumenta a reserva de Força em 100 e o dano de habilidades de Força em 1d4.'
  },
  {
    id: 12,
    nivel: 7,
    nome: 'Puxão e Empurrão Máximos',
    icon: 'icon-placeholder',
    tipo: 'Passivo',
    efeito:
      'Permite afetar objetos colossais e criaturas grandes a até 30m.'
  },

  // =========================
  // CAVALEIRO JEDI
  // =========================

  // NÍVEL 3
  {
    id: 13,
    nivel: 3,
    nome: 'Forma de Combate',
    icon: 'icon-placeholder',
    tipo: 'Passivo',
    efeito:
      `Você pode escolher uma entre 5 formas de combate, além da inicial Shii-Cho:
            Makashi - Uma forma de combate elegante, focada em duelos 1 a 1 com o sabre de luz em uma das mãos. Aumenta sua Observação em 2, e permite usar habilidades de força básica (puxar e empurrar) como ação bônus.

            Soresu - Uma forma defensiva, aumenta sua Observação e Físico em 1 ponto, aumenta sua classe de armadura em 1, e ganha a habilidade de poder defletir até 5 + sua Observação de tiros de blaster por turno.

            Ataru - Uma forma acrobática e agressiva, demanda muita agilidade e força do usuário. Aumenta seu Físico em 2, aumenta seu alcance de movimento em 10m, sua iniciativa em 1 e permite que realize ações acrobáticas (pular, rolar, cambalhota) com vantagem e usa metade do movimento necessário.

            Shien/Djem-So - Duas stances que se complementam, sendo a Shien uma forma completamente defensiva, e Djem-So uma forma completamente ofensiva. Você pode trocar entre essas stances como uma ação bônus, ou livremente fora de combate, em Shien você aumenta sua classe de armadura em 3 e faz com que, caso tenha sucesso em refletir blasters, o tiro irá voltar diretamente pro atirador. Em Djem-So você diminui sua classe de armadura em 3, recebe vantagem em todas as rolagens de ataque e aumenta todo o dano causado em 1d8.

            Neiman - Uma forma balanceada, onde não possui nenhuma fraqueza em si, mas também não é a melhor em nada específico. Aumenta todos seus atributos em 1 e faz com que, ao receber um tipo de dano, os próximos danos daquele tipo sejam reduzidos em 1d6.`
  },

  // NÍVEL 4
  {
    id: 14,
    nivel: 4,
    nome: 'Defesa da Força',
    icon: 'icon-placeholder',
    tipo: 'Ativo',
    efeito:
      'Enquanto estiver empunhando um Sabre de Luz, você pode, como reação, reduzir todo o dano recebido por você ou um aliado que esteja em até 3m de distância em 1d6 + Espírito. Caso esteja usando uma Forma defensiva (Soresu, Shien ou Neiman), a redução aumenta para 1d8 + Espírito.',
    custo: '30 Força'
  },

  // NÍVEL 5
  {
    id: 16,
    nivel: 5,
    nome: 'Forma de Sabre de Luz',
    icon: 'icon-placeholder',
    tipo: 'Passivo',
    efeito:
      `Você pode escolher entre os 5 formatos de sabre de luz ortodoxos:
        Simples - Usa o Sabre de Luz em duas mãos, aprimorando o dano causado em 1d4 e aumenta sua classe de armadura em 2.

        Sabre Duplo - Aumenta sua classe de armadura em 3 e permite refletir o dobro da sua atual quantidade de tiros de blaster possíveis.

        Dual Wield - Permite que realize um segundo ataque com penalidade de -2 nas jogadas de ataque e de dano.

        Guarda em Cruz - Aumenta o dano causado em 1d8 mas diminui sua classe de armadura em 1 e velocidade de movimento em 5m.

        Invertido - Aumenta sua velocidade em 5m, aumenta sua classe de armadura em 1 e permite ignorar 2 de classe de armadura de quem estiver atacando.
        `
  },

  // NÍVEL 6
  {
    id: 17,
    nivel: 6,
    nome: 'Forma Fluida',
    icon: 'icon-placeholder',
    tipo: 'Passivo',
    efeito:
      'Permite que você escolha mais uma forma de combate, podendo alterar entre elas fora de combate livremente, ou como uma ação bônus em combate'
  },

  // NÍVEL 7
  {
    id: 18,
    nivel: 7,
    nome: 'Parry da Força',
    icon: 'icon-placeholder',
    tipo: 'Ativo',
    efeito:
      'Ativar essa habilidade faz com que você automaticamente use a Força para bloquear o próximo ataque, dando a oportunidade de um contra ataque imediato, além de ataque de oportunidade para qualquer outra criatura próxima.',
    custo: '70 Força'
  },
  {
    id: 19,
    nivel: 7,
    nome: 'Um Novo Sabre de Luz',
    icon: 'icon-placeholder',
    tipo: 'Passivo',
    efeito:
      'Você recebe um chamado da Força, dizendo onde você precisa ir para construir seu novo Sabre de Luz. Quando encontrar o cristal, escolha mais uma forma de Sabre, construindo um sabre de luz adaptado a comportar ambas as formas. Pode mudar de formas livremente, sem gastar nenhuma ação, e aumenta todo o dano de Sabre de Luz em 1d6.'
  },

  // NÍVEL 8
  {
    id: 20,
    nivel: 8,
    nome: 'Atirar Sabre de Luz',
    icon: 'icon-placeholder',
    tipo: 'Ativo',
    efeito:
      `Pode usar a Força para arremessar seu Sabre de Luz, o dano causado muda conforme a forma dele:
            Simples - Faz uma rolagem de dano e adiciona 2d6 de dano. 40 de Força.
            Sabre Duplo - Causa 3d10 de dano em uma área de 5m ao seu redor. 50 de Força.
            Dual Wield - O primeiro Sabre causa 2d8 + Espírito + Observação enquanto o segundo tem um dano reduzido em 25%. 40 de Força.
            Guarda em Cruz - Faça uma rolagem de dano e adicione 2d8 de dano. Pode executar alvos instantaneamente em uma rolagem crítica. 70 de Força.
            Sabre Invertido - Reduz o custo para 20 de Força e pode usar essa habilidade como uma ação bônus, causando o dano de um ataque normal. 
`,
    custo: 'Variável'
  },

  // NÍVEL 9
  {
    id: 21,
    nivel: 9,
    nome: 'Alta Concentração',
    icon: 'icon-placeholder',
    tipo: 'Ativo',
    efeito:
      `Usa da Força para entrar em um estado de concentração máxima por 3 turnos. Aumenta todos seus atributos em 2, classe de armadura em 2, além de receber vantagem em todas as rolagens feitas por você e contra você`,
    custo: '150 Força'
  },

  // NÍVEL 10
  {
    id: 22,
    nivel: 10,
    nome: 'Forma Perfeita',
    icon: 'icon-placeholder',
    tipo: 'Ativo',
    efeito:
      `Você atinge o equilíbrio perfeito entre Corpo, Mente e Força. Escolha uma das suas Formas escolhidas anteriormente, durante 3 turnos, enquanto estiver nessa Forma, todos seus bônus são aumentados em 50%, se a forma tiver alguma penalidade ela é removida, seus ataques não podem errar contra não-usuários de Força. Além disso permite o uso da habilidade Velocidade da Força.`,
    custo: '200 Força'
  },
  {
    id: 23,
    nivel: 10,
    nome: 'Velocidade da Força',
    icon: 'icon-placeholder',
    tipo: 'Ativo',
    efeito:
      'Concede 4x a velocidade de movimento como ação bônus.'
  }
];
