function gerar(){
    const inicio = document.getElementById("inicio").value;
    const fim = document.getElementById("fim").value;

    if(!inicio || !fim){
        alert("Selecione o período de análise.");
        return;
    }

    const linhas = document.querySelectorAll("#tabelaProdutos tbody tr");
    let totalGeral = 0;

    linhas.forEach(linha => {
        const dataVenda = linha.getAttribute("data-data");

        if(dataVenda >= inicio && dataVenda <= fim){
            linha.style.display = "";

            const qtd = parseInt(linha.children[2].innerText);
            const valor = parseFloat(
                linha.children[3].innerText.replace("R$", "").replace(",", ".")
            );

            const total = qtd * valor;
            linha.children[4].innerText =
                "R$ " + total.toFixed(2).replace(".", ",");

            totalGeral += total;
        } else {
            linha.style.display = "none";
        }
    });

    document.getElementById("totalPeriodo").innerText =
        "R$ " + totalGeral.toFixed(2).replace(".", ",");

    document.getElementById("analise").innerHTML =
        "No período de <strong>" +
        inicio.split("-").reverse().join("/") +
        "</strong> até <strong>" +
        fim.split("-").reverse().join("/") +
        "</strong>, o relatório demonstra desempenho positivo nas vendas, " +
        "com faturamento consistente, auxiliando no controle financeiro " +
        "e na tomada de decisões estratégicas.";
}