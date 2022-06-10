const elementoResposta = document.querySelector ("#resposta")
const inputPergunta = document.querySelector ("#inputPergunta")
const botaoPergunta = document.querySelector ("#botaoPergunta")

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
      
    if(inputPergunta.value == "") {
      elementoResposta.innerHTML = "Você esqueceu de fazer uma pergunta!"
      elementoResposta.style.opacity = 1;
      setTimeout(function() {
        elementoResposta.style.opacity = 0;
    }, 3000)   
      return
    }

    botaoPergunta.setAttribute("disabled", true)

    const pergunta = "<div>" + inputPergunta.value + "</div>"
        

      const totalRespostas = respostas.length
      const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

      
        
        
      elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
      elementoResposta.style.opacity = 1;
    
      setTimeout(function() {
          elementoResposta.style.opacity = 0;
          botaoPergunta.removeAttribute("disabled")
      }, 3000)
    
    }
    