let borda = 150
let red = 25
let green = 25
let blue = 255

function telaInicio() {
  // background(131, 111, 255)
  // image(fundoTelaInicio, 0, 0, 600, 400)
  background(fundoTelaInicio)

  noStroke()
  fill(red, green, blue)
  text("Menu", 200, 100)

  rect(100, 150, 200, 50, 10)
  rect(100, 250, 200, 50, 10)

  textSize(26)
  textAlign(CENTER)

  fill(220, 220, 220)
  text("1 PLAYER", 200, 180)
  text("2 PLAYERS", 200, 280)

  noFill()
  stroke(220, 220, 220)
  rect(100, borda, 200, 50, 10)
  seleciona()
}

function mousePressed() {
  if (mouseX >= 100 && mouseX <= 300 && mouseY >= 150 && mouseY <= 200) {
    borda = 150
    multiplayer = false
    tela = 2
  } else if (mouseX >= 100 && mouseX <= 300 && mouseY >= 250 && mouseY <= 300) {
    borda = 250
    multiplayer = true
    tela = 2
  }
}

function seleciona() {
  if (keyIsDown(DOWN_ARROW)) {
    borda = 250
    multiplayer = true
  }
  if (keyIsDown(UP_ARROW)) {
    borda = 150
    multiplayer = false
  }
  if (keyIsDown(ENTER)) {
    tela = 2
  }
}
