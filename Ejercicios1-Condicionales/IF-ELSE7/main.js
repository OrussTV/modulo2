const dato1 = prompt ("Ingresa un día de la semana")
const sanitize = dato1.trim().toLocaleLowerCase();

if (sanitize === "lunes") {
    alert("Empecemos con toda la actitud porque es Lunes");
  }

  if (sanitize === "viernes") {
    alert("Vamonos a festejar porque Es Viernes");
  }

  if (sanitize === "sabado"| sanitize === "domingo") {
    alert("Es fin de semana de fiesta y recuperación");
  }

  if (sanitize === "martes" | sanitize === "miercoles" | sanitize === "jueves") {
    alert("Es un día cualquiera de la semana");
  }
