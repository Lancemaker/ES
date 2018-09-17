class Main{
    constructor() {
        this.text="";
      }
}
let dom = document;
const main = new Main();
let canvas = dom.getElementById("content");

Renderer = {    
    render(state){
    canvas.innerHTML=state;
    }
}

cadeiras = {
    PrintaCadeira(i){
        number=i;
        let text="<div class=\"sala\">";
        image = "img/cadeira.png";
        for (let index = 0; index < number; index++) {
            text+="<div onclick=\"MudaFundo(event)\" id=\"cad\"class=\"imgConteiner\"><img src="+image+" alt=\"cadeira\" class=\"cadeira\"></div>"        
            }
        return text+="</div>";   
    }
}


//clear
let state0="<h1><em> Seja bem vindo </em></h1>";
//pagina 1

let state1= cadeiras.PrintaCadeira(150);
//pagina 2
let state2= "";


let states=[state0,state1,state2];

let estadoAtual = 0;

Renderer.render(states[estadoAtual]);

 function mudaEstado(n){
estadoAtual=n;
if(estadoAtual==2){
    state2=load("filmes.html")
}
Renderer.render(states[parseInt(estadoAtual)]);

}



///////////////////////////////////LoadFiles
function load(file){
var client = new XMLHttpRequest();
client.open('GET', file);

client.onload = function() {          
    Renderer.render(client.responseText);       
        return client.responseText;   
}
client.send();
}


///////////////////////////////////////Click Events Nas cadeiras.
function MudaFundo(e) {
    if(e.target.parentNode.style.backgroundColor=="red"){
        e.target.parentNode.style.backgroundColor="wheat"
    }
    else{
        e.target.parentNode.style.backgroundColor="red";
    }
   

}
///////////////////////carregando codigo dinamicamente:

  
