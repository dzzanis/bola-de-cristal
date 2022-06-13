const inputPergunta = document.querySelector("#inputPergunta")
const elementoResposta = document.querySelector("#resposta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

function fazerPergunta() {

  if (inputPergunta.value.trim() == "") {
    window.alert("Digite sua pergunta")
    return
  }
  
  buttonPerguntar.setAttribute("disabled",true)
  
  let pergunta = ""
  
  if (inputPergunta.value.indexOf("?") == -1){
    pergunta = "<div>" + inputPergunta.value + "?" + "</div>"
  } else {
    pergunta = "<div>" + inputPergunta.value + "</div>"
  }
   
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random(0, totalRespostas) * totalRespostas)
  
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
  elementoResposta.style.opacity = 0.9
  inputPergunta.value= ""
  
  setTimeout(function(){
    elementoResposta.style.opacity = 0
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)
}