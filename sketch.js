let value = "#00FF00";
var s = 10;
var s2 = 10;
var c = 30;
var option = 1;
var inc = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  let p = createP("press the keys RGB and click!");
  p.style("30", "16px");
  p.position(windowWidth / 2 - 125, windowHeight - 65);
}

function draw() {
  var density = map(mouseX, 0, width, 20, 60);

  if (option == 1) {
    background(255);
    stroke(value);

    // option 1
    for (var x = 0; x <= width; x += density) {
      for (var y = 0; y <= height; y += density) {
        line(x - s, y - s, x + s, y + s);
        line(x + s, y - s, x - s, y + s);
      }
    }

    //option2
  } else if (option == 2) {
    background(255);
    stroke(value);
    for (var x = 0; x <= width; x += density) {
      for (var y = 0; y <= height; y += density) {
        ellipse(x, y, c, c);
      }
    }
    //option 3
  } else if (option == 3) {
    background(255);
    stroke(value);
    var count = 0;
    for (var x = 0; x <= width; x += density) {
      for (var y = 0; y <= height; y += density) {
        strokeWeight(count * 0.004);

        ellipse(x, y, s2, s2);

        count++;
      }
    }
    //option 4
  } else if (option == 4) {
    background(255);
    stroke(value);
    for (var x = 0; x <= width; x += density) {
      for (var y = 0; y <= height; y += density) {
        rect(x, y, c, c);
      }
    }
    strokeWeight(1);

    //option 5
  } else if (option == 5) {
    background(255);
    stroke(value);

    for (var x = 0; x <= width; x += density) {
      for (var y = 0; y <= height; y += density) {
        for (var i = 0; i < 16; i += 10) {
          line(x + i, y, x + i, y + 12);
        }
      }
    }
  }
}
function mousePressed() {
  option++;
  if (option > 5) option = 1;
}

function keyTyped() {
  if (key === "g") {
    value = "#00FF00";
  } else if (key === "b") {
    value = "#0000FF";
  } else if (key === "r") {
    value = "#FF0000";
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
