const vehiculo = Number (prompt (`¿Que tipo de vehiculo utilizo?: \n 1. Auto \n 2. Moto \n 3. Autobus`))
const distancia = Number (prompt ('¿Cuantos kilometros recorrio?'))

const tipo = {
    auto: 0.2,
    moto: 0.1,
    autobus: 0.5,
}
const gasolina = {
    entreCeroYCien: 5,
    masDeCien: 10,
}

if (vehiculo === 1 &&  (distancia >= 0 && distancia <= 100)){
    let total =  (tipo.auto * distancia) + gasolina.entreCeroYCien
    alert (`Total a pagar: $ ${total}`)
} else if (vehiculo === 1 && distancia > 100){
    let total =  (tipo.auto * distancia) + gasolina.masDeCien
    alert (`Total a pagar: $ ${total}`)
}

if (vehiculo === 2 &&  (distancia >= 0 && distancia <= 100)){
    let total =  (tipo.moto * distancia) + gasolina.entreCeroYCien
    alert (`Total a pagar: $ ${total}`)
} else if (vehiculo === 2 &&  distancia > 100){
    let total =  (tipo.moto * distancia) + gasolina.masDeCien
    alert (`Total a pagar: $ ${total}`)
}

if (vehiculo === 3 &&  (distancia >= 0 && distancia <= 100)){
    let total =  (tipo.autobus * distancia) + gasolina.entreCeroYCien
    alert (`Total a pagar: $ ${total}`)
} else if (vehiculo === 3 &&  distancia > 100){
    let total =  (tipo.autobus * distancia) + gasolina.masDeCien
    alert (`Total a pagar: $ ${total}`)
}
