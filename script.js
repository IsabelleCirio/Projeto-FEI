// adicionar planos
const planos = {
    Carinho: [
        {
            preço: 79.90,
            beneficios: [
                {
                    consultasAno: 2,
                    descontoLoja: 0.1,
                    //Isso após a utilização das consultas ao ano
                    descontoExamesComplexos: 0.15,
                    vacinasEssenciaisInc: true,
                    banhoMensalDesc: 0.2
                }
            ]
        }
    ],
    Basico: [
        {
            preço: 49.90,
            beneficios: [
                {
                    consultasAno: 2,
                    descontoLoja: 0.05,
                    //Isso após a utilização das consultas ao ano
                    descontoExamesComplexos: 0.01,
                    vacinasEssenciaisInc: false,
                    banhoMensalDesc: 0.15
                }
            ]
        }
    ]
}

const produtos = {
    Ração_Cachorro: [
        {
            nome: "Ração Cachorro",
            tipo: "cão",
            preco: 89.90,
            quantidadeVendido: 67,
            avaliacao: 4.2
        }
    ],
    Mordedor_Canino: [
        {
            nome: "Mordedor Canino",
            tipo: "cão",
            preco: 49.99,
            quantidadeVendido: 101,
            avaliacao: 4.6 
        }
    ],
    Arranhador: [
        {
            nome: "Arranhador",
            tipo: "gato",
            preco: 89.90,
            quantidadeVendido: 29,
            avaliacao: 4.0
        }
    ],
    Vermífugo: [
        {
            nome: "Vermífugo",
            tipo: "cão_gato",
            preco: 16.50,
            quantidadeVendido: 1000,
            avaliacao: 5.0
        }
    ]
}

// criar função para colocar inf de usuario dentro dos inputs de conta

const usuario = {
    nome: "João",
    telefone: "(11) 98765-4321",
    email: "joao@email.com",
    pets: [{
            nome: "Bento",
            especie: "cachorro",
            idade: 4,
            sexo: 'M'
        }, 
        {
            nome: "Lua",
            especie: "gato",
            idade: 2,
            sexo: 'F'
    }],
    carrinho: [{
        1: produtos.Ração_Cachorro
    }],
    plano: planos.Carinho
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
            adicionarAtivo()
        })
        .catch(erro => {
            console.error(erro);
        });
}

function adicionarAtivo() {
    let linkAtual = window.location.pathname;

    const linksBotoes = document.querySelectorAll('.sidebarNav div');

    linksBotoes.forEach(botao => {
        const link = botao.querySelector("a")
        const hrefL = link.getAttribute("href");

        // console.log(linkAtual)

        // console.log(hrefL)

        if(".." + linkAtual === hrefL || linkAtual === hrefL) {
            botao.classList.add("ativo");
        }
    });
}

function adicionaNome() {
    const elemento = document.getElementById("nome");
    elemento.textContent += ", " + usuario.nome;
}

// function informacoesPlano() {

// }

function irCarrinho() {
    window.location.href = "../paginas/carrinho.html";
}

function filtro() {

}

// function mostrarQuantidadeCarrinho() {
    
// }