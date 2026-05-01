let step=0;
let player="";

let story=[
"Vocês chegam no hospital...",
"Seus amigos se separam.",
"Você sente algo estranho.",
"...",
"Seu nome aparece na parede.",
"Você já esteve aqui."
];

function start(){
player=document.getElementById("name").value;

if(player==="") return alert("Digite um nome");

localStorage.setItem("player",player);

document.getElementById("intro").style.display="none";
document.getElementById("game").style.display="block";

document.getElementById("audio").play();

next();
}

function next(){
if(step<story.length){
document.getElementById("story").innerText=story[step];
step++;
}else{
window.location.href="../capitulo2/index.html";
}
}