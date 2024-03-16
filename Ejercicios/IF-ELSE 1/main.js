const pregunta = prompt("¿Eres bellisimo/a?");
const sanitize = pregunta.trim().toLocaleLowerCase();
const isAfirmative = "si";

if (sanitize === isAfirmative) {
  alert("Ciertamente!");
}

else {
    alert("No te creo");
  }