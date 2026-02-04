const nome = localStorage.getItem("nomeUsuario");
if (nome && document.getElementById("nomeUsuario")) {
  document.getElementById("nomeUsuario").innerText = nome;
}

const vendas = JSON.parse(localStorage.getItem("vendas")) || [];

let totalFaturado = 0;

vendas.forEach(v => {
  totalFaturado += Number(v.subtotal);
});

const totalSpan = document.getElementById("totalFaturado");
if (totalSpan) {
  totalSpan.innerText =
    "R$ " + totalFaturado.toFixed(2).replace(".", ",");
}

if (vendas.length > 0) {
  const ultima = vendas[vendas.length - 1];

  document.getElementById("ultima-produto").innerText =
    "Produto: " + ultima.produto;

  document.getElementById("ultima-valor").innerText =
    "Valor: R$ " + ultima.subtotal.toFixed(2).replace(".", ",");

  document.getElementById("ultima-data").innerText =
    "Data: " + ultima.data;
}

let categorias = {};

vendas.forEach(v => {
  categorias[v.categoria] =
    (categorias[v.categoria] || 0) + v.subtotal;
});

const categoriasOrdenadas = Object.entries(categorias)
  .sort((a, b) => b[1] - a[1]);

if (categoriasOrdenadas[0]) {
  document.getElementById("cat-1").innerText =
    `${categoriasOrdenadas[0][0]}: R$ ${categoriasOrdenadas[0][1].toFixed(2).replace(".", ",")}`;
}

if (categoriasOrdenadas[1]) {
  document.getElementById("cat-2").innerText =
    `${categoriasOrdenadas[1][0]}: R$ ${categoriasOrdenadas[1][1].toFixed(2).replace(".", ",")}`;
}

if (categoriasOrdenadas[2]) {
  document.getElementById("cat-3").innerText =
    `${categoriasOrdenadas[2][0]}: R$ ${categoriasOrdenadas[2][1].toFixed(2).replace(".", ",")}`;
}

document.getElementById("btnProdutos").onclick = () => {
  window.location.href = "produtos.html";
};

document.getElementById("btnCadastrar").onclick = () => {
  window.location.href = "vendas.html";
};

document.getElementById("btnvervendas").onclick = () => {
  window.location.href = "vervendas.html";
};

document.getElementById("btnrelatorios").onclick = () => {
  window.location.href = "relatorios.html";
};
