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
let state0="";
//pagina 1

let state1= cadeiras.PrintaCadeira(150);
//pagina 2
let state2=load("/filmes.html");

let states=[state0,state1,state2];

Renderer.render(states[2])



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

  
