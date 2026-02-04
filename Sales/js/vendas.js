// ELEMENTOS
const selectProduto = document.getElementById("produto");
const selectCategoria = document.getElementById("categoria");
const inputQuantidade = document.getElementById("quantidade");
const inputValor = document.getElementById("valor");

const listaItens = document.getElementById("lista-itens-texto");
const totalVendaSpan = document.getElementById("total-venda");
const form = document.getElementById("form-venda");

// DADOS
let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
let itensVenda = [];
let totalVenda = 0;

// =================== CARREGAR SELECTS ===================
function carregarProdutosECategorias() {
  selectProduto.innerHTML =
    `<option value="" disabled selected>-- Selecione o produto --</option>`;
  selectCategoria.innerHTML =
    `<option value="" disabled selected>-- Selecionar a categoria --</option>`;

  const categorias = new Set();

  produtos.forEach(p => {
    // produtos
    const optProduto = document.createElement("option");
    optProduto.value = p.nome;
    optProduto.textContent = p.nome;
    selectProduto.appendChild(optProduto);

    // categorias
    categorias.add(p.categoria);
  });

  categorias.forEach(cat => {
    const optCat = document.createElement("option");
    optCat.value = cat;
    optCat.textContent = cat;
    selectCategoria.appendChild(optCat);
  });
}

// =================== AUTO PREENCHER VALOR ===================
selectProduto.addEventListener("change", () => {
  const produtoSelecionado = produtos.find(
    p => p.nome === selectProduto.value
  );

  if (produtoSelecionado) {
    inputValor.value = produtoSelecionado.valor.toFixed(2);
    selectCategoria.value = produtoSelecionado.categoria;
  }
});

// =================== CADASTRAR VENDA ===================
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const produto = selectProduto.value;
  const categoria = selectCategoria.value;
  const quantidade = Number(inputQuantidade.value);
  const valor = Number(inputValor.value);

  if (!produto || !categoria || quantidade <= 0 || valor <= 0) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  const subtotal = quantidade * valor;
  totalVenda += subtotal;

  itensVenda.push({
    produto,
    categoria,
    quantidade,
    valor,
    subtotal
  });

  atualizarResumo();

  // reset parcial
  form.reset();
  inputQuantidade.value = 1;
});

// =================== ATUALIZAR CAIXA DE BAIXO ===================
function atualizarResumo() {
  listaItens.innerHTML = "";

  itensVenda.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p>
        <strong>${item.produto}</strong><br>
        Categoria: ${item.categoria}<br>
        ${item.quantidade} x R$ ${item.valor.toFixed(2)} =
        <strong>R$ ${item.subtotal.toFixed(2)}</strong>
      </p>
      <hr>
    `;
    listaItens.appendChild(div);
  });

  totalVendaSpan.innerText = `R$ ${totalVenda.toFixed(2)}`;
}

// INICIALIZA
carregarProdutosECategorias();
