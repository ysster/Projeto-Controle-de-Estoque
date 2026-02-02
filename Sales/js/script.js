const logado = localStorage.getItem("usuarioLogado");
const nome = localStorage.getItem("nomeUsuario");

if (!nome || !logado) {
    window.location.href = "cadastrar.html";
} else {
    document.getElementById("nomeUsuario").innerText = nome;
}
