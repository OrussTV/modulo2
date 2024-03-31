let datos = [10,40,30,20,15,5]

naturalOrder = (a, b) => a - b;
const menorAMayor = datos.toSorted(naturalOrder);

naturalOrder = (a, b) => a - b;
let orden = datos.toSorted(naturalOrder);

const mayorAMenor = orden.toReversed()

const mayor = menorAMayor.pop()

const menor = mayorAMenor.pop()

let resultado = [menor, mayor]
console.log(resultado)

    




