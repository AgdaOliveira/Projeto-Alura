function jogo(){
  alert("Bem vindo ao jogo do cabo de guerra")
  alert("Você vai escolher 3 jogadores para o seu time, e o computador vai escolher 3 vilões para o time dele")
  alert("Depois disso, vamos ver quem tem mais força!")

//eu preciso criar uma listas com 3 jogadores
personagem = ["", "", ""]

viloes = ["", "", ""]

forçapersonagem = 0
forçaviloes = 0

for (let i=0; i<3; i++){
  escolhapersonagem = prompt("Digite o nome do personagem" + (i+1))
  personagem [i] = escolhapersonagem
  //calculr a força de cada jogador, e depois sormar para saber a força do time
  forçapersonagem = forçapersonagem + Math.floor(Math.random() * 10) + 1
//forçapersonagem += Math.floor(Mth.random() + 10) + 1 // maneira mais avançada 
 
}
console.log("Agora, o array personagem contem: " + personagem)
console.log(" Inicio viloes:"+ viloes)
for(let i=0; i<3; i++){
  indiceAleatorio = Math.floor(Math.random() * 5 )
viloespossiveis = ["Thanos", "Galactus", "Magneto", "Jack Torrance", "Luki"]
viloes[i] = viloespossiveis[indiceAleatorio]
  //calcular a força do time do computador
  forçaviloes = forçaviloes + Math.floor(Math.random() *10 ) +1
  
}
console.log("Viloes:" + viloes)

//compara os dois times para saber quem venceu
if(forçapersonagem> forçaviloes){
  alert("Su time é e forte! você ganhou a disputa de cabo de guerra! Sua força foi " + forçapersonagem)
}
else{
        if ( forçapersonagem< forçaviloes){
    alert(" Seu time e fraco . o computador ganhou o cabo de guerra com a força de " + forçaviloes)
  }
  else{
    alert(" O dois times tem a mesma foça! E pate!")
  }
} }  