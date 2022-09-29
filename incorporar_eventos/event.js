const formulario = document.getElementById("formulario");
let emails = []

const guardarEmail = (e) => {
    e.preventDefault()
    let email = document.getElementById("email").value;
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let mensaje = document.getElementById("mensaje").value;
    emails.push({
        Email: email,
        Nombre: nombre,
        Teléfono: telefono,
        Mensaje: mensaje
    })
    console.log(emails);
    alert("Mensaje enviado correctamente")
}


formulario.addEventListener("submit", (e) => guardarEmail(e))