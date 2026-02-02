function cadastrar() {
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const confirmarSenha = document.getElementById("confirmarSenha");
    const erroSenha = document.getElementById("erroSenha");
    const msgSucesso = document.getElementById("msgSucesso");

    if (!nome || !email || !senha || !confirmarSenha) {
        alert("Erro interno no formulário");
        return;
    }

    if (
        nome.value === "" ||
        email.value === "" ||
        senha.value === "" ||
        confirmarSenha.value === ""
    ) {
        alert("Preencha todos os campos!");
        return;
    }

    if (senha.value !== confirmarSenha.value) {
        erroSenha.style.display = "block";
        return;
    } else {
        erroSenha.style.display = "none";
    }

    localStorage.setItem("nomeUsuario", nome.value);
    localStorage.setItem("emailUsuario", email.value);
    localStorage.setItem("senhaUsuario", senha.value);
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
