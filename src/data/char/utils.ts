function calcularXpMax(nivel: number): number {
    if (nivel === 1) {
        return 250
    }
    let xpInicial = 250
    let xpFinal = 250
    for (let i = 0; i< nivel; i++) {
        let proxResultado = xpInicial * 2
        xpFinal = proxResultado
        xpInicial = xpFinal
        console.log(i)
        console.log(xpFinal)
    }
    return xpFinal
}

function getBonus(atributo: number): number {
    let bonus:number = 0
    if (atributo < 10) {
        bonus = bonus - 1
        for (let i = 8; i> atributo; i--) {
            if (i % 2 === 0) {
                bonus--
            }
        }
    } else if (atributo > 10 && atributo <= 20) {
        for (let i = 12; i <= atributo - 1; i++) {
            
            if (i % 2 === 0) {
                bonus++
            }
        }
    } else if (atributo === 10) {return bonus}
    else {
        console.log("Atributos não poder ser maiores que 20")
        return 0
    }

    return bonus
}

console.log(getBonus(10))
console.log(calcularXpMax(4))

