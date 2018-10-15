class Main {
    constructor() {
        this.text = "";
    }
}

class Conta {
    constructor() {
        this.preco = 50;
        this.filme = "";
        this.cadeira = "";
    }
}

let dom = document;
const main = new Main();
let conta = new Conta();
let canvas = dom.getElementById("content");

Renderer = {
    render(state) {
        canvas.innerHTML = state;
    }
}

cadeiras = {
    PrintaCadeira(i) {
        number = i;
        let text = "<div class=\"sala\">";
        image = "img/cadeira.png";
        for (let index = 0; index < number; index++) {
            text += "<div onclick=\"MudaFundo(event)\" id=\"cad\"class=\"imgConteiner\"><img src=" + image + " alt="+i+" id=\"imagemCadeira\" class=\"cadeira\"></div>"
        }
        return text += "</div>";
    }
}


//clear
let state0 = "<h1><em> Seja bem vindo </em></h1>";
//pagina 1

let state1 = cadeiras.PrintaCadeira(144);
//pagina 2 
let state2,state4,state5="";

let state3 = "<h1><em>Pagamento</em></h1><p>preço : "+conta.preco+"</p><p>filme : "+conta.filme+"</p><p>preço : "+conta.cadeira+"</p>";
let states = [state0, state1, state2,state3,state4,state5];

let estadoAtual = 0;

Renderer.render(states[estadoAtual]);

function mudaEstado(n) {
    estadoAtual = n;
    //if (estadoAtual == 2) {
    //    state2 = load("filmes.html")
    //}
    switch (estadoAtual) {
        case 2:
        state2 = load("filmes.html");
            break;
        
        case 4:
        state4 = load("contatos.html");
            break;
        case 5:
        astate5 = load("sobrenos.html");
            break;
        default:
            break;
    }
    
    Renderer.render(states[parseInt(estadoAtual)]);
}



///////////////////////////////////LoadFiles
function load(file) {
    var client = new XMLHttpRequest();
    client.open('GET', file);

    client.onload = function () {
        Renderer.render(client.responseText);
        return client.responseText;
    }
    client.send();
}


///////////////////////////////////////Click Events Nas cadeiras.
function MudaFundo(e) {
    if(conta.cadeira==""){
        e.target.parentNode.style.backgroundColor = "red"
        conta.cadeira=e.target.alt;
    }
    //if (e.target.parentNode.style.backgroundColor == "red") {
    //    e.target.parentNode.style.backgroundColor = "wheat";
    //}
    //else {
    //    e.target.parentNode.style.backgroundColor = "red";
    //}
}

function guardaFilme(filme){
    conta.filme = filme;
}



