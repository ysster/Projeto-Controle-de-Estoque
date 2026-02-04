function fazerLogin() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (!email || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuario = usuarios.find(
        u => u.email === email && u.senha === senha
    );

    if (!usuario) {
        alert("E-mail ou senha incorretos!");
        return;
    }

    localStorage.setItem("nomeUsuario", usuario.nome);
    localStorage.setItem("usuarioLogado", "true");

    window.location.href = "index.html";
}
