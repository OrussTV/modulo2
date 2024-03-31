const dato1 = prompt ("¿Que topping desea? ")


if (dato1.toLowerCase() === "sin topping") {
    alert("Precio: $50");
}

else if (dato1.toLowerCase() === "oreo") {
    alert("Precio: $60");
}

else if (dato1.toLowerCase() === "kitkat") {
    alert("Precio: $65");
}

else if (dato1.toLowerCase() === "brownie") {
    alert("Precio: $70");
}

else if (dato1.toLowerCase() != "kitkat" | "oreo" | "brownie ") {
    alert("no tenemos este topping, lo sentimos. Precio: $50");
}