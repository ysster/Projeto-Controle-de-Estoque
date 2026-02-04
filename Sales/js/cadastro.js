function cadastrar() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    const erroSenha = document.getElementById("erroSenha");
    const msgSucesso = document.getElementById("msgSucesso");

    if (!nome || !email || !senha || !confirmarSenha) {
        alert("Preencha todos os campos!");
        return;
    }

    if (senha !== confirmarSenha) {
        erroSenha.style.display = "block";
        return;
    } else {
        erroSenha.style.display = "none";
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const existe = usuarios.find(u => u.email === email);
    if (existe) {
        alert("Este e-mail já está cadastrado. Faça login.");
        return;
    }

    usuarios.push({ nome, email, senha });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    localStorage.setItem("nomeUsuario", nome);
    localStorage.setItem("usuarioLogado", "true");

    msgSucesso.style.display = "block";

    setTimeout(() => {
        window.location.href = "../html/index.html";
    }, 1500);
}

function toggleSenha(idCampo, elemento) {
    const input = document.getElementById(idCampo);
    const icon = elemento.querySelector("i");

    if (input.type === "password") {
        input.type = "text";
        icon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.replace("fa-eye-slash", "fa-eye");
    }
}
