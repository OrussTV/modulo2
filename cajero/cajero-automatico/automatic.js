const botondeposito = document.querySelector("#depositos")
const modal = document.querySelector("#modal")
const botondesaldos = document.querySelector("#saldo")
const cantidadSaldo = document.querySelector("#cantidad_saldo")
const cerrarModalSaldos = document.querySelector("#modal button")
const fondoDeModal = document.querySelector("#backdrop")
const botonSalir = document.querySelector("#salir")
const botonDeRetiros = document.querySelector("#retiros")
const modalRetiros = document.querySelector("#modal_retiros")
const cerrarModalRetiros = document.querySelector ("#modal_retiros button")
const formRetiros = document.querySelector("#form_retiro")


let userData = {}

document.addEventListener("DOMContentLoaded", function () {
    const correctUserString = sessionStorage.getItem("correctUser")
    const correctUser = JSON.parse(correctUserString)

    if (!correctUser) window.location.href = "index.html"

    userData = correctUser

    const saludoTag = document.querySelector("#saludo_usuario")
    saludoTag.outerHTML = `<h1>Bienvenido ${correctUser.nombre}<h1>`

})

botondeposito.addEventListener("click", function () {
    window.location.href = "pantalla.html";
    /* Esto es para crear un modal dentro del archivo JS */
    /* const div = document.createElement("div")
    div.innerHTML = `<div>
                        <form id = "form_deposito">
                        <input  placeholder = "Cantidad a depositar">
                        <button>Depositar</button>
                        </form>
                    </div>`;
    modal.appendChild(div) */
});

function conmutarClase(elementoHtml, clase){
    elementoHtml.classList.toggle(clase)
}
botondesaldos.addEventListener("click", function(){
   conmutarClase(modal, "close_modal")
   fondoDeModal.style = "display: block"
   cantidadSaldo.outerHTML = `<h2>Su saldo es ${userData.saldo}<h2>`
   modal.appendChild(cantidadSaldo)
   
})

cerrarModalSaldos.addEventListener(`click`, function(){
    conmutarClase(modal, `button`)
    conmutarClase(modal, `close_modal`)
    fondoDeModal.style = "display: none"
})

fondoDeModal.addEventListener(`click`, function(){
    fondoDeModal.style = "display: none"
    conmutarClase(modal, `close_modal`)
})

botonSalir.addEventListener(`click`,function (e){
    e.preventDefault()
    sessionStorage.removeItem("correctUser")
    window.location.href = "index.html"
})

botonDeRetiros.addEventListener("click", function(){
    conmutarClase(modalRetiros, "close_modal_retiros")
    fondoDeModal.style = "display: block"
  
   
})

formRetiros.addEventListener("submit", function (e){
    e.preventDefault()
    const dataFormRetiros = new FormData(formRetiros)
    const {retiro} = Object.fromEntries(dataFormRetiros)
    
    userData.saldo = Number(userData.saldo) - Number(retiro)
    if (userData.saldo <=10) {
        alert(`Su cuenta no puede tener menos de 10 ${[userData.currency]}- OPERACION CANCELADA`)
        userData.saldo = Number(10)
    } else{
    sessionStorage.setItem("correctUser", JSON.stringify(userData))
    }
    alert(`Su retiro fue de ${retiro}, su nuevo saldo es: ${[userData.saldo]} ${[userData.currency]}`)

})


cerrarModalRetiros.addEventListener(`click`, function(){
    conmutarClase(modalRetiros, `button`)
    conmutarClase(modalRetiros, `close_modal_retiros`)
    fondoDeModal.style = "display: none"
})

/* prueba para ver si se suber el js */