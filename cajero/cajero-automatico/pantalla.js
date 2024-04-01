let userData = {}
const form = document.querySelector("#form_deposito")

document.addEventListener("DOMContentLoaded", function () {
    const correctUserString = sessionStorage.getItem("correctUser")
    const correctUser = JSON.parse(correctUserString)
    userData = correctUser;
    console.log(correctUser)
});

form.addEventListener("submit", function (e){
    e.preventDefault()
    const dataform = new FormData(form)
    const {deposito} = Object.fromEntries(dataform)
    
    userData.saldo = Number(userData.saldo) + Number(deposito)
    if (userData.saldo >=990) {
        alert(`Su cuenta no puede tener mas de 990 ${[userData.currency]}- OPERACION CANCELADA`)
        userData.saldo = Number(990)
    } else{
        sessionStorage.setItem("correctUser", JSON.stringify(userData))
    }
    alert(`Su deposito fue de ${deposito}, su nuevo saldo es: ${[userData.saldo]} ${[userData.currency]}`)
    window.location.href = "atm.html"
})



console.log(cantidad_deposito)

