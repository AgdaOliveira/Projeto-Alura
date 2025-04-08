function jogo() {
  alert("Bem-vindo ao jogo de aventura! \nEscolha o caminho certo para passar sem ser pego.")
    alert("Você tem 3 rodadas para passar sem ser pego.")
rodada = 1
while(rodada <= 3) {
  console.log("Rodada: " + rodada) 
  
  
  escolhaJogador = prompt("Nivel "+rodada+", escolha o caminho (1,2 ou 3)?")

  pisoQuebrado = Math.floor(Math.random()*3) + 1;
    if(escolhaJogador > 3){
    alert("Escolha um dos caminhos disponíveis, você não é a Herta, sem trapaças!")
    rodada--
  } else if(escolhaJogador == pisoQuebrado) {
    alert("Você foi visto, prepare-se para o combate")
    rodada = 1000;
  } else {
    alert("Você conseguiu atravessar sem ser visto! O monstro estava no caminho: " + pisoQuebrado)
  }
  
  rodada++ //rodada = rodada + 1
}

if(rodada == 4){
  alert("Você passou por todos sem ser visto!! Prepare-se para a luta contra o boss \n(Não será incluido em atualizações futuras)")
}}