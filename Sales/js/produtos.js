
let indiceEdicao = null;

function carregarProdutos(){
    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    const tbody = document.getElementById("listaProdutos");

    tbody.innerHTML = "";

    produtos.forEach((p, index) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td class="left">${p.nome}</td>
            <td>${p.categoria}</td>
            <td>R$ ${p.valor.toFixed(2).replace(".", ",")}</td>
            <td>
                <button class="btn-editar" onclick="editarProduto(${index})">
                    Editar
                </button>
                <button class="btn-excluir" onclick="excluirProduto(${index})">
                    Excluir
                </button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

function salvarProduto(){
    const nome = document.getElementById("produto").value;
    const categoria = document.getElementById("categoria").value;
    const valor = parseFloat(document.getElementById("valor").value);

    if(!nome || !categoria || !valor){
        alert("Preencha todos os campos.");
        return;
    }

    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

    if(indiceEdicao === null){
        produtos.push({ nome, categoria, valor });
    } else {
        produtos[indiceEdicao] = { nome, categoria, valor };
        indiceEdicao = null;
    }

    localStorage.setItem("produtos", JSON.stringify(produtos));

    document.getElementById("produto").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("valor").value = "";

    carregarProdutos();
}

function editarProduto(index){
    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    const produto = produtos[index];

    document.getElementById("produto").value = produto.nome;
    document.getElementById("categoria").value = produto.categoria;
    document.getElementById("valor").value = produto.valor;

    indiceEdicao = index;
}

function excluirProduto(index){
    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    produtos.splice(index, 1);
    localStorage.setItem("produtos", JSON.stringify(produtos));
    carregarProdutos();
}

carregarProdutos();