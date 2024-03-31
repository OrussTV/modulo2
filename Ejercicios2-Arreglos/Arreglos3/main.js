let datos = [10,40,30,20,15,5]

naturalOrder = (a, b) => a - b;
const menorAMayor = datos.toSorted(naturalOrder);
console.log(menorAMayor)

naturalOrder = (a, b) => a - b;
let orden = datos.toSorted(naturalOrder);

const mayorAMenor = orden.toReversed()
console.log(mayorAMenor)


const mayor = menorAMayor.pop()
console.log(mayor)

const menor = mayorAMenor.pop()
console.log(menor)

let resultado = [menor, mayor]

console.log(resultado)

    




