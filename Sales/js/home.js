var nome = localStorage.getItem("nomeUsuario");

if (nome && document.getElementById("nomeUsuario")) {
  document.getElementById("nomeUsuario").innerText = nome;
}

document.getElementById("btnProdutos").onclick = () => {
  window.location.href = "produtos.html";
};

document.getElementById("btnCadastrar").onclick = () => {
  window.location.href = "vendas.html";
};
