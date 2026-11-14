//Array-objeto dos planos do site
const planos = [
    {
        nome: "Carinho",
        preço: 79.90,
        beneficios: {
            consultasAno: 2,
            descontoLoja: 0.1,
            //Isso após a utilização das consultas ao ano
            descontoExamesComplexos: 0.15,
            vacinasEssenciaisInc: true,
            banhoMensalDesc: 0.2
        }
    },
    {
        nome: "Básico",
        preço: 49.90,
        beneficios: {
            consultasAno: 2,
            descontoLoja: 0.05,
            //Isso após a utilização das consultas ao ano
            descontoExamesComplexos: 0.01,
            vacinasEssenciaisInc: false,
            banhoMensalDesc: 0.15
        }
    }
]

//Array-objeto com produtos do site
const produtos = [
    {
        nome: "Ração Cachorro",
        tipo: "Cães adultos",
        preco: "89.90",
        quantidadeVendido: "67",
        avaliacao: "4.2",
        foto: "../image/pet-food.png",
        fotoAlt: "Foto ração cachorro"
    },
    {
        nome: "Mordedor Canino",
        tipo: "Cães filhotes",
        preco: "49.99",
        quantidadeVendido: "101",
        avaliacao: "4.6",
        foto: "../image/dog-toy.png",
        fotoAlt: "Foto brinquedo cachorro"
    },
    {
        nome: "Arranhador",
        tipo: "Gatos filhotes",
        preco: "89.90",
        quantidadeVendido: "29",
        avaliacao: "4.0",
        foto: "../image/cat-toy.png",
        fotoAlt: "Foto brinquedo gato"
    },
    {
        nome: "Vermífugo",
        tipo: "Cães e gatos",
        preco: "16.50",
        quantidadeVendido: "1000",
        avaliacao: "5.0",
        foto: "../image/medicine.png",
        fotoAlt: "Foto remedio para pets"
    }
]

//Array-objeto com informações do usuario
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
    carrinho: [
            {1: produtos[0]},
            {2: produtos[1]}
        ],
    plano: planos[0]
};

//Função fetch para acrescentar o header para todas as páginas
//Evita repetição de código
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

//Função fetch para acrescentar a sidebar para todas as páginas
//Evita repetição de código
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

//Função para mudar a classe ativo na sidebar
function adicionarAtivo() {
    let linkAtual = window.location.pathname;

    if (linkAtual != "/index.html") {
        let index = document.querySelector(".ativo")
        index.classList.remove("ativo")
        index.classList.add("botoes-nav")
    }

    const linksBotoes = document.querySelectorAll('.sidebarNav div');

    linksBotoes.forEach(botao => {
        const link = botao.querySelector("a")
        const hrefL = link.getAttribute("href");

        if(".." + linkAtual === hrefL || linkAtual === hrefL) {
            botao.classList.add("ativo");
        }
    });
}

//Função para ativar a classe selecionado no filtro de loja
function filtrar() {
    const filtroLoja = document.querySelectorAll(".filtro-loja button");

    filtroLoja.forEach(filtro => {
        filtro.addEventListener("click", () => {
            filtroLoja.forEach(filtroRetira => {
                filtroRetira.classList.remove("selecionado");
            })
            filtro.classList.add("selecionado");

            colocarProdutosLoja(filtro.id)     
        })
    })
}

//função para colocar os produtos do nosso array-objeto no HTML de loja
//IA usada somente para entender como relacionar filtrar com colocarProdutosLoja
function colocarProdutosLoja(filtro = "todos") {
    const itensProdutos = document.querySelector(".grid-produtos");

    itensProdutos.innerHTML = "";

    const produtosFiltrados = (filtro == "todos") ? produtos : produtos.filter(produto => produto.tipo.toLowerCase().includes(filtro))

    produtosFiltrados.forEach(produto => {
        let artigo = document.createElement("article");
        artigo.className = "card-produto" 

        let divFoto = document.createElement("div");
        divFoto.className = "foto-produto";

        let imagemFoto = document.createElement("img");
        imagemFoto.src = produto.foto
        imagemFoto.alt = produto.fotoAlt
        
        let divInformacoes = document.createElement("div");
        divInformacoes.className = "informacao-produto"

        let small = document.createElement("small")
        small.textContent = produto.tipo

        let h4 = document.createElement("h4")
        h4.textContent = produto.nome

        let divAvaliacao = document.createElement("div")
        divAvaliacao.className = "avaliacao"

        let imgAvaliacao = document.createElement("img")
        imgAvaliacao.src = "../image/star.png"
        imgAvaliacao.alt = "Estrela amarela"

        let bAval = document.createElement("b")
        bAval.textContent = "\n" + produto.avaliacao + "\n"

        let spanAvali = document.createElement("span")
        spanAvali.textContent = "(" + produto.quantidadeVendido + ")"

        let divPreco = document.createElement("div")
        divPreco.className = "preco"

        let bPreco = document.createElement("b")
        bPreco.textContent = "R$ " + (produto.preco).toString().replace(".", ",")

        let buttonAdicionar = document.createElement("button")
        buttonAdicionar.className = "botao-adicionar"

        let imgBotao = document.createElement("img")
        imgBotao.src = "../image/plus.png"
        imgBotao.alt = "Botão adicionar"


        divPreco.appendChild(bPreco)
        buttonAdicionar.appendChild(imgBotao)
        divPreco.appendChild(buttonAdicionar)
        
        divAvaliacao.appendChild(imgAvaliacao)
        divAvaliacao.appendChild(bAval)
        divAvaliacao.appendChild(spanAvali)

        divInformacoes.appendChild(small)
        divInformacoes.appendChild(h4)
        divInformacoes.appendChild(divAvaliacao)
        divInformacoes.appendChild(divPreco)

        divFoto.appendChild(imagemFoto)

        artigo.appendChild(divFoto)
        artigo.appendChild(divInformacoes)
        
        itensProdutos.appendChild(artigo)
    })
}

//Função para adicionar nome de usuario na página inicial (index)
function adicionaNome() {
    const elemento = document.getElementById("nome");
    elemento.textContent += ", " + usuario.nome;
}

//Função para quando clicar no botão de carrinho ir para a página carrinho
function irCarrinho() {
    window.location.href = "../paginas/carrinho.html";
}

//Função para remover produto do carrinho
// function removerProduto() {

// }

//Função para adicionar produto no carrinho
// function adicionarProduto() {
    
// }

//Função para mostrar a quantidade de itens no carrinho do usuario
// function mostrarQuantidadeCarrinho() {
//
// }

//Verificador de tamanho de tela para alterar o sidebar 
// function verificadorTela() {
//     if (window.screen.width <= 480 && window.screen.height <= 932) {
//         document.querySelector(".sidebarNav").classList.remove()
//         document.querySelector(".sidebarNav").classList.add("mobile-nav")
//     }
// }