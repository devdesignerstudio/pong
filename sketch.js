//variavéis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 18;
let raioBolinha = diametroBolinha / 2;

//variáveis da velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 3;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let alturaRaquete = 90;
let comprimentoRaquete = 10;

//variáveis da raquete adversário
let xRaquete2 = 585;
let yRaquete2 = 150;
let velocidadeYadversario;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosAdversario = 0;

//sons do jogo
let raquetada;
let ponto;
let trilhaSonora;

let chanceDeErrar = 0;

function preload(){
  trilhaSonora = loadSound('trilha.mp3');
  raquetada = loadSound('raquetada.mp3');
  ponto = loadSound('ponto.mp3');
}

function setup() {
  createCanvas(600, 400);
  trilhaSonora.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaquete2,yRaquete2);
  movimentaRaquete();
  movimentaRaqueteAdversario();
  // verificaColisaoRaquete();
  verificaColisaoRaqueteLib(xRaquete, yRaquete);
  verificaColisaoRaqueteLib(xRaquete2, yRaquete2);
  renderizaPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
  
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametroBolinha);
  
}

function movimentoBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raioBolinha > width || xBolinha - raioBolinha < 0) {
    velocidadeXBolinha *= -1;
    
  }
  
  if (yBolinha + raioBolinha > height || yBolinha - raioBolinha < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y){
  rect(x, y, comprimentoRaquete, alturaRaquete);
}

function movimentaRaquete(){
  
  if (keyIsDown(87) && (yRaquete != 0)) {
    yRaquete -= 10;
  }
  if (keyIsDown(83) && (yRaquete != height - alturaRaquete) ) {
    yRaquete += 10;
  }
  
  
}

function movimentaRaqueteAdversario(){
  // velocidadeYadversario = yBolinha -yRaquete2 - comprimentoRaquete / 2 - 30;
  // yRaquete2 += velocidadeYadversario + chanceDeErrar
  // calculaChanceDeErrar()
  if (keyIsDown(UP_ARROW) && (yRaquete2 != 0) ) {
    yRaquete2 -= 10;
  }
  if (keyIsDown(DOWN_ARROW) && (yRaquete2 != height - alturaRaquete)) {
    yRaquete2 += 10;
  }
  
  
}

function verificaColisaoRaquete(){
  let tocaRaquete = xBolinha - raioBolinha < xRaquete + comprimentoRaquete;
  let raqueteAbaixo = yBolinha - raioBolinha < yRaquete + alturaRaquete;
  let raqueteAcima = yBolinha + raioBolinha > yRaquete;
  if (tocaRaquete && raqueteAcima && raqueteAbaixo ) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function verificaColisaoRaqueteLib(x, y){
  colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raioBolinha);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function renderizaPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140, 0))
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255,140,0))
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosAdversario, 470, 26);
}

function marcaPonto(){
  if (xBolinha > 592) {
    meusPontos++;
    ponto.play();
  }
  if (xBolinha < 8) {
    pontosAdversario++;
    ponto.play();
  }
}

function calculaChanceDeErrar() {
  if (pontosAdversario >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}


function bolinhaNaoFicaPresa(){
    if (xBolinha - raioBolinha < 0){
    xBolinha = 25
    }
    if (xBolinha + raioBolinha > width){
    xBolinha = 565;
    }
}

