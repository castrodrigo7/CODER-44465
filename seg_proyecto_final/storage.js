const sesion = document.getElementById("sesion");

function obtenerUsuarios(){
    var usuarios = JSON.parse(localStorage.getItem("usuarios"))
    usuarios = [
        {
            usuario: "Rodrigo",
            contraseña: "123456"
        }
    ]
    return usuarios;
}

const guardarUsuario = (e) => {
    e.preventDefault()
    var usuarios = obtenerUsuarios();
    let usuario = document.getElementById("usuario").value;
    let pass = document.getElementById("contraseña").value;
    console.log(pass);
    let userExiste = usuarios.find(user => user.usuario === usuario);
    if(userExiste != true){
        swal("El usuario no existe", "", "error");
    }
    if(userExiste.contraseña === pass){
        swal("Bienvenido", `${userExiste.usuario}`, "success");
        sessionStorage.setItem("usuario", userExiste);
    }else {
        swal("Contraseña incorrecta", "", "error");
    }
}

sesion.addEventListener("submit", (e) => guardarUsuario(e))