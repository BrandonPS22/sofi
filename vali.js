function validarPassword() {
    const password = document.getElementById("password").value;
    if (password === "rosaazul") {
        window.location.href = "feli.html";
    } else {
        alert("Contraseña incorrecta 👻. Intenta de nuevo."); 
        document.getElementById("password").value= "";     
    }
}