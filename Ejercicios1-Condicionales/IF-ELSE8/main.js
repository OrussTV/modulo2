const dato1 = prompt ("Introduce tu calificación")

if (dato1 < 1) {
    alert("Error, valor incorrecto")
}
else if (dato1 >= 11){
    alert("Error, valor incorrecto")
} 
else if (dato1 >= 1 && dato1  < 6) {
    alert("reprobado")
}
else if (dato1 >= 6 && dato1  <= 8) {
    alert("regular")
}

else if (dato1 === 9){
    alert("bien")
}

else if (dato1 === 10){
    alert("excelente")
}
