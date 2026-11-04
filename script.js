// function irPrincipal() {
//     if (pegarPaginaAtual() == "/index.html") {
//         window.location.href = "/index.html";
//     } else {
//         window.location.href = "../index.html";
//     }
// }

// function irConsultas() {
//     if (pegarPaginaAtual() == "/index.html") {
//         window.location.href = "../paginas/consultas.html";
//     } else {
//         window.location.href = "./consultas.html";
//     }
// }

// function irLoja() {
//     if (pegarPaginaAtual() == "/index.html") {
//         window.location.href = "../paginas/loja.html";
//     } else {
//         window.location.href = "./loja.html";
//     }
// }

// function irPets() {
//     if (pegarPaginaAtual() == "/index.html") {
//         window.location.href = "../paginas/pets.html";
//     } else {
//         window.location.href = "./pets.html";
//     }
// }

// function irConta() {
//     if (pegarPaginaAtual() == "/index.html") {
//         window.location.href = "../paginas/conta.html";
//     } else {
//         window.location.href = "./conta.html";
//     }
// }


function carregarHeader() {
    fetch("/components/header.html")
        .then(resposta => {
            if (!resposta.ok) {
                throw new Error("Não foi possível carregar o menu");
            }

            return resposta.text();
        })
        .then(html => {
            document.getElementById("header-container").innerHTML = html;
        })
        .catch(erro => {
            console.error(erro);
        });
}

function carregarSidebar() {
    fetch("/components/sidebar.html").then(resposta => {
            if (!resposta.ok) {
                throw new Error("Não foi possível carregar o menu");
            }

            return resposta.text();
        })
        .then(html => {
            document.getElementById("sidebar-container").innerHTML = html;
        })
        .catch(erro => {
            console.error(erro);
        });
}

function adicionarAtivo() {
    

}

function adicionaNome() {
    const paragrafo = document.getElementById("nome-pessoa");

    paragrafo.innerHTML += 'marina';
}

function irCarrinho() {
    window.location.href = "../paginas/carrinho.html";
}