
const card = document.querySelectorAll(`.card`)
const buttonPrev = document.getElementById(`prev-button`)
const buttonNext = document.getElementById(`next-button`)
let NameCard = document.querySelector(".SecondTitulo")

let currentCard = 0;

function EsconderCard() {
    card.forEach(item => item.classList.remove(`selected`))
}

function MostrarCard() {
    card[currentCard].classList.add(`selected`)
    NameCard.textContent = card[currentCard].getAttribute("id")
}

function proxCard() {
    EsconderCard()
    if (currentCard === card.length -1) {
        currentCard = 0
    } else {
        currentCard ++
    }

    MostrarCard()
    
}

function antesCard() {
    EsconderCard()
    if (currentCard === 0) {
        currentCard = card.length- 1
    } else {
        currentCard --
    }
    MostrarCard()
}
/***********************************************************************************************************/
//Página login


    function Trocarpag() {
      window.location.href = "Cadastre-se.html";
    }

    function Trocarpag1() {
      window.location.href = "Login.html";
    }

    
    function verificarSenha(event) {
      event.preventDefault();
      console.log("Função verificarSenha foi chamada!");
      
      const senha = document.getElementById("senha").value;
      const form = document.getElementById("loginForm")
      const errorSound = document.getElementById("errorSound");

      if (senha !== "minecraft123") {
        form.classList.add("shake");
        errorSound.currentTime = 0;
        errorSound.play();

        setTimeout(() => {
          form.classList.remove("shake");
        }, 1000);
      }
       else {
        alert("Login bem-sucedido!");
      }

      return false;
    }


    document.getElementById("loginForm").addEventListener("submit", verificarSenha);


    function ScrolltoNether() {
      document.querySelector('#NetherWord').scrollIntoView({
          behavior: 'smooth'
      });
  }

/***********************************************************************************************************/
//Página de Cadastro

  function mostrarMensagem() {
    alert("Bem vindo ao seu Novo Mundo! Sua conta foi Cadastrada.");
}

