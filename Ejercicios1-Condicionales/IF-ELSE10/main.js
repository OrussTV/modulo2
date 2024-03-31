const dato1 = prompt (`Escribe al nivel que quieres inscribirte:  \n 1. Course \n 2. Carrera  \n 3. Master` )
const dato2 = prompt (`¿Tienes alguna beca, de las siguientes becas?: \n 1. Facebook \n 2. Google \n 3. Jesua \n 4. No tengo beca`)

const nivel = {
    course: 4999,
    carrera: 3999,
    master: 2999,
}

const beca = {
    facebook: 0.2,
    google: 0.15,
    jesua: 0.5,
}

if (dato1 === "course" && dato2 === "facebook"){
    let resultado1 = (nivel.course - (nivel.course * beca.facebook)) * 2
    alert (`Precio: $ ${resultado1}`)
}else if (dato1 === "course" && dato2 === "google"){
    let resultado1 = (nivel.course - (nivel.course * beca.google)) * 2
    alert (`Precio: $ ${resultado1}`)
}else if (dato1 === "course" && dato2 === "jesua"){
    let resultado1 = (nivel.course - (nivel.course * beca.jesua)) * 2
    alert (`Precio: $ ${resultado1}`)
}else if (dato1 === "course" && dato2 === "sin beca"){
    let resultado1 = nivel.course * 2
    alert (`Precio: $ ${resultado1}`)
}

if (dato1 === "carrera" && dato2 === "facebook"){
    let resultado1 = (nivel.carrera - (nivel.carrera * beca.facebook)) * 6
    alert (`Precio: $ ${resultado1}`)
}else if (dato1 === "carrera" && dato2 === "google"){
    let resultado1 = (nivel.carrera - (nivel.carrera * beca.google)) * 6
    alert (`Precio: $ ${resultado1}`)
}else if (dato1 === "carrera" && dato2 === "jesua"){
    let resultado1 = (nivel.carrera - (nivel.carrera * beca.jesua)) * 6
    alert (`Precio: $ ${resultado1}`)
}else if (dato1 === "carrera" && dato2 === "sin beca"){
    let resultado1 = (nivel.carrera * 6)
    alert (`Precio: $ ${resultado1}`)
}

if (dato1 === "master" && dato2 === "facebook"){
    let resultado1 = (nivel.master - (nivel.master * beca.facebook)) * 12
    alert (`Precio: $ ${resultado1}`)
}else if (dato1 === "master" && dato2 === "google"){
    let resultado1 = (nivel.master - (nivel.master * beca.google)) * 12
    alert (`Precio: $ ${resultado1}`)
}else if (dato1 === "master" && dato2 === "jesua"){
    let resultado1 = (nivel.master - (nivel.master * beca.jesua)) * 12
    alert (`Precio: $ ${resultado1}`)
}else if (dato1 === "master" && dato2 === "sin beca"){
    let resultado1 = (nivel.master * 12)
    alert (`Precio: $ ${resultado1}`)
}

/* function calcularCostoPrograma (dato1 , dato2) {
    let costoMensual = 0;

    if (dato1 === "course"){
        costoMensual = 4999;
    } else if ( dato1 === "carrera"){
        costoMensual = 3999;
    } else if ( dato1 === "master"){
        costoMensual = 2999;
    }
    
    if (dato2 === "facebook"){
        costoMensual -= costoMensual * 0.2;
    } else  if (dato2 === "google"){
        costoMensual -= costoMensual * 0.15;
    } else  if (dato2 === "jesua"){
        costoMensual -= costoMensual * 0.5;
    } else  if (dato2 === "sin beca"){
        costoMensual;
    }
    
    return costoMensual;
}

function calcularCostoTotal (dato1, costoMensual){
    let costoFinal = 0;

    if (dato1 === "course"){
        costoFinal = costoMensual * 2;
    } else if ( dato1 === "carrera"){
        costoFinal = costoMensual * 6;
    } else if ( dato1 === "master"){
        costoFinal = costoMensual * 12;
    }

    return costoFinal;
}


const costoMensualConDescuento = calcularCostoPrograma(dato1, dato2)
const costoTotal = calcularCostoTotal(dato1, costoMensualConDescuento)

alert (`El costo mensual del programa es:`+ costoMensualConDescuento);
alert (`El costo total del programa es:`+ costoTotal) */