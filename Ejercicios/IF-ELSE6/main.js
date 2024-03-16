const dato1 = prompt ("Participante 1: Escribe un número")
const dato2 = prompt ("Participante 2: Escribe un número")
const dato3 = prompt ("Participante 3: Escribe un número")

if (dato3 < dato1 & dato1 > dato2) {
    alert(`El número del participante 1 es el número mayor`)
}

if (dato3 < dato2 & dato2 > dato1) {
    alert(`El número del participante 2 es el número mayor`)
}

if (dato1 < dato3 & dato3 > dato2) {
    alert(`El número del participante 3 es el número mayor`)
}

if (dato1 === dato3 && dato1 === dato2 && dato3 === dato2) {
    alert(`Todos los participantes introdujeron el mismo número`)
}