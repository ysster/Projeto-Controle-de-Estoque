var nome = localStorage.getItem("nomeUsuario");

if (nome && document.getElementById("nomeUsuario")) {
  document.getElementById("nomeUsuario").innerText = nome;
}
