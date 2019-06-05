function gauss(x, sigma) {
  return pow(2.718, -1 * sq(x)/(2 * sq(sigma)))/(sqrt(2 * PI * sq(sigma)))
}

function setup() {
    createCanvas(windowWidth, windowHeight)
  }
  
function draw() {
  //translate(width/2, height/2)
  background(2, 21, 44)
  stroke(255, 153, 178)
  strokeWeight(2)
  for(x=100; x<1000; x = x + 20){
    for(y=100; y<500; y = y + 20) {
      let directionX = (mouseX-x)/width
      let directionY = (mouseY-y)/height
      let dist = sqrt(sq(mouseX-x) + sq(mouseY-y))
      dist = gauss(dist, 90)*50000
      directionX = directionX*dist
      directionY = directionY*dist
      line(x, y,  x + directionX, y + directionY)
      }  
    }
  }