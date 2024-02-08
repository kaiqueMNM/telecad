if (localStorage.getItem("token") == null) {
    alert("você precisa estar logado para acessar a pagina");
    window.location.href = "./assets/html/signin.html";
}

let userLogado = JSON.parse(localStorage.getItem("userLogado"));

let logado = document.querySelector("#logado");
logado.innerHTML = `Olá ${userLogado.nome}`;


function sair(){
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "./assets/html/signin.html"
}