function fazerLogin() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const emailSalvo = localStorage.getItem("emailUsuario");
    const senhaSalva = localStorage.getItem("senhaUsuario");

    if (email === "" || senha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    if (email !== emailSalvo || senha !== senhaSalva) {
        alert("E-mail ou senha incorretos!");
        return;
    }

    localStorage.setItem("usuarioLogado", "true");

    window.location.href = "index.html";
}
