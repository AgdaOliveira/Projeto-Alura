function jogar () {

    idade = prompt("Quantos anos você tem?")
    
    if (idade < 18) {
      alert("Você NÃO pode jogar jokenpo!");
    }
    
    
    if (idade >= 18) {
        alert("Vamos jogar jokenpo!");
      escolhaJogador = prompt("Digite 1-Pedra, 2-Papel ou tesoura");
      escolhaComputador = Math.floor(Math.random() * 3) + 1;
    }
      //Jogador Pedra, Computador Pedra --> empate!!!!
      //Jogador Tesoura, Computador Tesoura --> empate!!!
      //Jogador Papel, Computador Papel --> empate!!!
      
      if  (escolhaJogador == escolhaComputador) {
        alert("Empate!!!")
      }
      
    
      
      if (escolhaJogador == 1) {
    
        if(escolhaComputador == 2) {
         
          alert("Computador venceu, escolheu papel")
        }
        if(escolhaComputador == 3) {
          
          alert("Jogador vence, computador tesoura")
        }
      }
      
      if(escolhaJogador == 2) {
    
        if(escolhaComputador == 1) {
         
          alert("Jogador venceu, computador  pedra!!")
        }
        if(escolhaComputador == 3) {
         
          alert("Computador venceu, escolheu tesoura")
        }
      }
      
      if(escolhaJogador == 3) {
        
        if(escolhaComputador == 1) {
           
          alert("Computador venceu, escolheu pedra")
        }
        if (escolhaComputador == 2) {
          
          alert("Jogador venceu, computador papel")
        }
      }
     alert("A  escolha do Computador for" +  escolhaComputador)
    }