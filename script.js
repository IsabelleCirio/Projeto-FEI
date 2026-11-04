// adicionar planos
// const planos = {

// }

// criar função para colocar inf de usuario dentro dos inputs de conta

const usuario = {
  nome: "João",
  telefone: "(11) 98765-4321",
  email: "joao@email.com",
  pets: [
    {
        nome: "Bento",
        especie: "cachorro",
        idade: 4,
        sexo: 'M'
    }, {
        nome: "Lua",
        especie: "gato",
        idade: 2,
        sexo: 'F'
    }
  ],
//   carrinho: [
//     {
//         nome: "Ração"
//     }
//   ],
  plano: Carinho
};

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
    const elemento = document.getElementById("nome");
    elemento.textContent += ", " + usuario.nome;
}

function irCarrinho() {
    window.location.href = "../paginas/carrinho.html";
}

function filtro() {

}

function alterarFotoPet() {

}

function mostrarQuantidadeCarrinho() {
    
}