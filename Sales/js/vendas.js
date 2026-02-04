const produtoSelect = document.getElementById("produto");
const categoriaSelect = document.getElementById("categoria");
const quantidadeInput = document.getElementById("quantidade");
const valorInput = document.getElementById("valor");
const totalVendaSpan = document.getElementById("total-venda");
const listaItens = document.getElementById("lista-itens-texto");
const form = document.getElementById("form-venda");

let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
let itensVenda = [];
let totalVenda = 0;

function carregarSelects() {
    produtoSelect.innerHTML = `<option disabled selected>Selecione</option>`;
    categoriaSelect.innerHTML = `<option disabled selected>Selecione</option>`;

    const categorias = new Set();

    produtos.forEach(p => {
        produtoSelect.innerHTML += `<option>${p.nome}</option>`;
        categorias.add(p.categoria);
    });

    categorias.forEach(c => {
        categoriaSelect.innerHTML += `<option>${c}</option>`;
    });
}

produtoSelect.addEventListener("change", () => {
    const prod = produtos.find(p => p.nome === produtoSelect.value);
    if (prod) {
        valorInput.value = prod.valor;
        categoriaSelect.value = prod.categoria;
    }
});

form.addEventListener("submit", e => {
    e.preventDefault();

    const venda = {
        produto: produtoSelect.value,
        categoria: categoriaSelect.value,
        quantidade: Number(quantidadeInput.value),
        valor: Number(valorInput.value),
        subtotal: Number(quantidadeInput.value) * Number(valorInput.value),
        data: new Date().toLocaleDateString("pt-BR")
    };

    itensVenda.push(venda);
    totalVenda += venda.subtotal;

    const vendas = JSON.parse(localStorage.getItem("vendas")) || [];
    vendas.push(venda);
    localStorage.setItem("vendas", JSON.stringify(vendas));

    atualizarResumo();
    form.reset();
    quantidadeInput.value = 1;
});

function atualizarResumo() {
    listaItens.innerHTML = "";
    itensVenda.forEach(v => {
        listaItens.innerHTML += `
            <p>${v.produto} - ${v.quantidade} x R$ ${v.valor.toFixed(2)}</p>
            <hr>
        `;
    });
    totalVendaSpan.innerText = `R$ ${totalVenda.toFixed(2)}`;
}

carregarSelects();
const nome = localStorage.getItem("nomeUsuario");

if (nome && document.getElementById("nomeUsuario")) {
  document.getElementById("nomeUsuario").innerText = nome;
}
