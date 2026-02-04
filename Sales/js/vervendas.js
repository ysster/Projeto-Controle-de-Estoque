const tabela = document.getElementById("tabela-vendas");

const vendas = JSON.parse(localStorage.getItem("vendas")) || [];

let totalFaturado = 0;
let totalItens = 0;
let produtos = {};

vendas.forEach(v => {
    tabela.innerHTML += `
        <tr>
            <td>${v.produto}</td>
            <td>${v.categoria}</td>
            <td>${v.quantidade}</td>
            <td>${v.data}</td>
            <td>R$ ${v.valor.toFixed(2)}</td>
            <td>R$ ${v.subtotal.toFixed(2)}</td>
        </tr>
    `;

    totalFaturado += v.subtotal;
    totalItens += v.quantidade;
    produtos[v.produto] = (produtos[v.produto] || 0) + v.quantidade;
});

document.getElementById("total-vendas").innerText = vendas.length;
document.getElementById("total-faturado").innerText = `R$ ${totalFaturado.toFixed(2)}`;
document.getElementById("itens-vendidos").innerText = totalItens;

const maisVendido = Object.entries(produtos).sort((a,b) => b[1] - a[1])[0];
if (maisVendido) {
    document.getElementById("produto-mais-vendido").innerText =
        `${maisVendido[0]} - ${maisVendido[1]} UN`;
}

if (vendas.length) {
    const ultima = vendas[vendas.length - 1];
    document.getElementById("ultima-venda").innerText =
        `${ultima.produto} - ${ultima.data}`;
}
const nome = localStorage.getItem("nomeUsuario");

if (nome && document.getElementById("nomeUsuario")) {
  document.getElementById("nomeUsuario").innerText = nome;
}
