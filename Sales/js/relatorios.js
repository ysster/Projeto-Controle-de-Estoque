const tbody = document.querySelector("#tabelaProdutos tbody");
const totalPeriodo = document.getElementById("totalPeriodo");
const analise = document.getElementById("analise");

const vendas = JSON.parse(localStorage.getItem("vendas")) || [];

// =================== GERAR RELATÓRIO ===================
function gerar() {
    const inicio = document.getElementById("inicio").value;
    const fim = document.getElementById("fim").value;

    if (!inicio || !fim) {
        alert("Selecione o período de análise.");
        return;
    }

    tbody.innerHTML = "";
    let totalGeral = 0;

    vendas.forEach(v => {

        const [dia, mes, ano] = v.data.split("/");
        const dataVenda = `${ano}-${mes}-${dia}`;

        if (dataVenda >= inicio && dataVenda <= fim) {
            const total = v.quantidade * v.valor;
            totalGeral += total;

            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td class="left">${v.produto}</td>
                <td>${v.categoria}</td>
                <td>${v.quantidade}</td>
                <td>R$ ${v.valor.toFixed(2).replace(".", ",")}</td>
                <td>R$ ${total.toFixed(2).replace(".", ",")}</td>
            `;
            tbody.appendChild(tr);
        }
    });

    totalPeriodo.innerText =
        "R$ " + totalGeral.toFixed(2).replace(".", ",");

    analise.innerHTML = `
        No período de <strong>${inicio.split("-").reverse().join("/")}</strong>
        até <strong>${fim.split("-").reverse().join("/")}</strong>,
        o relatório apresenta um total faturado de
        <strong>R$ ${totalGeral.toFixed(2).replace(".", ",")}</strong>,
        auxiliando no controle financeiro e na tomada de decisões estratégicas.
    `;
}
const nome = localStorage.getItem("nomeUsuario");

if (nome && document.getElementById("nomeUsuario")) {
  document.getElementById("nomeUsuario").innerText = nome;
}
