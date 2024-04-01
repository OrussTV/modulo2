let dato = prompt("Ingresa un numero")

let numero = Number (dato)

const multiplos = []
for (let index = 0; index < numero.length; index++) {
    if (index % 5 === 0)
    multiplos.push(index)
}
console.log("Existen " + multiplos.length + " numeros que son multiplos de 5 en el numero" + numero)

/* while(dato >=0) {
    

} */