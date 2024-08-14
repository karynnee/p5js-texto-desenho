function setup() {
    createCanvas(500, 500);
    background("white");
  }
  
  function draw() {
  
    stroke("red");
    fill("pink");
  
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
    rect(mouseX, mouseY, 15, 25);
    }
  }
  
  