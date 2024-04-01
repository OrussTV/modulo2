const banco = [
    {nombre: "Hugo",
    cuenta: 12345,
    password: "123",
    saldo: "100",
    currency: "MXN",
    },
    {
    nombre: "Orlando",
    cuenta: 56789,
    password: "123",
    saldo: "200",
    currency: "USD",
    },
    {
    nombre: "Juan",
    cuenta: 10111213,
    password: "123",
    saldo: "200",
    currency: "MXN",   
    }
];


const cuenta = document.querySelector ("#login_cuenta")

const password = document.querySelector ("#password")

const buttonLogin = document.querySelector("button")
    
buttonLogin.addEventListener("click", function(e){
    e.preventDefault()
    const currentCuenta = cuenta.value
    const currentPassword = password.value
    let correctUser = null
    for (let index = 0; index < banco.length; index++) {
        const usuarioBb = banco[index]
        if (usuarioBb.cuenta === Number(currentCuenta) && usuarioBb.password === currentPassword) {
            correctUser = usuarioBb
            break
        }
    }
    console.log(correctUser, "Si lo encontramos")
    if (!correctUser){
        alert("Usuario o Contrasena incorrecto")
    } else {
        sessionStorage.setItem("correctUser", JSON.stringify(correctUser))
        window.location.href = "atm.html"
    
    }
}
)


