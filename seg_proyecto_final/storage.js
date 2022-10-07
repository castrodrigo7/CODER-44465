const sesion = document.getElementById("sesion");

function obtenerUsuarios(){
    var usuarios = JSON.parse(localStorage.getItem("usuarios"))
    usuarios = [
        {
            usuario: "Rodrigo",
            contraseña: 123456
        }
    ]
    return usuarios;
}

const guardarUsuario = (e) => {
    e.preventDefault()
    var usuarios = obtenerUsuarios();
    let usuario = document.getElementById("usuario").value;
    let pass = Number(document.getElementById("contraseña").value);
    let userExiste = usuarios.find(user => user.usuario === usuario)
    if(userExiste.contraseña !== pass){
        alert("usuario o contraseña incorrecta");
    }else if(userExiste.contraseña === pass){
        alert(`Bienvenido ${userExiste.usuario}`)
        sessionStorage.setItem("usuario", userExiste);
    }

}

sesion.addEventListener("submit", (e) => guardarUsuario(e))