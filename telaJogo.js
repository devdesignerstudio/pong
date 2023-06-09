function telaJogo() {
  background(0)
  mostraBolinha()
  movimentoBolinha()
  verificaColisaoBorda()
  mostraRaquete(xRaquete, yRaquete)
  mostraRaquete(xRaquete2, yRaquete2)
  movimentaRaquete()
  movimentaRaqueteAdversario()
  // verificaColisaoRaquete();
  verificaColisaoRaqueteLib(xRaquete, yRaquete)
  verificaColisaoRaqueteLib(xRaquete2, yRaquete2)
  renderizaPlacar()
  marcaPonto()
  bolinhaNaoFicaPresa()
}
