function preload(){
}

function setup() {
    canvas = createCanvas(900, 400);
    canvas.position(400,590);
    video=createCapture(VIDEO);
   video.hide();
   tint_color="";

   translate(590, 200);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
  translate(600, 200);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(10, 30, 20, 80);
    rotate(PI/5);
  }
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 50, 20, 80);
    rotate(PI/5);
    fill("#03a9f4")
  }
  translate(500, 260);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
    fill("blue")
    stroke("blue")
  }
  translate(580, 200);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
}

function draw() {
   stroke("pink");
   fill("pink");
   document.getElementById("body1").draw=rect(780, 90, 20, 50);
   document.getElementById("body1").draw=rect(740, 90, 20, 50);
   stroke("#29b6f6");
   fill("#2db6f6");
   document.getElementById("body1").draw=ellipse(600, 30, 20, 80);
   stroke("pink");
   fill("pink");
   document.getElementById("body1").draw=ellipse(620, 30, 20, 80);
   stroke("#29b6f6");
   fill("#2db6f6");
   document.getElementById("body1").draw=ellipse(640, 30, 20, 80);
   stroke("pink");
   fill("pink");
   document.getElementById("body1").draw=ellipse(660, 30, 20, 80);
   stroke("#29b6f6");
   fill("#2db6f6");
   document.getElementById("body1").draw=ellipse(680, 30, 20, 80);
   stroke("pink");
   fill("pink");
   document.getElementById("body1").draw=ellipse(700, 30, 20, 80);
   stroke("#29b6f6");
   fill("#2db6f6");
   document.getElementById("body1").draw=ellipse(720, 30, 20, 80);
   stroke("pink");
   fill("pink");
   document.getElementById("body1").draw=ellipse(740, 30, 20, 80);
   stroke("#29b6f6");
   fill("#2db6f6");
   document.getElementById("body1").draw=ellipse(760, 30, 20, 80);
   stroke("pink");
   fill("pink");
   document.getElementById("body1").draw=ellipse(780, 30, 20, 80);
   stroke("#29b6f6");
   fill("#2db6f6");
   document.getElementById("body1").draw=ellipse(800, 30, 20, 80);
   stroke("pink");
   fill("pink");
   document.getElementById("body1").draw=ellipse(820, 30, 20, 80);
   stroke("#29b6f6");
   fill("#2db6f6");
   document.getElementById("body1").draw=ellipse(840, 30, 20, 80);
   stroke("pink");
   fill("pink");
   document.getElementById("body1").draw=ellipse(860, 30, 20, 80);
   stroke("#29b6f6");
   fill("#2db6f6");
   document.getElementById("body1").draw=ellipse(880, 30, 20, 80);
   stroke("pink");
   fill("pink");
   document.getElementById("body1").draw=ellipse(910, 30, 20, 80);
   stroke("#29b6f6");
   fill("#2db6f6");
   document.getElementById("body1").draw=ellipse(930, 30, 20, 80);
   stroke("pink");
   fill("pink");
   document.getElementById("body1").draw=ellipse(950, 30, 20, 80);
   stroke("#29b6f6");
   fill("#2db6f6");
   document.getElementById("body1").draw=ellipse(970, 30, 20, 80);
   stroke("pink");
   fill("pink");
   document.getElementById("body1").draw=ellipse(990, 30, 20, 80);
  

  stroke("pink");
  fill("pink");
  for(i=0; i<20; i++){
    document.getElementById("myCanvas").draw=circle(890, 50, 20);
    rotate(PI/5);
    document.getElementById("myCanvas").draw=circle(890, 100, 20);
    document.getElementById("myCanvas").draw=circle(890, 150, 20);
    document.getElementById("myCanvas").draw=circle(890, 200, 20);
    document.getElementById("myCanvas").draw=circle(890, 250, 20);
    document.getElementById("myCanvas").draw=circle(890, 300, 20);
    document.getElementById("myCanvas").draw=circle(890, 350, 20);
  }

 tint(tint_color);
    image(video,100,80,300,250);

    stroke("#ADD8E6");
    fill("#ADD8E6");
    
    circle(40,40,50);
    circle(460,40,50);
    circle(40,360,50);
    circle(460,360,50);

    stroke(50, 168, 82);
    fill("pink");

    rect(63, 27, 375, 25);
    rect(63, 347, 375, 25);
    rect(27, 63, 25, 275);
    rect(448, 63, 25, 275);

    stroke("pink");
    fill("pink");
    translate(600, 260);
    noStroke();
    for (let i = 0; i < 10; i ++) {
      ellipse(0, 10, 20, 80);
      rotate(PI/5);
    }
    stroke("blue");
    fill("blue");
    translate(650, 260);
    noStroke();
    for (let i = 0; i < 10; i ++) {
      ellipse(0, 10, 20, 80);
      rotate(PI/5);
    }
    stroke("pink");
    fill("green");
    translate(700, 300);
    noStroke();
    for (let i = 0; i < 10; i ++) {
      ellipse(0, 10, 20, 80);
      rotate(PI/5);
    }
}
function filter_color(){
    tint_color=document.getElementById("input_color").value;
}
function take_snapshot(){
    save('Filter_Applied_Photo.png');
}

document.getElementById("body1").draw=rect(700, 150, 20, 50);
document.getElementById("body1").draw=rect(760, 150, 20, 50);
document.getElementById("body1").draw=rect(800, 150, 20, 50);
document.getElementById("body1").draw=ellipse(830, 30, 20, 80);
document.getElementById("body1").draw=ellipse(850, 30, 20, 80);
document.getElementById("body1").draw=ellipse(870, 30, 20, 80);
document.getElementById("body1").draw=ellipse(890, 30, 20, 80);