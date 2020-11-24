let width = 663;
let height = 612;

let menu = true;
let initGame = false;
let uitleg = false;

let deel1 = false;
let deel2 = false;
let deel3 = false;
let deel4 = false;
let deel5 = false;
let deel6 = false;
let deel7 = false;
let deel8 = false;
let deel9 = false;

let tempRechts = false;
let tempLinks = false;
let tempBoven = false;
let tempOnder = false;

let pak = false;
let highscore = 0;
let tijd = 0;
let chickenCount = 0;
let aantal = 42; //getal is nodig om te checken of vos een heg raakt  
let totaalL = aantal;
let totaalR = aantal;
let totaalB = aantal;
let totaalO = aantal;

let music;

function preload() {
  music = loadSound('music 2 fast.mp3');
}

function setup() {
  createCanvas(width, height);
  Speler1 = new speler(320, 375, 5, 170, 196, 101, 0, 192, 74, 188, 57, 157, 58, 2);
  blob = new kip(width - 175, height - 105, 5, 255, 255, 255, 1);
  blob2 = new kip(150, height - 105, 5, 255, 255, 255, 1);
  music.loop();
}

function draw() {

  if (menu) {
    startScreen();
  } 
  else if (uitleg) {
    uitlegScreen();
  }

  if (initGame == true) {
    heggenDeel1();
    heggenDeel2();
    heggenDeel4();
    heggenDeel5();
    heggenDeel6();
    heggenDeel7();
    heggenDeel8();
    heggenDeel9();

    Speler = new speler(68, 11, 2, 170, 196, 101, 0, 192, 74, 188, 57, 157, 58, 2);
    kipDeel1();
    kipDeel2();
    kipDeel3();
    kipDeel4();
    kipDeel5();
    kipDeel6();
    kipDeel7();
    kipDeel8();
    kipDeel9();
    //console.log('init true');

    menu = false;
    initGame = false;
    deel1 = true;
    deel2 = false;
    deel3 = false;
    deel4 = false;
    deel5 = false;
    deel6 = false;
    deel7 = false;
    deel8 = false;
    deel9 = false;
  }

  if (deel1 == true) {
    background(255, 231, 135);

    //switch van rechts
    if (tempLinks == true) {
      vanRechts();
    }

    //switch van onder
    if (tempBoven == true) {
      Speler.y = height - Speler.height / 2;
      tempBoven = false;
    }
    totaalL = aantal;
    totaalR = aantal;
    totaalO = aantal;
    totaalB = aantal;
    tekenHeggenDeel1();
    raaktGeenHeg();

    tekenKipDeel1();

    gameTekst();
    Speler.beweegSpeler();
    keyDown();

    //switch naar rechts

    if (deel1 == true && Speler.x > width - Speler.width / 2) {

      //console.log('nextLvl true');

      deel1 = false;
      deel2 = true;
      deel3 = false;
      deel4 = false;
      deel5 = false;
      deel6 = false;
      deel7 = false;
      deel8 = false;
      deel9 = false;

      tempRechts = true;
      tempLinks = false;
      tempBoven = false;
      tempOnder = false;
    }

    //switch naar onder    
    if (deel1 == true && Speler.y > height - 50) {

      //console.log('nextLvl true');

      deel1 = false;
      deel2 = false;
      deel3 = false;
      deel4 = true;
      deel5 = false;
      deel6 = false;
      deel7 = false;
      deel8 = false;
      deel9 = false;

      tempRechts = false;
      tempLinks = false;
      tempBoven = false;
      tempOnder = true;
    }
  }

  if (deel2 == true) {
    background(255, 231, 135);

    console.log('deel 2');

    //switch van onder
    if (tempBoven == true) {
      Speler.y = height - Speler.height / 2;
      tempBoven = false;
    }

    //switch van links
    if (tempRechts == true) {
      Speler.x = -Speler.width / 2;
      tempRechts = false;
    }

    //switch van rechts
    if (tempLinks == true) {
      Speler.x = width - Speler.width / 2;
      tempLinks = false;
    }
    totaalL = aantal;
    totaalR = aantal;
    totaalO = aantal;
    totaalB = aantal;
    tekenHeggenDeel2();
    raaktGeenHeg();

    tekenKipDeel2();

    gameTekst();
    Speler.beweegSpeler();
    keyDown();

    //switch naar onder    
    if (deel2 == true && Speler.y > height - Speler.height / 2) {

      deel1 = false;
      deel2 = false;
      deel3 = false;
      deel4 = false;
      deel5 = true;
      deel6 = false;
      deel7 = false;
      deel8 = false;
      deel9 = false;

      tempRechts = false;
      tempLinks = false;
      tempBoven = false;
      tempOnder = true;
    }

    //switch naar links
    if (deel2 == true && Speler.x < 0 - Speler.width / 2) {

      //console.log('nextLvl true');

      deel1 = true;
      deel2 = false;
      deel3 = false;
      deel4 = false;
      deel5 = false;
      deel6 = false;
      deel7 = false;
      deel8 = false;
      deel9 = false;

      tempRechts = false;
      tempLinks = true;
      tempBoven = false;
      tempOnder = false;
    }

    //switch naar rechts
    if (deel2 == true && Speler.x > width - Speler.width / 2) {

      //console.log('nextLvl true');

      deel1 = false;
      deel2 = false;
      deel3 = true;
      deel4 = false;
      deel5 = false;
      deel6 = false;
      deel7 = false;
      deel8 = false;
      deel9 = false;

      tempRechts = true;
      tempLinks = false;
      tempBoven = false;
      tempOnder = false;
    }
  }

  if (deel3 == true) {
    background(255, 231, 135);

    console.log('deel 3');

    //switch van onder
    if (tempBoven == true) {
      Speler.y = height - Speler.height / 2;
      tempBoven = false;
    }

    //switch van links
    if (tempRechts == true) {
      Speler.x = -Speler.width / 2;
      tempRechts = false;
    }

    tekenKipDeel3();

    gameTekst();
    Speler.beweegSpeler();
    keyDown();

    //switch naar onder    
    if (deel3 == true && Speler.y > height - Speler.height / 2) {

      //console.log('nextLvl true');

      deel1 = false;
      deel2 = false;
      deel3 = false;
      deel4 = false;
      deel5 = false;
      deel6 = true;
      deel7 = false;
      deel8 = false;
      deel9 = false;

      tempRechts = false;
      tempLinks = false;
      tempBoven = false;
      tempOnder = true;
    }

    //switch naar links
    if (deel3 == true && Speler.x < 0 - Speler.width / 2) {

      //console.log('nextLvl true');

      deel1 = false;
      deel2 = true;
      deel3 = false;
      deel4 = false;
      deel5 = false;
      deel6 = false;
      deel7 = false;
      deel8 = false;
      deel9 = false;

      tempRechts = false;
      tempLinks = true;
      tempBoven = false;
      tempOnder = false;
    }
  }

  if (deel4 == true) {
    background(255, 231, 135);

    console.log('deel 4');

    //switch van boven
    if (tempOnder == true) {
      Speler.y = -25;
      tempOnder = false;
    }

    //switch van onder
    if (tempBoven == true) {
      Speler.y = height - Speler.height / 2;
      tempBoven = false;
    }

    //switch van rechts
    if (tempLinks == true) {
      Speler.x = width - Speler.width / 2;
      tempLinks = false;
    }
    totaalL = aantal;
    totaalR = aantal;
    totaalO = aantal;
    totaalB = aantal;
    tekenHeggenDeel4()
    raaktGeenHeg();

    tekenKipDeel4();

    gameTekst();
    Speler.beweegSpeler();
    keyDown();


    //switch naar boven    
    if (deel4 == true && Speler.y < 0 - Speler.height / 2) {

      //console.log('nextLvl true');

      deel1 = true;
      deel2 = false;
      deel3 = false;
      deel4 = false;
      deel5 = false;
      deel6 = false;
      deel7 = false;
      deel8 = false;
      deel9 = false;

      tempRechts = false;
      tempLinks = false;
      tempBoven = true;
      tempOnder = false;
    }

    //switch naar onder    
    if (deel4 == true && Speler.y > height - Speler.height / 2) {

      //console.log('nextLvl true');

      deel1 = false;
      deel2 = false;
      deel3 = false;
      deel4 = false;
      deel5 = false;
      deel6 = false;
      deel7 = true;
      deel8 = false;
      deel9 = false;

      tempRechts = false;
      tempLinks = false;
      tempBoven = false;
      tempOnder = true;
    }

    //switch naar rechts
    if (deel4 == true && Speler.x > width - Speler.width / 2) {

      //console.log('nextLvl true');

      deel1 = false;
      deel2 = false;
      deel3 = false;
      deel4 = false;
      deel5 = true;
      deel6 = false;
      deel7 = false;
      deel8 = false;
      deel9 = false;

      tempRechts = true;
      tempLinks = false;
      tempBoven = false;
      tempOnder = false;
    }
  }

  if (deel5 == true) {
    background(255, 231, 135);

    console.log('deel5');

    //switch van boven
    if (tempOnder == true) {
      Speler.y = -Speler.height / 2
      tempOnder = false;
    }

    //switch van onder
    if (tempBoven == true) {
      Speler.y = height - Speler.height / 2;
      tempBoven = false;
    }

    //switch van links
    if (tempRechts == true) {
      Speler.x = -Speler.width / 2;
      tempRechts = false;
    }

    //switch van rechts
    if (tempLinks == true) {
      Speler.x = width - Speler.width / 2;
      tempLinks = false;
    }
    totaalL = aantal;
    totaalR = aantal;
    totaalO = aantal;
    totaalB = aantal;
    tekenHeggenDeel5();
    raaktGeenHeg();

    tekenKipDeel5();

    gameTekst();
    Speler.beweegSpeler();
    keyDown();

    //switch naar boven    
    if (deel5 == true && Speler.y < 0 - Speler.height / 2) {

      //console.log('nextLvl true');

      deel1 = false;
      deel2 = true;
      deel3 = false;
      deel4 = false;
      deel5 = false;
      deel6 = false;
      deel7 = false;
      deel8 = false;
      deel9 = false;

      tempRechts = false;
      tempLinks = false;
      tempBoven = true;
      tempOnder = false;
    }

    //switch naar onder    
    if (deel5 == true && Speler.y > height - Speler.height / 2) {

      //console.log('nextLvl true');

      deel1 = false;
      deel2 = false;
      deel3 = false;
      deel4 = false;
      deel5 = false;
      deel6 = false;
      deel7 = false;
      deel8 = true;
      deel9 = false;

      tempRechts = false;
      tempLinks = false;
      tempBoven = false;
      tempOnder = true;
    }

    //switch naar rechts
    if (deel5 == true && Speler.x > width - Speler.width / 2) {

      //console.log('nextLvl true');

      deel1 = false;
      deel2 = false;
      deel3 = false;
      deel4 = false;
      deel5 = false;
      deel6 = true;
      deel7 = false;
      deel8 = false;
      deel9 = false;

      tempRechts = true;
      tempLinks = false;
      tempBoven = false;
      tempOnder = false;
    }

    //switch naar links
    if (deel5 == true && Speler.x < 0 - Speler.width / 2) {

      //console.log('nextLvl true');

      deel1 = false;
      deel2 = false;
      deel3 = false;
      deel4 = true;
      deel5 = false;
      deel6 = false;
      deel7 = false;
      deel8 = false;
      deel9 = false;

      tempRechts = false;
      tempLinks = true;
      tempBoven = false;
      tempOnder = false;
    }

  }

  if (deel6 == true) {
    background(255, 231, 135);

    console.log('deel 6');

    //switch van boven
    if (tempOnder == true) {
      Speler.y = -Speler.height / 2
      tempOnder = false;
    }

    //switch van onder
    if (tempBoven == true) {
      Speler.y = height - Speler.height / 2;
      tempBoven = false;
    }

    //switch van links
    if (tempRechts == true) {
      Speler.x = -Speler.width / 2;
      tempRechts = false;
    }
    totaalL = aantal;
    totaalR = aantal;
    totaalO = aantal;
    totaalB = aantal;
    tekenHeggenDeel6();
    raaktGeenHeg();
    
    gameTekst();
    Speler.beweegSpeler();
    keyDown();

    tekenKipDeel6();

    //switch naar boven    
    if (deel6 == true && Speler.y < 0 - Speler.height / 2) {

      //console.log('nextLvl true');

      deel1 = false;
      deel2 = false;
      deel3 = true;
      deel4 = false;
      deel5 = false;
      deel6 = false;
      deel7 = false;
      deel8 = false;
      deel9 = false;

      tempRechts = false;
      tempLinks = false;
      tempBoven = true;
      tempOnder = false;
    }

    //switch naar onder    
    if (deel6 == true && Speler.y > height - Speler.height / 2) {

      //console.log('nextLvl true');

      deel1 = false;
      deel2 = false;
      deel3 = false;
      deel4 = false;
      deel5 = false;
      deel6 = false;
      deel7 = false;
      deel8 = false;
      deel9 = true;

      tempRechts = false;
      tempLinks = false;
      tempBoven = false;
      tempOnder = true;
    }

    //switch naar links
    if (deel6 == true && Speler.x < 0 - Speler.width / 2) {

      //console.log('nextLvl true');

      deel1 = false;
      deel2 = false;
      deel3 = false;
      deel4 = false;
      deel5 = true;
      deel6 = false;
      deel7 = false;
      deel8 = false;
      deel9 = false;

      tempRechts = false;
      tempLinks = true;
      tempBoven = false;
      tempOnder = false;
    }

  }

  if (deel7 == true) {
    background(255, 231, 135);

    console.log('deel 7');

    //switch van boven
    if (tempOnder == true) {
      Speler.y = -Speler.height / 2
      tempOnder = false;
    }

    //switch van rechts
    if (tempLinks == true) {
      Speler.x = width - Speler.width / 2;
      tempLinks = false;
    }
    totaalL = aantal;
    totaalR = aantal;
    totaalO = aantal;
    totaalB = aantal;
    tekenHeggenDeel7();
    raaktGeenHeg();

    tekenKipDeel7();

    gameTekst();
    Speler.beweegSpeler();
    keyDown();


    //switch naar boven    
    if (deel7 == true && Speler.y < 0 - Speler.height / 2) {

      //console.log('nextLvl true');

      deel1 = false;
      deel2 = false;
      deel3 = false;
      deel4 = true;
      deel5 = false;
      deel6 = false;
      deel7 = false;
      deel8 = false;
      deel9 = false;

      tempRechts = false;
      tempLinks = false;
      tempBoven = true;
      tempOnder = false;
    }

    //switch naar rechts
    if (deel7 == true && Speler.x > width - Speler.width / 2) {

      //console.log('nextLvl true');

      deel1 = false;
      deel2 = false;
      deel3 = false;
      deel4 = false;
      deel5 = false;
      deel6 = false;
      deel7 = false;
      deel8 = true;
      deel9 = false;

      tempRechts = true;
      tempLinks = false;
      tempBoven = false;
      tempOnder = false;
    }

  }

  if (deel8 == true) {
    background(255, 231, 135);

    console.log('deel 8');

    //switch van boven
    if (tempOnder == true) {
      Speler.y = -Speler.height / 2
      tempOnder = false;
    }

    //switch van links
    if (tempRechts == true) {
      Speler.x = -Speler.width / 2;
      tempRechts = false;
    }

    //switch van rechts
    if (tempLinks == true) {
      Speler.x = width - Speler.width / 2;
      tempLinks = false;
    }
    totaalL = aantal;
    totaalR = aantal;
    totaalO = aantal;
    totaalB = aantal;
    tekenHeggenDeel8();
    raaktGeenHeg();

    tekenKipDeel8();

    gameTekst();
    Speler.beweegSpeler();
    keyDown();


    //switch naar boven    
    if (deel8 == true && Speler.y < 0 - Speler.height / 2) {

      //console.log('nextLvl true');

      deel1 = false;
      deel2 = false;
      deel3 = false;
      deel4 = false;
      deel5 = true;
      deel6 = false;
      deel7 = false;
      deel8 = false;
      deel9 = false;

      tempRechts = false;
      tempLinks = false;
      tempBoven = true;
      tempOnder = false;
    }

    //switch naar rechts
    if (deel8 == true && Speler.x > width - Speler.width / 2) {

      //console.log('nextLvl true');

      deel1 = false;
      deel2 = false;
      deel3 = false;
      deel4 = false;
      deel5 = false;
      deel6 = false;
      deel7 = false;
      deel8 = false;
      deel9 = true;

      tempRechts = true;
      tempLinks = false;
      tempBoven = false;
      tempOnder = false;
    }

    //switch naar links
    if (deel8 == true && Speler.x < 0 - Speler.width / 2) {

      //console.log('nextLvl true');

      deel1 = false;
      deel2 = false;
      deel3 = false;
      deel4 = false;
      deel5 = false;
      deel6 = false;
      deel7 = true;
      deel8 = false;
      deel9 = false;

      tempRechts = false;
      tempLinks = true;
      tempBoven = false;
      tempOnder = false;
    }

  }

  if (deel9 == true) {
    background(255, 231, 135);

    console.log('deel 9');

    //switch van boven
    if (tempOnder == true) {
      Speler.y = -Speler.height / 2
      tempOnder = false;
    }

    //switch van links
    if (tempRechts == true) {
      Speler.x = -Speler.width / 2;
      tempRechts = false;
    }
    totaalL = aantal;
    totaalR = aantal;
    totaalO = aantal;
    totaalB = aantal;
    tekenHeggenDeel9();
    raaktGeenHeg();

    tekenKipDeel9();

    gameTekst();
    Speler.beweegSpeler();
    keyDown();

    endScreen();

    //switch naar boven    
    if (deel9 == true && Speler.y < 0 - Speler.height / 2) {

      //console.log('nextLvl true');

      deel1 = false;
      deel2 = false;
      deel3 = false;
      deel4 = false;
      deel5 = false;
      deel6 = true;
      deel7 = false;
      deel8 = false;
      deel9 = false;

      tempRechts = false;
      tempLinks = false;
      tempBoven = true;
      tempOnder = false;
    }

    //switch naar links
    if (deel9 == true && Speler.x < 0 - Speler.width / 2) {

      //console.log('nextLvl true');

      deel1 = false;
      deel2 = false;
      deel3 = false;
      deel4 = false;
      deel5 = false;
      deel6 = false;
      deel7 = false;
      deel8 = true;
      deel9 = false;

      tempRechts = false;
      tempLinks = true;
      tempBoven = false;
      tempOnder = false;
    }
  }
}

function vanRechts() {
  Speler.x = width - Speler.width / 2;
  Speler.xLB4 = width - Speler.width / 2 + Speler.width * 4;
  Speler.xLB5 = width - Speler.width / 2 + Speler.width * 4;
  Speler.xLB6 = width - Speler.width / 2 + Speler.width * 4;
  Speler.xRB4 = width - Speler.width / 2 + Speler.width * 10;
  Speler.xRB5 = width - Speler.width / 2 + Speler.width * 10;
  Speler.xRB6 = width - Speler.width / 2 + Speler.width * 10;
  tempLinks = false;
}

function vanLinks() {
  Speler.x = -Speler.width / 2;
  Speler.xLB1 = -Speler.width / 2 - Speler.width * 6;
  Speler.xLB2 = -Speler.width / 2 - Speler.width * 6;
  Speler.xLB3 = -Speler.width / 2 - Speler.width * 6;
  Speler.xRB1 = -Speler.width / 2;
  Speler.xRB2 = -Speler.width / 2;
  Speler.xRB3 = -Speler.width / 2;
  tempRechts = false;
}

function vanOnder() {
  Speler.y = height - Speler.height / 2;
  Speler.yLB1 = height - Speler.height / 2 + Speler.width * 39.5;
  tSpelerhis.yRB1 = height - Speler.height / 2 + Speler.width * 39.5;
  tempBoven = false;

}

function vanBoven() {
  Speler.y = -Speler.height / 2;
  Speler.yLB1 = -Speler.height / 2 + this.width * 39.5;
  Speler.yRB1 = -Speler.height / 2 + this.width * 39.5;
  tempOnder = false;
}

function keyPressed() {
  if (keyCode === 39) {
    ding = Speler.tekenSpelerRZ();
  } else if (keyCode === 37) {
    ding = Speler.tekenSpelerLZ();
  } else if (keyCode === 38) {
    ding = Speler.tekenSpelerA();
  } else if (keyCode === 40) {
    ding = Speler.tekenSpelerV();
  } else {
    ding = Speler.tekenSpelerV();
  }
}

function keyDown() {
  let ding; //zorgt ervoor dat vos zelfde kant op blijft kijken als hij liep
  if (keyIsDown(39)) {
    Speler.tekenSpelerRZ();
  } else if (keyIsDown(37)) {
    Speler.tekenSpelerLZ();
  } else if (keyIsDown(38)) {
    Speler.tekenSpelerA();
  } else if (keyIsDown(40)) {
    Speler.tekenSpelerV();
  } else {
    keyPressed();
    ding;
  }
}

function startScreen() {
  background(59, 28, 50);
  //console.log('main true');

  stroke(202, 5, 77);
  strokeWeight(10);
  fill(255, 231, 135);
  rect(25, 50, 612, 90);
  rect(42, 160, 582, 60);
  rect(142, 240, 422, 60);

  stroke(15, 107, 70);
  fill(65, 157, 120);
  textStyle(BOLD);
  strokeWeight(5);
  textSize(50);
  text("HET KIPPENLABYRINT", 56, 110);
  strokeWeight(3);
  textSize(25);
  text("DOOR TEUN HEERZE EN INGE WENNEKER", 72, 200);
  text("DRUK OP A OM TE BEGINNEN", 167, 280);

  Speler1.tekenSpelerV();
  blob.tekenKip();
  blob2.tekenKip();

  if (keyIsDown(65)) {
    menu = false;
    deel1 = false;
    initGame = false;
    uitleg = true;

    //console.log('start key true');
  }
}

function uitlegScreen() {
  background(59, 28, 50);

  stroke(202, 5, 77);
  strokeWeight(10);
  fill(255, 231, 135);
  rect(25, 50, 612, 200);

  stroke(15, 107, 70);
  strokeWeight(3);
  textSize(25);
  fill(65, 157, 120);
  textStyle(BOLD);
  text("Het is al bijna avond en Meneer Vos heeft nog geen avondeten. Help hem zoveel mogelijk kippen te vangen en op tijd thuis te zijn voor het avondeten.", 56, 70, 576, 230);
  text("Druk op B om te beginnen.", 56, 220);

  Speler1.tekenSpelerV();
  blob.tekenKip();
  blob2.tekenKip();

  if (keyIsDown(66)) {
    menu = false;
    deel1 = false;
    initGame = true;
    uitleg = false;

    //console.log('start key true');
  }
}

function endScreen() {
  if (Speler.y >= height) {
    background(59, 28, 50);
    eind = true;
    tijd -= deltaTime / 1000;
    score = chickenCount * 100 / tijd * 10;
    if (score > highscore) {
      highscore = score.toFixed(2)
      storeItem('highscore', highscore);
    } else {
      highscore = getItem('highscore');
    }
    Speler.spd = 0

    stroke(202, 5, 77);
    strokeWeight(10);
    fill(255, 231, 135);
    rect(25, 20, 612, 90);
    rect(25, 130, 612, 90);
    rect(25, 240, 612, 90);
    rect(25, 350, 612, 90);
    rect(25, 460, 612, 130);

    stroke(15, 107, 70);
    strokeWeight(3);
    textSize(30);
    fill(65, 157, 120);
    textStyle(BOLD);
    text("Tijd: " + tijd.toFixed(2) + ' sec.', 56, 80);
    text("Aantal kippen: " + chickenCount, 56, 190);
    text("Score: " + score.toFixed(2), 56, 300);
    text("Highscore: " + highscore, 56, 410);
    text("Druk op A voor de speluitleg", 45, 520);
    text("Druk op B om meteen te spelen", 45, 560);

    if (keyIsDown(65)) {
      menu = false;
      deel1 = false;
      initGame = false;
      uitleg = true;
      tijd -= tijd;
      chickenCount -= chickenCount;
      //console.log('start key true');
    }
    if (keyIsDown(66)) {
      menu = false;
      deel1 = false;
      initGame = true;
      uitleg = false;
      tijd -= tijd;
      chickenCount -= chickenCount;
      //console.log('start key true');
    }
  }
}

function raaktGeenHeg() {
  if (totaalL == aantal && totaalR == aantal && totaalO == aantal && totaalB == aantal) {
    Speler.spdO = Speler.spd
    Speler.spdR = Speler.spd;
    Speler.spdL = Speler.spd;
    Speler.spdB = Speler.spd;
  } else if (totaalL != aantal && totaalR == aantal && totaalO != aantal && totaalB == aantal) {
    Speler.spdO = 0;
    Speler.spdR = Speler.spd;
    Speler.spdL = 0;
    Speler.spdB = Speler.spd;
  } else if (totaalL != aantal && totaalR == aantal && totaalO == aantal && totaalB != aantal) {
    Speler.spdO = Speler.spd;
    Speler.spdR = Speler.spd;
    Speler.spdL = 0;
    Speler.spdB = 0;
  } else if (totaalL == aantal && totaalR != aantal && totaalO != aantal && totaalB == aantal) {
    Speler.spdO = 0;
    Speler.spdR = 0;
    Speler.spdL = Speler.spd;
    Speler.spdB = Speler.spd;
  } else if (totaalL == aantal && totaalR != aantal && totaalO == aantal && totaalB != aantal) {
    Speler.spdO = Speler.spd;
    Speler.spdR = 0;
    Speler.spdL = Speler.spd;
    Speler.spdB = 0;
  }
}

function gameTekst() {
  stroke(59, 28, 50);
  strokeWeight(3);
  textSize(21);
  fill(202, 5, 77);
  textStyle(BOLD);
  text("Aantal kippen: " + chickenCount, width - 180, 32);

  tijd += deltaTime / 1000;
  stroke(59, 28, 50);
  strokeWeight(3);
  textSize(21);
  fill(202, 5, 77);
  text("Tijd: " + tijd.toFixed(2) + " sec", 22, 32);
  
  if (deel9 == true){
    stroke(59, 28, 50);
    strokeWeight(3);
    textSize(21);
    fill(202, 5, 77);
    textStyle(BOLD);
    text("U", 578, 306);
    text("I", 582, 327);
    text("T", 578, 348);
    text("G", 578, 369);
    text("A", 578, 390);
    text("N", 578, 411);
    text("G", 578, 431);
  }
}

function heggenDeel1() {
  HegV1 = new heg(0, 0);
  HegV2 = new heg(0, 51);
  HegV3 = new heg(0, 51 * 2);
  HegV4 = new heg(0, 51 * 3);
  HegV5 = new heg(0, 51 * 4);
  HegV6 = new heg(0, 51 * 5);
  HegV7 = new heg(0, 51 * 6);
  HegV8 = new heg(0, 51 * 7);
  HegV9 = new heg(0, 51 * 8);
  HegV10 = new heg(0, 51 * 9);
  HegV11 = new heg(0, 51 * 10);

  HegV13 = new heg(51 * 2, 0);
  HegV22 = new heg(51 * 8, 0);
  HegV36 = new heg(51 * 12, 0);

  HegV14 = new heg(0, 51);
  HegH27 = new heg(51 * 2, 51);
  HegV15 = new heg(51 * 8, 51);
  HegV29 = new heg(51 * 12, 51);

  HegH1 = new heg(51, 0);
  HegH2 = new heg(51 * 3, 0);
  HegH3 = new heg(51 * 4, 0);
  HegH4 = new heg(51 * 5, 0);
  HegH5 = new heg(51 * 6, 0);
  HegH6 = new heg(51 * 7, 0);
  HegH24 = new heg(51 * 9, 0);
  HegH25 = new heg(51 * 10, 0);
  HegH26 = new heg(51 * 11, 0);

  HegV16 = new heg(51 * 4, 51 * 2);
  HegV17 = new heg(51 * 6, 51 * 2);
  HegV18 = new heg(51 * 8, 51 * 2);
  HegV19 = new heg(51 * 10, 51 * 2);
  HegV20 = new heg(51 * 12, 51 * 2);

  HegV21 = new heg(51 * 6, 51 * 3);
  HegV23 = new heg(51 * 10, 51 * 3);
  HegV24 = new heg(51 * 12, 51 * 3);
  HegH7 = new heg(51, 51 * 3);
  HegH28 = new heg(51 * 2, 51 * 3);
  HegH8 = new heg(51 * 3, 51 * 3);
  HegH29 = new heg(51 * 4, 51 * 3);
  HegH30 = new heg(51 * 8, 51 * 3);

  HegV25 = new heg(51 * 6, 51 * 4);
  HegV26 = new heg(51 * 10, 51 * 4);
  HegV27 = new heg(51 * 12, 51 * 4);

  HegH9 = new heg(51 * 3, 51 * 5);
  HegH31 = new heg(51 * 4, 51 * 5);
  HegH10 = new heg(51 * 5, 51 * 5);
  HegH11 = new heg(51 * 7, 51 * 5);
  HegH32 = new heg(51 * 8, 51 * 5);
  HegH12 = new heg(51 * 9, 51 * 5);
  HegH33 = new heg(51 * 10, 51 * 5);
  HegV12 = new heg(51 * 2, 51 * 5);
  HegV28 = new heg(51 * 12, 51 * 5);
  HegV33 = new heg(51 * 6, 51 * 5);

  HegV30 = new heg(51 * 2, 51 * 6);
  HegV31 = new heg(51 * 6, 51 * 6);
  HegV32 = new heg(51 * 12, 51 * 6);

  HegV34 = new heg(51 * 2, 51 * 7);
  HegV35 = new heg(51 * 4, 51 * 7);
  HegV37 = new heg(51 * 8, 51 * 7);
  HegH34 = new heg(51 * 6, 51 * 7);
  HegH14 = new heg(51 * 10, 51 * 7);
  HegH13 = new heg(51 * 11, 51 * 7);
  HegH35 = new heg(51 * 12, 51 * 7);

  HegV38 = new heg(51 * 2, 51 * 8);
  HegV39 = new heg(51 * 4, 51 * 8);
  HegV41 = new heg(51 * 8, 51 * 8);

  HegV40 = new heg(51 * 8, 51 * 9);
  HegV45 = new heg(51 * 6, 51 * 9);
  HegV46 = new heg(51 * 12, 51 * 9);
  HegH21 = new heg(51 * 2, 51 * 9);
  HegH36 = new heg(51 * 3, 51 * 9);
  HegH15 = new heg(51 * 4, 51 * 9);
  HegH37 = new heg(51 * 5, 51 * 9);
  HegH17 = new heg(51 * 9, 51 * 9);
  HegH16 = new heg(51 * 10, 51 * 9);
  HegH39 = new heg(51 * 11, 51 * 9);

  HegV42 = new heg(51 * 6, 51 * 10);
  HegV43 = new heg(51 * 8, 51 * 10);
  HegV44 = new heg(51 * 12, 51 * 10);

  HegV47 = new heg(51 * 10, 51 * 11);
  HegV48 = new heg(51 * 12, 51 * 11);
  HegH18 = new heg(0, 51 * 11);
  HegH40 = new heg(51, 51 * 11);
  HegH19 = new heg(51 * 2, 51 * 11);
  HegH22 = new heg(51 * 3, 51 * 11);
  HegH41 = new heg(51 * 4, 51 * 11);
  HegH20 = new heg(51 * 6, 51 * 11);
  HegH23 = new heg(51 * 7, 51 * 11);
  HegH38 = new heg(51 * 8, 51 * 11);
}

function tekenHeggenDeel1() {
  HegH1.tekenHheg();
  HegH2.tekenHheg();
  HegH3.tekenHheg();
  HegH4.tekenHheg();
  HegH5.tekenHheg();
  HegH6.tekenHheg();
  HegH7.tekenHheg();
  HegH8.tekenHheg();
  HegH9.tekenHheg();
  HegH10.tekenHheg();
  HegH11.tekenHheg();
  HegH12.tekenHheg();
  HegH13.tekenHheg();
  HegH14.tekenHheg();
  HegH15.tekenHheg();
  HegH16.tekenHheg();
  HegH17.tekenHheg();
  HegH18.tekenHheg();
  HegH19.tekenHheg();
  HegH20.tekenHheg();
  HegH21.tekenHheg();
  HegH22.tekenHheg();
  HegH23.tekenHheg();
  HegH24.tekenHheg();
  HegH25.tekenHheg();
  HegH26.tekenHheg();
  HegH27.tekenHheg();
  HegH28.tekenHheg();
  HegH29.tekenHheg();
  HegH30.tekenHheg();
  HegH31.tekenHheg();
  HegH32.tekenHheg();
  HegH33.tekenHheg();
  HegH34.tekenHheg();
  HegH35.tekenHheg();
  HegH36.tekenHheg();
  HegH37.tekenHheg();
  HegH38.tekenHheg();
  HegH39.tekenHheg();
  HegH40.tekenHheg();
  HegH41.tekenHheg();


  HegV1.tekenVheg();
  HegV2.tekenVheg();
  HegV3.tekenVheg();
  HegV4.tekenVheg();
  HegV5.tekenVheg();
  HegV6.tekenVheg();
  HegV7.tekenVheg();
  HegV8.tekenVheg();
  HegV9.tekenVheg();
  HegV10.tekenVheg();
  HegV11.tekenVheg();
  HegV12.tekenVheg();
  HegV13.tekenVheg();
  HegV14.tekenVheg();
  HegV15.tekenVheg();
  HegV16.tekenVheg();
  HegV17.tekenVheg();
  HegV18.tekenVheg();
  HegV19.tekenVheg();
  HegV20.tekenVheg();
  HegV21.tekenVheg();
  HegV22.tekenVheg();
  HegV23.tekenVheg();
  HegV24.tekenVheg();
  HegV25.tekenVheg();
  HegV26.tekenVheg();
  HegV27.tekenVheg();
  HegV28.tekenVheg();
  HegV29.tekenVheg();
  HegV30.tekenVheg();
  HegV31.tekenVheg();
  HegV32.tekenVheg();
  HegV33.tekenVheg();
  HegV34.tekenVheg();
  HegV35.tekenVheg();
  HegV36.tekenVheg();
  HegV37.tekenVheg();
  HegV38.tekenVheg();
  HegV39.tekenVheg();
  HegV40.tekenVheg();
  HegV41.tekenVheg();
  HegV42.tekenVheg();
  HegV43.tekenVheg();
  HegV44.tekenVheg();
  HegV45.tekenVheg();
  HegV46.tekenVheg();
  HegV47.tekenVheg();
  HegV48.tekenVheg();
}

function heggenDeel2() {
  HegV201 = new heg(0, 0);
  HegV202 = new heg(0, 51);
  HegV203 = new heg(0, 51 * 2);
  HegV204 = new heg(0, 51 * 3);
  HegV205 = new heg(0, 51 * 4);
  HegV206 = new heg(0, 51 * 5);
  HegV207 = new heg(0, 51 * 6);
  HegV208 = new heg(0, 51 * 9);
  HegV209 = new heg(0, 51 * 10)
  HegV210 = new heg(0, 51 * 11);
  HegV211 = new heg(0, 51 * 12);
  HegH201 = new heg(0, 51 * 7);

  HegH202 = new heg(51, 0);
  HegH203 = new heg(51 * 2, 0);
  HegH204 = new heg(51 * 3, 0);
  HegH205 = new heg(51 * 4, 0);
  HegH206 = new heg(51 * 5, 0);
  HegH207 = new heg(51 * 6, 0);
  HegH208 = new heg(51 * 7, 0);
  HegH209 = new heg(51 * 9, 0);
  HegH210 = new heg(51 * 10, 0);
  HegH211 = new heg(51 * 11, 0);
  HegV212 = new heg(51 * 8, 0);
  HegV213 = new heg(51 * 12, 0);

  HegV214 = new heg(51 * 8, 51);
  HegV215 = new heg(51 * 12, 51);

  HegH212 = new heg(51 * 2, 51 * 2);
  HegH213 = new heg(51 * 3, 51 * 2);
  HegH214 = new heg(51 * 4, 51 * 2);
  HegH215 = new heg(51 * 5, 51 * 2);
  HegV216 = new heg(51 * 6, 51 * 2);
  HegV217 = new heg(51 * 8, 51 * 2);
  HegV218 = new heg(51 * 10, 51 * 2);
  HegV219 = new heg(51 * 12, 51 * 2);

  HegV220 = new heg(51 * 6, 51 * 3);
  HegV221 = new heg(51 * 8, 51 * 3);
  HegV222 = new heg(51 * 10, 51 * 3);
  HegV223 = new heg(51 * 12, 51 * 3);

  HegH216 = new heg(51, 51 * 4);
  HegH217 = new heg(51 * 2, 51 * 4);
  HegH218 = new heg(51 * 3, 51 * 4);
  HegH219 = new heg(51 * 8, 51 * 4);
  HegV224 = new heg(51 * 4, 51 * 4);
  HegV225 = new heg(51 * 6, 51 * 4);
  HegV226 = new heg(51 * 10, 51 * 4);
  HegV227 = new heg(51 * 12, 51 * 4);

  HegV228 = new heg(51 * 4, 51 * 5);
  HegV229 = new heg(51 * 6, 51 * 5);
  HegV230 = new heg(51 * 10, 51 * 5);
  HegV231 = new heg(51 * 12, 51 * 5);

  HegH220 = new heg(51 * 7, 51 * 6);
  HegH221 = new heg(51 * 8, 51 * 6);
  HegH222 = new heg(51 * 9, 51 * 6);
  HegV232 = new heg(51 * 2, 51 * 6);
  HegV233 = new heg(51 * 4, 51 * 6);
  HegV234 = new heg(51 * 6, 51 * 6);
  HegV235 = new heg(51 * 10, 51 * 6);
  HegV236 = new heg(51 * 12, 51 * 6);

  HegV242 = new heg(51 * 2, 51 * 7);
  HegV243 = new heg(51 * 6, 51 * 7);
  HegV245 = new heg(51 * 12, 51 * 7);
  HegH223 = new heg(51 * 4, 51 * 7);
  HegH224 = new heg(51 * 10, 51 * 7);

  HegV246 = new heg(51 * 2, 51 * 8);
  HegV244 = new heg(51 * 8, 51 * 8);
  HegV247 = new heg(51 * 6, 51 * 8);
  HegV249 = new heg(51 * 12, 51 * 8);

  HegH225 = new heg(51, 51 * 9);
  HegH226 = new heg(51 * 2, 51 * 9);
  HegH227 = new heg(51 * 3, 51 * 9);
  HegH228 = new heg(51 * 4, 51 * 9);
  HegH229 = new heg(51 * 5, 51 * 9);
  HegH230 = new heg(51 * 6, 51 * 9);
  HegH231 = new heg(51 * 9, 51 * 9);
  HegH232 = new heg(51 * 10, 51 * 9);
  HegH233 = new heg(51 * 11, 51 * 9);
  HegV237 = new heg(51 * 8, 51 * 9);
  HegV248 = new heg(51 * 12, 51 * 9);

  HegV240 = new heg(51 * 8, 51 * 10);
  HegV241 = new heg(51 * 12, 51 * 10);

  HegH234 = new heg(51 * 2, 51 * 11);
  HegH235 = new heg(51 * 3, 51 * 11);
  HegH236 = new heg(51 * 4, 51 * 11);
  HegH237 = new heg(51 * 5, 51 * 11);
  HegH238 = new heg(51 * 6, 51 * 11);
  HegH239 = new heg(51 * 7, 51 * 11);
  HegH240 = new heg(51 * 8, 51 * 11);
  HegV238 = new heg(51 * 10, 51 * 11);
  HegV239 = new heg(51 * 12, 51 * 11);
}

function tekenHeggenDeel2() {
  HegH201.tekenHheg();
  HegH202.tekenHheg();
  HegH203.tekenHheg();
  HegH204.tekenHheg();
  HegH205.tekenHheg();
  HegH206.tekenHheg();
  HegH207.tekenHheg();
  HegH208.tekenHheg();
  HegH209.tekenHheg();
  HegH210.tekenHheg();
  HegH211.tekenHheg();
  HegH212.tekenHheg();
  HegH213.tekenHheg();
  HegH214.tekenHheg();
  HegH215.tekenHheg();
  HegH216.tekenHheg();
  HegH217.tekenHheg();
  HegH218.tekenHheg();
  HegH219.tekenHheg();
  HegH220.tekenHheg();
  HegH221.tekenHheg();
  HegH222.tekenHheg();
  HegH223.tekenHheg();
  HegH224.tekenHheg();
  HegH225.tekenHheg();
  HegH226.tekenHheg();
  HegH227.tekenHheg();
  HegH228.tekenHheg();
  HegH229.tekenHheg();
  HegH230.tekenHheg();
  HegH231.tekenHheg();
  HegH232.tekenHheg();
  HegH233.tekenHheg();
  HegH234.tekenHheg();
  HegH235.tekenHheg();
  HegH236.tekenHheg();
  HegH237.tekenHheg();
  HegH238.tekenHheg();
  HegH239.tekenHheg();
  HegH240.tekenHheg();


  HegV201.tekenVheg();
  HegV202.tekenVheg();
  HegV203.tekenVheg();
  HegV204.tekenVheg();
  HegV205.tekenVheg();
  HegV206.tekenVheg();
  HegV207.tekenVheg();
  HegV208.tekenVheg();
  HegV209.tekenVheg();
  HegV210.tekenVheg();
  HegV211.tekenVheg();
  HegV212.tekenVheg();
  HegV213.tekenVheg();
  HegV214.tekenVheg();
  HegV215.tekenVheg();
  HegV216.tekenVheg();
  HegV217.tekenVheg();
  HegV218.tekenVheg();
  HegV219.tekenVheg();
  HegV220.tekenVheg();
  HegV221.tekenVheg();
  HegV222.tekenVheg();
  HegV223.tekenVheg();
  HegV224.tekenVheg();
  HegV225.tekenVheg();
  HegV226.tekenVheg();
  HegV227.tekenVheg();
  HegV228.tekenVheg();
  HegV229.tekenVheg();
  HegV230.tekenVheg();
  HegV231.tekenVheg();
  HegV232.tekenVheg();
  HegV233.tekenVheg();
  HegV234.tekenVheg();
  HegV235.tekenVheg();
  HegV236.tekenVheg();
  HegV237.tekenVheg();
  HegV238.tekenVheg();
  HegV239.tekenVheg();
  HegV240.tekenVheg();
  HegV241.tekenVheg();
  HegV242.tekenVheg();
  HegV243.tekenVheg();
  HegV244.tekenVheg();
  HegV245.tekenVheg();
  HegV246.tekenVheg();
  HegV247.tekenVheg();
  HegV248.tekenVheg();
  HegV249.tekenVheg();
}

function heggenDeel4() {
  HegV401 = new heg(0, 0);
  HegV402 = new heg(0, 51);
  HegV403 = new heg(0, 51 * 2);
  HegV404 = new heg(0, 51 * 3);
  HegV405 = new heg(0, 51 * 4);
  HegV406 = new heg(0, 51 * 5);
  HegV407 = new heg(0, 51 * 6);
  HegV408 = new heg(0, 51 * 7);
  HegV409 = new heg(0, 51 * 8);
  HegV410 = new heg(0, 51 * 9);
  HegV411 = new heg(0, 51 * 10);
  HegV454 = new heg(0, 51 * 11);

  HegH401 = new heg(51, 0);
  HegH402 = new heg(51 * 2, 0);
  HegH403 = new heg(51 * 3, 0);
  HegV412 = new heg(51 * 4, 0);
  HegH404 = new heg(51 * 6, 0);
  HegH405 = new heg(51 * 7, 0);
  HegV413 = new heg(51 * 8, 0);
  HegV414 = new heg(51 * 10, 0);
  HegV415 = new heg(51 * 12, 0);

  HegV416 = new heg(51 * 4, 51);
  HegV417 = new heg(51 * 8, 51);
  HegV418 = new heg(51 * 10, 51);
  HegV419 = new heg(51 * 12, 51);

  HegH406 = new heg(51 * 4, 51 * 2);
  HegH407 = new heg(51 * 5, 51 * 2);
  HegH408 = new heg(51 * 8, 51 * 2);
  HegV420 = new heg(51 * 2, 51 * 2);
  HegV421 = new heg(51 * 6, 51 * 2);
  HegV422 = new heg(51 * 10, 51 * 2);
  HegV423 = new heg(51 * 12, 51 * 2);

  HegV424 = new heg(51 * 2, 51 * 3);
  HegV425 = new heg(51 * 6, 51 * 3);
  HegV426 = new heg(51 * 10, 51 * 3);
  HegV427 = new heg(51 * 12, 51 * 3);

  HegH409 = new heg(51 * 2, 51 * 4);
  HegH410 = new heg(51 * 3, 51 * 4);
  HegH411 = new heg(51 * 7, 51 * 4);
  HegH412 = new heg(51 * 8, 51 * 4);
  HegH413 = new heg(51 * 9, 51 * 4);
  HegV428 = new heg(51 * 4, 51 * 4);
  HegV429 = new heg(51 * 6, 51 * 4);
  HegV430 = new heg(51 * 10, 51 * 4);
  HegV431 = new heg(51 * 12, 51 * 4);

  HegV432 = new heg(51 * 4, 51 * 5);
  HegV433 = new heg(51 * 6, 51 * 5);
  HegV434 = new heg(51 * 10, 51 * 5);
  HegV435 = new heg(51 * 12, 51 * 5);

  HegH414 = new heg(51, 51 * 6);
  HegH415 = new heg(51 * 2, 51 * 6);
  HegH416 = new heg(51 * 6, 51 * 6);
  HegV436 = new heg(51 * 4, 51 * 6);
  HegV437 = new heg(51 * 8, 51 * 6);
  HegV438 = new heg(51 * 10, 51 * 6);
  HegV439 = new heg(51 * 12, 51 * 6);

  HegV440 = new heg(51 * 4, 51 * 7);
  HegV441 = new heg(51 * 8, 51 * 7);
  HegV442 = new heg(51 * 10, 51 * 7);

  HegH417 = new heg(51 * 2, 51 * 8);
  HegH418 = new heg(51 * 3, 51 * 8);
  HegH419 = new heg(51 * 4, 51 * 8);
  HegH420 = new heg(51 * 5, 51 * 8);
  HegH421 = new heg(51 * 7, 51 * 8);
  HegH422 = new heg(51 * 8, 51 * 8);
  HegH423 = new heg(51 * 11, 51 * 8);
  HegH424 = new heg(51 * 12, 51 * 8);
  HegV443 = new heg(51 * 6, 51 * 8);
  HegV444 = new heg(51 * 10, 51 * 8);

  HegV445 = new heg(51 * 6, 51 * 9);
  HegV446 = new heg(51 * 10, 51 * 9);

  HegH425 = new heg(51, 51 * 10);
  HegH426 = new heg(51 * 2, 51 * 10);
  HegH427 = new heg(51 * 3, 51 * 10);
  HegH428 = new heg(51 * 4, 51 * 10);
  HegV447 = new heg(51 * 6, 51 * 10);
  HegV448 = new heg(51 * 8, 51 * 10);
  HegV449 = new heg(51 * 10, 51 * 10);
  HegV450 = new heg(51 * 12, 51 * 10);

  HegV451 = new heg(51 * 6, 51 * 11);
  HegV452 = new heg(51 * 8, 51 * 11);
  HegV453 = new heg(51 * 12, 51 * 11);
  HegV455 = new heg(51 * 10, 51 * 11);

  HegH429 = new heg(51 * 2, 610);
  HegH430 = new heg(51 * 3, 610);
  HegH431 = new heg(51 * 4, 610);
  HegH432 = new heg(51 * 5, 610);
}

function tekenHeggenDeel4() {
  HegH401.tekenHheg();
  HegH402.tekenHheg();
  HegH403.tekenHheg();
  HegH404.tekenHheg();
  HegH405.tekenHheg();
  HegH406.tekenHheg();
  HegH407.tekenHheg();
  HegH408.tekenHheg();
  HegH409.tekenHheg();
  HegH410.tekenHheg();
  HegH411.tekenHheg();
  HegH412.tekenHheg();
  HegH413.tekenHheg();
  HegH414.tekenHheg();
  HegH415.tekenHheg();
  HegH416.tekenHheg();
  HegH417.tekenHheg();
  HegH418.tekenHheg();
  HegH419.tekenHheg();
  HegH420.tekenHheg();
  HegH421.tekenHheg();
  HegH422.tekenHheg();
  HegH423.tekenHheg();
  HegH424.tekenHheg();
  HegH425.tekenHheg();
  HegH426.tekenHheg();
  HegH427.tekenHheg();
  HegH428.tekenHheg();
  HegH429.tekenHheg();
  HegH430.tekenHheg();
  HegH431.tekenHheg();
  HegH432.tekenHheg();


  HegV401.tekenVheg();
  HegV402.tekenVheg();
  HegV403.tekenVheg();
  HegV404.tekenVheg();
  HegV405.tekenVheg();
  HegV406.tekenVheg();
  HegV407.tekenVheg();
  HegV408.tekenVheg();
  HegV409.tekenVheg();
  HegV410.tekenVheg();
  HegV411.tekenVheg();
  HegV412.tekenVheg();
  HegV413.tekenVheg();
  HegV414.tekenVheg();
  HegV415.tekenVheg();
  HegV416.tekenVheg();
  HegV417.tekenVheg();
  HegV418.tekenVheg();
  HegV419.tekenVheg();
  HegV420.tekenVheg();
  HegV421.tekenVheg();
  HegV422.tekenVheg();
  HegV423.tekenVheg();
  HegV424.tekenVheg();
  HegV425.tekenVheg();
  HegV426.tekenVheg();
  HegV427.tekenVheg();
  HegV428.tekenVheg();
  HegV429.tekenVheg();
  HegV430.tekenVheg();
  HegV431.tekenVheg();
  HegV432.tekenVheg();
  HegV433.tekenVheg();
  HegV434.tekenVheg();
  HegV435.tekenVheg();
  HegV436.tekenVheg();
  HegV437.tekenVheg();
  HegV438.tekenVheg();
  HegV439.tekenVheg();
  HegV440.tekenVheg();
  HegV441.tekenVheg();
  HegV442.tekenVheg();
  HegV443.tekenVheg();
  HegV444.tekenVheg();
  HegV445.tekenVheg();
  HegV446.tekenVheg();
  HegV447.tekenVheg();
  HegV448.tekenVheg();
  HegV449.tekenVheg();
  HegV450.tekenVheg();
  HegV451.tekenVheg();
  HegV452.tekenVheg();
  HegV453.tekenVheg();
  HegV454.tekenVheg();
  HegV455.tekenVheg();
}

function heggenDeel5() {
  HegV501 = new heg(0, 0);
  HegV502 = new heg(0, 51);
  HegV503 = new heg(0, 51 * 2);
  HegV504 = new heg(0, 51 * 3);
  HegV505 = new heg(0, 51 * 4);
  HegV506 = new heg(0, 51 * 5);
  HegV507 = new heg(0, 51 * 10);
  HegV508 = new heg(0, 51 * 11);
  HegH501 = new heg(0, 51 * 6);
  HegH502 = new heg(0, 51 * 8);

  HegV509 = new heg(51 * 2, 0);
  HegV510 = new heg(51 * 6, 0);
  HegV511 = new heg(51 * 10, 0);
  HegV512 = new heg(51 * 12, 0);
  HegH503 = new heg(51 * 3, 0);
  HegH504 = new heg(51 * 4, 0);
  HegH505 = new heg(51 * 5, 0);
  HegH506 = new heg(51 * 7, 0);
  HegH507 = new heg(51 * 8, 0);

  HegV513 = new heg(51 * 2, 51);
  HegV514 = new heg(51 * 6, 51);
  HegV515 = new heg(51 * 10, 51);
  HegV516 = new heg(51 * 12, 51);

  HegV517 = new heg(51 * 4, 51 * 2);
  HegV518 = new heg(51 * 8, 51 * 2);
  HegV519 = new heg(51 * 12, 51 * 2);
  HegH508 = new heg(51 * 2, 51 * 2);
  HegH509 = new heg(51 * 6, 51 * 2);
  HegH510 = new heg(51 * 9, 51 * 2);
  HegH511 = new heg(51 * 10, 51 * 2);

  HegV539 = new heg(51 * 4, 51 * 3);
  HegV540 = new heg(51 * 8, 51 * 3);
  HegV541 = new heg(51 * 12, 51 * 3);

  HegV520 = new heg(51 * 8, 51 * 4);
  HegV521 = new heg(51 * 10, 51 * 4);
  HegH512 = new heg(51, 51 * 4);
  HegH513 = new heg(51 * 2, 51 * 4);
  HegH514 = new heg(51 * 3, 51 * 4);
  HegH515 = new heg(51 * 4, 51 * 4);
  HegH516 = new heg(51 * 5, 51 * 4);
  HegH517 = new heg(51 * 6, 51 * 4);
  HegH518 = new heg(51 * 7, 51 * 4);
  HegH519 = new heg(51 * 11, 51 * 4);
  HegH520 = new heg(51 * 12, 51 * 4);

  HegV522 = new heg(51 * 8, 51 * 5);
  HegV523 = new heg(51 * 10, 51 * 5);

  HegV524 = new heg(51 * 2, 51 * 6);
  HegV525 = new heg(51 * 6, 51 * 6);
  HegV526 = new heg(51 * 8, 51 * 6);
  HegV527 = new heg(51 * 10, 51 * 6);
  HegV528 = new heg(51 * 12, 51 * 6);
  HegH521 = new heg(51 * 3, 51 * 6);
  HegH522 = new heg(51 * 4, 51 * 6);
  HegH523 = new heg(51 * 5, 51 * 6);

  HegV529 = new heg(51 * 2, 51 * 7);
  HegV530 = new heg(51 * 6, 51 * 7);
  HegV531 = new heg(51 * 8, 51 * 7);
  HegV532 = new heg(51 * 10, 51 * 7);
  HegV533 = new heg(51 * 12, 51 * 7);

  HegV534 = new heg(51 * 2, 51 * 8);
  HegV535 = new heg(51 * 4, 51 * 8);
  HegV536 = new heg(51 * 6, 51 * 8);
  HegV537 = new heg(51 * 8, 51 * 8);
  HegV538 = new heg(51 * 12, 51 * 8);
  HegH524 = new heg(51, 51 * 8);
  HegH525 = new heg(51 * 10, 51 * 8);

  HegV542 = new heg(51 * 2, 51 * 9);
  HegV543 = new heg(51 * 4, 51 * 9);
  HegV544 = new heg(51 * 6, 51 * 9);
  HegV545 = new heg(51 * 8, 51 * 9);
  HegV546 = new heg(51 * 12, 51 * 9);

  HegV547 = new heg(51 * 2, 51 * 10);
  HegV548 = new heg(51 * 4, 51 * 10);
  HegV549 = new heg(51 * 6, 51 * 10);
  HegV550 = new heg(51 * 10, 51 * 10);
  HegH526 = new heg(51 * 8, 51 * 10);
  HegH527 = new heg(51 * 9, 51 * 10);
  HegH528 = new heg(51 * 11, 51 * 10);
  HegH529 = new heg(51 * 12, 51 * 10);

  HegV551 = new heg(51 * 2, 51 * 11);
  HegV552 = new heg(51 * 4, 51 * 11);
  HegV553 = new heg(51 * 6, 51 * 11);
  HegV554 = new heg(51 * 10, 51 * 11);

  HegV555 = new heg(51 * 7, 610);
  HegV556 = new heg(51 * 8, 610);
  HegV557 = new heg(51 * 12, 610);
}

function tekenHeggenDeel5() {
  HegH501.tekenHheg();
  HegH502.tekenHheg();
  HegH503.tekenHheg();
  HegH504.tekenHheg();
  HegH505.tekenHheg();
  HegH506.tekenHheg();
  HegH507.tekenHheg();
  HegH508.tekenHheg();
  HegH509.tekenHheg();
  HegH510.tekenHheg();
  HegH511.tekenHheg();
  HegH512.tekenHheg();
  HegH513.tekenHheg();
  HegH514.tekenHheg();
  HegH515.tekenHheg();
  HegH516.tekenHheg();
  HegH517.tekenHheg();
  HegH518.tekenHheg();
  HegH519.tekenHheg();
  HegH520.tekenHheg();
  HegH521.tekenHheg();
  HegH522.tekenHheg();
  HegH523.tekenHheg();
  HegH524.tekenHheg();
  HegH525.tekenHheg();
  HegH526.tekenHheg();
  HegH527.tekenHheg();
  HegH528.tekenHheg();
  HegH529.tekenHheg();


  HegV501.tekenVheg();
  HegV502.tekenVheg();
  HegV503.tekenVheg();
  HegV504.tekenVheg();
  HegV505.tekenVheg();
  HegV506.tekenVheg();
  HegV507.tekenVheg();
  HegV508.tekenVheg();
  HegV509.tekenVheg();
  HegV510.tekenVheg();
  HegV511.tekenVheg();
  HegV512.tekenVheg();
  HegV513.tekenVheg();
  HegV514.tekenVheg();
  HegV515.tekenVheg();
  HegV516.tekenVheg();
  HegV517.tekenVheg();
  HegV518.tekenVheg();
  HegV519.tekenVheg();
  HegV520.tekenVheg();
  HegV521.tekenVheg();
  HegV522.tekenVheg();
  HegV523.tekenVheg();
  HegV524.tekenVheg();
  HegV525.tekenVheg();
  HegV526.tekenVheg();
  HegV527.tekenVheg();
  HegV528.tekenVheg();
  HegV529.tekenVheg();
  HegV530.tekenVheg();
  HegV531.tekenVheg();
  HegV532.tekenVheg();
  HegV533.tekenVheg();
  HegV534.tekenVheg();
  HegV535.tekenVheg();
  HegV536.tekenVheg();
  HegV537.tekenVheg();
  HegV538.tekenVheg();
  HegV539.tekenVheg();
  HegV540.tekenVheg();
  HegV541.tekenVheg();
  HegV542.tekenVheg();
  HegV543.tekenVheg();
  HegV544.tekenVheg();
  HegV545.tekenVheg();
  HegV546.tekenVheg();
  HegV547.tekenVheg();
  HegV548.tekenVheg();
  HegV549.tekenVheg();
  HegV550.tekenVheg();
  HegV551.tekenVheg();
  HegV552.tekenVheg();
  HegV553.tekenVheg();
  HegV554.tekenVheg();
  HegV555.tekenVheg();
  HegV556.tekenVheg();
  HegV557.tekenVheg();
}

function heggenDeel6(){
    HegV601 = new heg(0,0);
    HegV602 = new heg(0,51);
    HegV603 = new heg(0,51 * 2);
    HegV604 = new heg(0,51 * 3);
    HegV605 = new heg(0,51 * 6);
    HegV606 = new heg(0,51 * 7);
    HegV607 = new heg(0,51 * 8);
    HegV608 = new heg(0,51 * 9);
    HegV609 = new heg(0,51 * 12);
    HegH601 = new heg(0,51 * 4);
    HegH602 = new heg(0,51 * 10);
    
    HegV610 = new heg(51 * 12, 0);
    HegV611 = new heg(51 * 12, 51);
    HegV612 = new heg(51 * 12, 51 * 2);
    HegV613 = new heg(51 * 12, 51 * 3);
    HegV614 = new heg(51 * 12, 51 * 4);
    HegV615 = new heg(51 * 12, 51 * 5);
    HegV616 = new heg(51 * 12, 51 * 6);
    HegV617 = new heg(51 * 12, 51 * 7);
    HegV618 = new heg(51 * 12, 51 * 8);
    HegV619 = new heg(51 * 12, 51 * 9);
    HegV620 = new heg(51 * 12, 51 * 10);
    HegV621 = new heg(51 * 12, 51 * 11);
    
    HegH603 = new heg(51, 0);
    HegH604 = new heg(51 * 2, 0);
    HegH605 = new heg(51 * 3, 0);
    HegH610 = new heg(51 * 4, 0);
    HegH611 = new heg(51 * 5, 0);
    HegH612 = new heg(51 * 6, 0);
    HegH613 = new heg(51 * 7, 0);
    HegH606 = new heg(51 * 8, 0);
    HegH607 = new heg(51 * 9, 0);
    HegH608 = new heg(51 * 10, 0);
    HegH609 = new heg(51 * 11, 0);  
    
    HegV650 = new heg(51 * 4, 51);
    
    HegV622 = new heg(51 * 2, 51 * 2);
    HegV623 = new heg(51 * 4, 51 * 2);
    HegV624 = new heg(51 * 8, 51 * 2);
    HegH615 = new heg(51 * 5, 51 * 2);
    HegH616 = new heg(51 * 6, 51 * 2);
    HegH617 = new heg(51 * 7, 51 * 2);
    HegH618 = new heg(51 * 9, 51 * 2);
    HegH619 = new heg(51 * 10, 51 * 2);
    
    HegV625 = new heg(51 * 2, 51 * 3);
    HegV626 = new heg(51 * 4, 51 * 3);
    HegV627 = new heg(51 * 8, 51 * 3);
    
    
    HegV628 = new heg(51 * 2, 51 * 4);
    HegV629 = new heg(51 * 6, 51 * 4);
    HegV630 = new heg(51 * 8, 51 * 4);
    HegV631 = new heg(51 * 10, 51 * 4);
    HegH621 = new heg(51 * 4, 51 * 4);
    
    HegV632 = new heg(51 * 2, 51 * 5);
    HegV633 = new heg(51 * 6, 51 * 5);
    HegV634 = new heg(51 * 8, 51 * 5);
    HegV635 = new heg(51 * 10, 51 * 5);
    
    HegV636 = new heg(51 * 8, 51 * 6);
    HegV637 = new heg(51 * 10, 51 * 6);
    HegH623 = new heg(51, 51 * 6);
    HegH624 = new heg(51 * 2, 51 * 6);
    HegH625 = new heg(51 * 3, 51 * 6);
    HegH626 = new heg(51 * 4, 51 * 6);
    HegH627 = new heg(51 * 5, 51 * 6);
    HegH628 = new heg(51 * 6, 51 * 6);
    
    HegV638 = new heg(51 * 8, 51 * 7);
    HegV639 = new heg(51 * 10, 51 * 7);
    
    HegV640 = new heg(51 * 6, 51 * 8);
    HegH629 = new heg(51 * 2, 51 * 8);
    HegH630 = new heg(51 * 3, 51 * 8);
    HegH631 = new heg(51 * 4, 51 * 8);
    HegH632 = new heg(51 * 5, 51 * 8);
    HegH633 = new heg(51 * 7, 51 * 8);
    HegH634 = new heg(51 * 8, 51 * 8);
    HegV651 = new heg(51 * 10, 51 * 8);
    
    HegV641 = new heg(51 * 6, 51 * 9);
    HegV652 = new heg(51 * 10, 51 * 9);
    
    HegH614 = new heg(51, 51 * 10);
    HegH620 = new heg(51 * 9, 51 * 10);
    HegH622 = new heg(51 * 10, 51 * 10);
    HegV642 = new heg(51 * 2, 51 * 10);
    HegV643 = new heg(51 * 4, 51 * 10);
    HegV644 = new heg(51 * 6, 51 * 10);
    HegV645 = new heg(51 * 8, 51 * 10);
    
    HegV646 = new heg(51 * 2, 51 * 11);
    HegV647 = new heg(51 * 4, 51 * 11);
    HegV648 = new heg(51 * 6, 51 * 11);
    HegV649 = new heg(51 * 8, 51 * 11);
    
    HegH635 = new heg(0, 610);
    HegH636 = new heg(51 * 3, 610);
    HegH637 = new heg(51 * 10, 610);
    HegH638 = new heg(51 * 11, 610);
  }

function tekenHeggenDeel6(){
    HegH601.tekenHheg();
    HegH602.tekenHheg();
    HegH603.tekenHheg();
    HegH604.tekenHheg();
    HegH605.tekenHheg();
    HegH606.tekenHheg();
    HegH607.tekenHheg();
    HegH608.tekenHheg();
    HegH609.tekenHheg();
    HegH610.tekenHheg();
    HegH611.tekenHheg();
    HegH612.tekenHheg();
    HegH613.tekenHheg();
    HegH614.tekenHheg();
    HegH615.tekenHheg();
    HegH616.tekenHheg();
    HegH617.tekenHheg();
    HegH618.tekenHheg();
    HegH619.tekenHheg();
    HegH620.tekenHheg();
    HegH621.tekenHheg();
    HegH622.tekenHheg();
    HegH623.tekenHheg();
    HegH624.tekenHheg();
    HegH625.tekenHheg();
    HegH626.tekenHheg();
    HegH627.tekenHheg();
    HegH628.tekenHheg();
    HegH629.tekenHheg();
    HegH630.tekenHheg();
    HegH631.tekenHheg();
    HegH632.tekenHheg();
    HegH633.tekenHheg();
    HegH634.tekenHheg();
    HegH635.tekenHheg();
    HegH636.tekenHheg();
    HegH637.tekenHheg();
    HegH638.tekenHheg();
  
    
    HegV601.tekenVheg();
    HegV602.tekenVheg();
    HegV603.tekenVheg();
    HegV604.tekenVheg();
    HegV605.tekenVheg();
    HegV606.tekenVheg();
    HegV607.tekenVheg();
    HegV608.tekenVheg();
    HegV609.tekenVheg();
    HegV610.tekenVheg();
    HegV611.tekenVheg();
    HegV612.tekenVheg();
    HegV613.tekenVheg();
    HegV614.tekenVheg();
    HegV615.tekenVheg();
    HegV616.tekenVheg();
    HegV617.tekenVheg();
    HegV618.tekenVheg();
    HegV619.tekenVheg();
    HegV620.tekenVheg();
    HegV621.tekenVheg();
    HegV622.tekenVheg();
    HegV623.tekenVheg();
    HegV624.tekenVheg();
    HegV625.tekenVheg();
    HegV626.tekenVheg();
    HegV627.tekenVheg();
    HegV628.tekenVheg();
    HegV629.tekenVheg();
    HegV630.tekenVheg();
    HegV631.tekenVheg();
    HegV632.tekenVheg();
    HegV633.tekenVheg();
    HegV634.tekenVheg();
    HegV635.tekenVheg();
    HegV636.tekenVheg();
    HegV637.tekenVheg();
    HegV638.tekenVheg();
    HegV639.tekenVheg();
    HegV640.tekenVheg();
    HegV641.tekenVheg();
    HegV642.tekenVheg();
    HegV643.tekenVheg();
    HegV644.tekenVheg();
    HegV645.tekenVheg();
    HegV646.tekenVheg();
    HegV647.tekenVheg();
    HegV648.tekenVheg();
    HegV649.tekenVheg();
    HegV650.tekenVheg();
    HegV651.tekenVheg();
    HegV652.tekenVheg();
    }

function heggenDeel7() {
  HegV701 = new heg(0, 0);
  HegV702 = new heg(0, 51);
  HegV703 = new heg(0, 51 * 2);
  HegV704 = new heg(0, 51 * 3);
  HegV705 = new heg(0, 51 * 4);
  HegV706 = new heg(0, 51 * 5);
  HegV707 = new heg(0, 51 * 6);
  HegV708 = new heg(0, 51 * 7);
  HegV709 = new heg(0, 51 * 8);
  HegV710 = new heg(0, 51 * 9);
  HegV711 = new heg(0, 51 * 10);
  HegV712 = new heg(0, 51 * 11);

  HegH701 = new heg(51 * 2, 0);
  HegH702 = new heg(51 * 3, 0);
  HegH703 = new heg(51 * 4, 0);
  HegH704 = new heg(51 * 5, 0);
  HegH705 = new heg(51 * 10, 0);
  HegV713 = new heg(51 * 6, 0);
  HegV714 = new heg(51 * 8, 0);
  HegV715 = new heg(51 * 12, 0);

  HegV716 = new heg(51 * 6, 51);
  HegV717 = new heg(51 * 8, 51);
  HegV718 = new heg(51 * 12, 51);

  HegH706 = new heg(51, 51 * 2);
  HegH707 = new heg(51 * 2, 51 * 2);
  HegH708 = new heg(51 * 3, 51 * 2);
  HegH709 = new heg(51 * 4, 51 * 2);
  HegH710 = new heg(51 * 8, 51 * 2);
  HegH711 = new heg(51 * 9, 51 * 2);
  HegH712 = new heg(51 * 10, 51 * 2);
  HegH713 = new heg(51 * 11, 51 * 2);
  HegH714 = new heg(51 * 12, 51 * 2);
  HegV719 = new heg(51 * 6, 51 * 2);

  HegV722 = new heg(51 * 6, 51 * 3);

  HegH715 = new heg(51 * 2, 51 * 4);
  HegH716 = new heg(51 * 3, 51 * 4);
  HegH717 = new heg(51 * 4, 51 * 4);
  HegH718 = new heg(51 * 5, 51 * 4);
  HegH719 = new heg(51 * 7, 51 * 4);
  HegH720 = new heg(51 * 8, 51 * 4);
  HegH721 = new heg(51 * 9, 51 * 4);
  HegH722 = new heg(51 * 10, 51 * 4);
  HegH723 = new heg(51 * 11, 51 * 4);
  HegV720 = new heg(51 * 6, 51 * 4);
  HegV721 = new heg(51 * 12, 51 * 4);

  HegV723 = new heg(51 * 6, 51 * 5);
  HegV724 = new heg(51 * 12, 51 * 5);

  HegH724 = new heg(51, 51 * 6);
  HegH725 = new heg(51 * 2, 51 * 6);
  HegH726 = new heg(51 * 3, 51 * 6);
  HegH727 = new heg(51 * 4, 51 * 6);
  HegH728 = new heg(51 * 9, 51 * 6);
  HegH729 = new heg(51 * 12, 51 * 6);
  HegV725 = new heg(51 * 6, 51 * 6);
  HegV726 = new heg(51 * 8, 51 * 6);
  HegV727 = new heg(51 * 10, 51 * 6);

  HegV728 = new heg(51 * 6, 51 * 7);
  HegV729 = new heg(51 * 8, 51 * 7);
  HegV730 = new heg(51 * 10, 51 * 7);

  HegH730 = new heg(51 * 2, 51 * 8);
  HegH731 = new heg(51 * 3, 51 * 8);
  HegH732 = new heg(51 * 4, 51 * 8);
  HegH733 = new heg(51 * 5, 51 * 8);
  HegH734 = new heg(51 * 6, 51 * 8);
  HegH735 = new heg(51 * 10, 51 * 8);
  HegH736 = new heg(51 * 11, 51 * 8);
  HegH737 = new heg(51 * 12, 51 * 8);
  HegV731 = new heg(51 * 8, 51 * 8);

  HegV732 = new heg(51 * 8, 51 * 9);

  HegH738 = new heg(51, 51 * 10);
  HegH739 = new heg(51 * 2, 51 * 10);
  HegH740 = new heg(51 * 3, 51 * 10);
  HegH741 = new heg(51 * 4, 51 * 10);
  HegH742 = new heg(51 * 5, 51 * 10);
  HegH743 = new heg(51 * 6, 51 * 10);
  HegH744 = new heg(51 * 7, 51 * 10);
  HegH745 = new heg(51 * 8, 51 * 10);
  HegV733 = new heg(51 * 10, 51 * 10);
  HegH746 = new heg(51 * 11, 51 * 10);
  HegH747 = new heg(51 * 12, 51 * 10);

  HegV734 = new heg(51 * 10, 51 * 11);

  HegH748 = new heg(51, 610);
  HegH749 = new heg(51 * 2, 610);
  HegH750 = new heg(51 * 3, 610);
  HegH751 = new heg(51 * 4, 610);
  HegH752 = new heg(51 * 5, 610);
  HegH753 = new heg(51 * 6, 610);
  HegH754 = new heg(51 * 7, 610);
  HegH755 = new heg(51 * 8, 610);
  HegH756 = new heg(51 * 9, 610);
  HegH757 = new heg(51 * 11, 610);
  HegH758 = new heg(51 * 12, 610);
}

function tekenHeggenDeel7() {
  HegV701.tekenVheg();
  HegV702.tekenVheg();
  HegV703.tekenVheg();
  HegV704.tekenVheg();
  HegV705.tekenVheg();
  HegV706.tekenVheg();
  HegV707.tekenVheg();
  HegV708.tekenVheg();
  HegV709.tekenVheg();
  HegV710.tekenVheg();
  HegV711.tekenVheg();
  HegV712.tekenVheg();
  HegV713.tekenVheg();
  HegV714.tekenVheg();
  HegV715.tekenVheg();
  HegV716.tekenVheg();
  HegV717.tekenVheg();
  HegV718.tekenVheg();
  HegV719.tekenVheg();
  HegV720.tekenVheg();
  HegV721.tekenVheg();
  HegV722.tekenVheg();
  HegV723.tekenVheg();
  HegV724.tekenVheg();
  HegV725.tekenVheg();
  HegV726.tekenVheg();
  HegV727.tekenVheg();
  HegV728.tekenVheg();
  HegV729.tekenVheg();
  HegV730.tekenVheg();
  HegV731.tekenVheg();
  HegV732.tekenVheg();
  HegV733.tekenVheg();
  HegV734.tekenVheg();


  HegH701.tekenHheg();
  HegH702.tekenHheg();
  HegH703.tekenHheg();
  HegH704.tekenHheg();
  HegH705.tekenHheg();
  HegH706.tekenHheg();
  HegH707.tekenHheg();
  HegH708.tekenHheg();
  HegH709.tekenHheg();
  HegH710.tekenHheg();
  HegH711.tekenHheg();
  HegH712.tekenHheg();
  HegH713.tekenHheg();
  HegH714.tekenHheg();
  HegH715.tekenHheg();
  HegH716.tekenHheg();
  HegH717.tekenHheg();
  HegH718.tekenHheg();
  HegH719.tekenHheg();
  HegH720.tekenHheg();
  HegH721.tekenHheg();
  HegH722.tekenHheg();
  HegH723.tekenHheg();
  HegH724.tekenHheg();
  HegH725.tekenHheg();
  HegH726.tekenHheg();
  HegH727.tekenHheg();
  HegH728.tekenHheg();
  HegH729.tekenHheg();
  HegH730.tekenHheg();
  HegH731.tekenHheg();
  HegH732.tekenHheg();
  HegH733.tekenHheg();
  HegH734.tekenHheg();
  HegH735.tekenHheg();
  HegH736.tekenHheg();
  HegH737.tekenHheg();
  HegH738.tekenHheg();
  HegH739.tekenHheg();
  HegH740.tekenHheg();
  HegH741.tekenHheg();
  HegH742.tekenHheg();
  HegH743.tekenHheg();
  HegH744.tekenHheg();
  HegH745.tekenHheg();
  HegH746.tekenHheg();
  HegH747.tekenHheg();
  HegH748.tekenHheg();
  HegH749.tekenHheg();
  HegH750.tekenHheg();
  HegH751.tekenHheg();
  HegH752.tekenHheg();
  HegH753.tekenHheg();
  HegH754.tekenHheg();
  HegH755.tekenHheg();
  HegH756.tekenHheg();
  HegH757.tekenHheg();
  HegH758.tekenHheg();
}

function heggenDeel8() {
  HegV801 = new heg(0, 0);
  HegV802 = new heg(0, 51);
  HegV803 = new heg(0, 51 * 4);
  HegV804 = new heg(0, 51 * 5);
  HegH801 = new heg(0, 51 * 2);
  HegH802 = new heg(0, 51 * 6);
  HegH803 = new heg(0, 51 * 8);
  HegH804 = new heg(0, 51 * 10);
  HegH805 = new heg(0, 610);

  HegV805 = new heg(51 * 2, 0);
  HegV806 = new heg(51 * 4, 0);
  HegV807 = new heg(51 * 8, 0);
  HegV808 = new heg(51 * 10, 0);
  HegV809 = new heg(51 * 12, 0);
  HegH806 = new heg(51 * 6, 0);
  HegH807 = new heg(51 * 7, 0);

  HegV810 = new heg(51 * 2, 51);
  HegV811 = new heg(51 * 4, 51);
  HegV812 = new heg(51 * 8, 51);
  HegV813 = new heg(51 * 10, 51);
  HegV814 = new heg(51 * 12, 51);

  HegV815 = new heg(51 * 2, 51 * 2);
  HegV816 = new heg(51 * 6, 51 * 2);
  HegV817 = new heg(51 * 8, 51 * 2);
  HegV818 = new heg(51 * 12, 51 * 2);
  HegH808 = new heg(51, 51 * 2);
  HegH809 = new heg(51 * 4, 51 * 2);
  HegH810 = new heg(51 * 5, 51 * 2);
  HegH811 = new heg(51 * 10, 51 * 2);

  HegV819 = new heg(51 * 2, 51 * 3);
  HegV820 = new heg(51 * 6, 51 * 3);
  HegV821 = new heg(51 * 8, 51 * 3);
  HegV822 = new heg(51 * 12, 51 * 3);

  HegV823 = new heg(51 * 4, 51 * 4);
  HegV824 = new heg(51 * 6, 51 * 4);
  HegV825 = new heg(51 * 8, 51 * 4);
  HegV826 = new heg(51 * 12, 51 * 4);
  HegH812 = new heg(51 * 2, 51 * 4);
  HegH813 = new heg(51 * 3, 51 * 4);
  HegH814 = new heg(51 * 9, 51 * 4);
  HegH815 = new heg(51 * 10, 51 * 4);
  HegH816 = new heg(51 * 11, 51 * 4);

  HegV827 = new heg(51 * 4, 51 * 5);
  HegV828 = new heg(51 * 6, 51 * 5);
  HegV829 = new heg(51 * 8, 51 * 5);
  HegV830 = new heg(51 * 12, 51 * 5);

  HegV831 = new heg(51 * 2, 51 * 6);
  HegV832 = new heg(51 * 6, 51 * 6);
  HegV833 = new heg(51 * 8, 51 * 6);
  HegV834 = new heg(51 * 10, 51 * 6);
  HegV835 = new heg(51 * 12, 51 * 6);
  HegH817 = new heg(51, 51 * 6);
  HegH818 = new heg(51 * 4, 51 * 6);

  HegV836 = new heg(51 * 2, 51 * 7);
  HegV837 = new heg(51 * 6, 51 * 7);
  HegV838 = new heg(51 * 8, 51 * 7);
  HegV839 = new heg(51 * 10, 51 * 7);
  HegV840 = new heg(51 * 12, 51 * 7);

  HegV841 = new heg(51 * 2, 51 * 8);
  HegV842 = new heg(51 * 8, 51 * 8);
  HegV843 = new heg(51 * 10, 51 * 8);
  HegV844 = new heg(51 * 12, 51 * 8);
  HegH819 = new heg(51 * 3, 51 * 8);
  HegH820 = new heg(51 * 4, 51 * 8);
  HegH821 = new heg(51 * 5, 51 * 8);
  HegH822 = new heg(51 * 6, 51 * 8);

  HegV845 = new heg(51 * 2, 51 * 9);
  HegV846 = new heg(51 * 8, 51 * 9);
  HegV847 = new heg(51 * 10, 51 * 9);
  HegV848 = new heg(51 * 12, 51 * 9);

  HegV849 = new heg(51 * 4, 51 * 10);
  HegV850 = new heg(51 * 10, 51 * 10);
  HegH823 = new heg(51, 51 * 10);
  HegH824 = new heg(51 * 2, 51 * 10)
  HegH825 = new heg(51 * 5, 51 * 10);
  HegH826 = new heg(51 * 6, 51 * 10);
  HegH827 = new heg(51 * 7, 51 * 10);
  HegH828 = new heg(51 * 8, 51 * 10);
  HegH829 = new heg(51 * 12, 51 * 10);

  HegV851 = new heg(51 * 4, 51 * 11);
  HegV852 = new heg(51 * 10, 51 * 11);

  HegH830 = new heg(51, 610);
  HegH831 = new heg(51 * 2, 610)
  HegH832 = new heg(51 * 3, 610);
  HegH833 = new heg(51 * 5, 610);
  HegH834 = new heg(51 * 6, 610);
  HegH835 = new heg(51 * 7, 610);
  HegH836 = new heg(51 * 8, 610);
  HegH837 = new heg(51 * 9, 610);
  HegH838 = new heg(51 * 11, 610);
  HegH839 = new heg(51 * 12, 610);
}

function tekenHeggenDeel8() {
  HegH801.tekenHheg();
  HegH802.tekenHheg();
  HegH803.tekenHheg();
  HegH804.tekenHheg();
  HegH805.tekenHheg();
  HegH806.tekenHheg();
  HegH807.tekenHheg();
  HegH808.tekenHheg();
  HegH809.tekenHheg();
  HegH810.tekenHheg();
  HegH811.tekenHheg();
  HegH812.tekenHheg();
  HegH813.tekenHheg();
  HegH814.tekenHheg();
  HegH815.tekenHheg();
  HegH816.tekenHheg();
  HegH817.tekenHheg();
  HegH818.tekenHheg();
  HegH819.tekenHheg();
  HegH820.tekenHheg();
  HegH821.tekenHheg();
  HegH822.tekenHheg();
  HegH823.tekenHheg();
  HegH824.tekenHheg();
  HegH825.tekenHheg();
  HegH826.tekenHheg();
  HegH827.tekenHheg();
  HegH828.tekenHheg();
  HegH829.tekenHheg();
  HegH830.tekenHheg();
  HegH831.tekenHheg();
  HegH832.tekenHheg();
  HegH833.tekenHheg();
  HegH834.tekenHheg();
  HegH835.tekenHheg();
  HegH836.tekenHheg();
  HegH837.tekenHheg();
  HegH838.tekenHheg();
  HegH839.tekenHheg();


  HegV801.tekenVheg();
  HegV802.tekenVheg();
  HegV803.tekenVheg();
  HegV804.tekenVheg();
  HegV805.tekenVheg();
  HegV806.tekenVheg();
  HegV807.tekenVheg();
  HegV808.tekenVheg();
  HegV809.tekenVheg();
  HegV810.tekenVheg();
  HegV811.tekenVheg();
  HegV812.tekenVheg();
  HegV813.tekenVheg();
  HegV814.tekenVheg();
  HegV815.tekenVheg();
  HegV816.tekenVheg();
  HegV817.tekenVheg();
  HegV818.tekenVheg();
  HegV819.tekenVheg();
  HegV820.tekenVheg();
  HegV821.tekenVheg();
  HegV822.tekenVheg();
  HegV823.tekenVheg();
  HegV824.tekenVheg();
  HegV825.tekenVheg();
  HegV826.tekenVheg();
  HegV827.tekenVheg();
  HegV828.tekenVheg();
  HegV829.tekenVheg();
  HegV830.tekenVheg();
  HegV831.tekenVheg();
  HegV832.tekenVheg();
  HegV833.tekenVheg();
  HegV834.tekenVheg();
  HegV835.tekenVheg();
  HegV836.tekenVheg();
  HegV837.tekenVheg();
  HegV838.tekenVheg();
  HegV839.tekenVheg();
  HegV840.tekenVheg();
  HegV841.tekenVheg();
  HegV842.tekenVheg();
  HegV843.tekenVheg();
  HegV844.tekenVheg();
  HegV845.tekenVheg();
  HegV846.tekenVheg();
  HegV847.tekenVheg();
  HegV848.tekenVheg();
  HegV849.tekenVheg();
  HegV850.tekenVheg();
  HegV851.tekenVheg();
  HegV852.tekenVheg();
}

function heggenDeel9() {
  HegV901 = new heg(0, 0);
  HegV902 = new heg(0, 51);
  HegV903 = new heg(0, 51 * 2);
  HegV904 = new heg(0, 51 * 3);
  HegV905 = new heg(0, 51 * 4);
  HegV906 = new heg(0, 51 * 5);
  HegV907 = new heg(0, 51 * 6);
  HegV908 = new heg(0, 51 * 7);
  HegV909 = new heg(0, 51 * 8);
  HegV910 = new heg(0, 51 * 9);
  HegH901 = new heg(0, 51 * 10);
  HegH902 = new heg(0, 610);

  HegV911 = new heg(51 * 12, 0);
  HegV912 = new heg(51 * 12, 51);
  HegV913 = new heg(51 * 12, 51 * 2);
  HegV914 = new heg(51 * 12, 51 * 3);
  HegV915 = new heg(51 * 12, 51 * 4);
  HegV916 = new heg(51 * 12, 51 * 5);
  HegV917 = new heg(51 * 12, 51 * 6);
  HegV918 = new heg(51 * 12, 51 * 7);
  HegV919 = new heg(51 * 12, 51 * 8);
  HegV920 = new heg(51 * 12, 51 * 9);
  HegV921 = new heg(51 * 12, 51 * 10);
  HegV922 = new heg(51 * 12, 51 * 11);

  HegV923 = new heg(51 * 2, 0);
  HegV924 = new heg(51 * 6, 0);
  HegV925 = new heg(51 * 8, 0);
  HegH903 = new heg(51 * 3, 0);
  HegH904 = new heg(51 * 4, 0);
  HegH905 = new heg(51 * 11, 0);
  HegH908 = new heg(51 * 10, 0);

  HegV927 = new heg(51 * 2, 51);
  HegV928 = new heg(51 * 6, 51);
  HegV929 = new heg(51 * 8, 51);

  HegV931 = new heg(51 * 2, 51 * 2);
  HegV932 = new heg(51 * 4, 51 * 2);
  HegV933 = new heg(51 * 8, 51 * 2);
  HegV926 = new heg(51 * 10, 51 * 2);
  HegH906 = new heg(51 * 5, 51 * 2);
  HegH907 = new heg(51 * 6, 51 * 2);

  HegV934 = new heg(51 * 2, 51 * 3);
  HegV935 = new heg(51 * 4, 51 * 3);
  HegV936 = new heg(51 * 8, 51 * 3);
  HegV937 = new heg(51 * 10, 51 * 3);

  HegV938 = new heg(51 * 2, 51 * 4);
  HegV939 = new heg(51 * 6, 51 * 4);
  HegV940 = new heg(51 * 10, 51 * 4);
  HegH909 = new heg(51 * 4, 51 * 4);
  HegH910 = new heg(51 * 7, 51 * 4);
  HegH911 = new heg(51 * 8, 51 * 4);
  HegH912 = new heg(51 * 9, 51 * 4);

  HegV941 = new heg(51 * 2, 51 * 5);
  HegV942 = new heg(51 * 6, 51 * 5);
  HegV943 = new heg(51 * 10, 51 * 5);

  HegV944 = new heg(51 * 6, 51 * 6);
  HegV945 = new heg(51 * 8, 51 * 6);
  HegV946 = new heg(51 * 10, 51 * 6);
  HegH913 = new heg(51 * 2, 51 * 6);
  HegH914 = new heg(51 * 3, 51 * 6);
  HegH915 = new heg(51 * 4, 51 * 6);
  HegH916 = new heg(51 * 5, 51 * 6);

  HegV947 = new heg(51 * 6, 51 * 7);
  HegV948 = new heg(51 * 8, 51 * 7);
  HegV949 = new heg(51 * 10, 51 * 7);

  HegV950 = new heg(51 * 4, 51 * 8);
  HegV951 = new heg(51 * 8, 51 * 8);
  HegV952 = new heg(51 * 10, 51 * 8);
  HegH917 = new heg(51, 51 * 8);
  HegH918 = new heg(51 * 2, 51 * 8);
  HegH919 = new heg(51 * 3, 51 * 8);
  HegH920 = new heg(51 * 6, 51 * 8);

  HegV953 = new heg(51 * 4, 51 * 9);
  HegV954 = new heg(51 * 8, 51 * 9);
  HegV955 = new heg(51 * 10, 51 * 9);

  HegV956 = new heg(51 * 2, 51 * 10);
  HegV957 = new heg(51 * 10, 51 * 10);
  HegH934 = new heg(51 * 4, 51 * 10);
  HegH921 = new heg(51 * 5, 51 * 10);
  HegH922 = new heg(51 * 6, 51 * 10);
  HegH923 = new heg(51 * 7, 51 * 10);
  HegH924 = new heg(51 * 8, 51 * 10);

  HegV958 = new heg(51 * 2, 51 * 11);
  HegV930 = new heg(51 * 10, 51 * 11);

  HegH925 = new heg(0, 610);
  HegH926 = new heg(51, 610);
  HegH927 = new heg(51 * 3, 610);
  HegH928 = new heg(51 * 4, 610);
  HegH929 = new heg(51 * 5, 610);
  HegH930 = new heg(51 * 6, 610);
  HegH931 = new heg(51 * 7, 610);
  HegH932 = new heg(51 * 8, 610);
  HegH933 = new heg(51 * 9, 610);
}

function tekenHeggenDeel9() {
  HegV901.tekenVheg();
  HegV902.tekenVheg();
  HegV903.tekenVheg();
  HegV904.tekenVheg();
  HegV905.tekenVheg();
  HegV906.tekenVheg();
  HegV907.tekenVheg();
  HegV908.tekenVheg();
  HegV909.tekenVheg();
  HegV910.tekenVheg();
  HegV911.tekenVheg();
  HegV912.tekenVheg();
  HegV913.tekenVheg();
  HegV914.tekenVheg();
  HegV915.tekenVheg();
  HegV916.tekenVheg();
  HegV917.tekenVheg();
  HegV918.tekenVheg();
  HegV919.tekenVheg();
  HegV920.tekenVheg();
  HegV921.tekenVheg();
  HegV922.tekenVheg();
  HegV923.tekenVheg();
  HegV924.tekenVheg();
  HegV925.tekenVheg();
  HegV926.tekenVheg();
  HegV927.tekenVheg();
  HegV928.tekenVheg();
  HegV929.tekenVheg();
  HegV930.tekenVheg();
  HegV931.tekenVheg();
  HegV932.tekenVheg();
  HegV933.tekenVheg();
  HegV934.tekenVheg();
  HegV935.tekenVheg();
  HegV936.tekenVheg();
  HegV937.tekenVheg();
  HegV938.tekenVheg();
  HegV939.tekenVheg();
  HegV940.tekenVheg();
  HegV941.tekenVheg();
  HegV942.tekenVheg();
  HegV943.tekenVheg();
  HegV944.tekenVheg();
  HegV945.tekenVheg();
  HegV946.tekenVheg();
  HegV947.tekenVheg();
  HegV948.tekenVheg();
  HegV949.tekenVheg();
  HegV950.tekenVheg();
  HegV951.tekenVheg();
  HegV952.tekenVheg();
  HegV953.tekenVheg();
  HegV954.tekenVheg();
  HegV955.tekenVheg();
  HegV956.tekenVheg();
  HegV957.tekenVheg();
  HegV958.tekenVheg();


  HegH901.tekenHheg();
  HegH902.tekenHheg();
  HegH903.tekenHheg();
  HegH904.tekenHheg();
  HegH905.tekenHheg();
  HegH906.tekenHheg();
  HegH907.tekenHheg();
  HegH908.tekenHheg();
  HegH909.tekenHheg();
  HegH910.tekenHheg();
  HegH911.tekenHheg();
  HegH912.tekenHheg();
  HegH913.tekenHheg();
  HegH914.tekenHheg();
  HegH915.tekenHheg();
  HegH916.tekenHheg();
  HegH917.tekenHheg();
  HegH918.tekenHheg();
  HegH919.tekenHheg();
  HegH920.tekenHheg();
  HegH921.tekenHheg();
  HegH922.tekenHheg();
  HegH923.tekenHheg();
  HegH924.tekenHheg();
  HegH925.tekenHheg();
  HegH926.tekenHheg();
  HegH927.tekenHheg();
  HegH928.tekenHheg();
  HegH929.tekenHheg();
  HegH930.tekenHheg();
  HegH931.tekenHheg();
  HegH932.tekenHheg();
  HegH933.tekenHheg();
  HegH934.tekenHheg();
}

function kipDeel1() {
  blobKip = new kip(216 - 51, 63 + 6 * 51, 2, 255, 255, 255, 1);
  blobKip2 = new kip(114, 216, 2, 255, 255, 255, 1);
  blobKip3 = new kip(216 + 6 * 51, 63 + 9 * 51, 2, 255, 255, 255, 1);
}

function tekenKipDeel1() {
  blobKip.pakKip();
  blobKip.tekenKip();
  blobKip2.pakKip();
  blobKip2.tekenKip();
  blobKip3.pakKip();
  blobKip3.tekenKip();
}

function kipDeel2() {
  blobKip4 = new kip(216 + 6 * 51, 63 + 9 * 51, 2, 255, 255, 255, 1);
  blobKip5 = new kip(216, 63, 2, 255, 255, 255, 1);
}

function tekenKipDeel2() {
  blobKip4.pakKip();
  blobKip4.tekenKip();
  blobKip5.pakKip();
  blobKip5.tekenKip();
}

function kipDeel3() {
  
}

function tekenKipDeel3() {
  
}

function kipDeel4() {
  blobKip6 = new kip(216 + 51 * 4, 63 + 51 * 8, 2, 255, 255, 255, 1);
  blobKip7 = new kip(216 + 51 * 7, 63 + 51 * 8, 2, 255, 255, 255, 1);
}

function tekenKipDeel4() {
  blobKip6.pakKip();
  blobKip6.tekenKip();
  blobKip7.pakKip();
  blobKip7.tekenKip();
}

function kipDeel5() {
  blobKip8 = new kip(216 - 51 * 0, 63 + 51 * 0, 2, 255, 255, 255, 1);
  blobKip9 = new kip(216 + 51 * 5, 63 + 51 * 2, 2, 255, 255, 255, 1);
  blobKip10 = new kip(216 + 51 * 3, 63 + 51 * 10, 2, 255, 255, 255, 1);
}

function tekenKipDeel5() {
  blobKip8.pakKip();
  blobKip8.tekenKip();
  blobKip9.pakKip();
  blobKip9.tekenKip();
  blobKip10.pakKip();
  blobKip10.tekenKip();
}

function kipDeel6() {
  blobKip19 = new kip(216 + 4 * 51, 63 + 0 * 51, 2, 255, 255, 255, 1);
  blobKip20 = new kip(216 + 0 * 51, 63 + 8 * 51, 2, 255, 255, 255, 1);
  blobKip21 = new kip(216 - 3 * 51, 63 + 10 * 51, 2, 255, 255, 255, 1);
}

function tekenKipDeel6() {
  blobKip19.pakKip();
  blobKip19.tekenKip();
  blobKip20.pakKip();
  blobKip20.tekenKip();
  blobKip21.pakKip();
  blobKip21.tekenKip();
}

function kipDeel7() {
  blobKip11 = new kip(216 + 51 * 7, 63 + 51 * 6, 2, 255, 255, 255, 1);
  blobKip12 = new kip(216 + 51 * 5, 63 + 51 * 8, 2, 255, 255, 255, 1);
}

function tekenKipDeel7() {
  blobKip11.pakKip();
  blobKip11.tekenKip();
  blobKip12.pakKip();
  blobKip12.tekenKip();
}

function kipDeel8() {
  blobKip13 = new kip(216 - 51 * 3, 63 + 51 * 0, 2, 255, 255, 255, 1);
  blobKip14 = new kip(216 + 51 * 1, 63 + 51 * 3, 2, 255, 255, 255, 1);
  blobKip15 = new kip(216 + 51 * 5, 63 + 51 * 4, 2, 255, 255, 255, 1);
}

function tekenKipDeel8() {
  blobKip13.pakKip();
  blobKip13.tekenKip();
  blobKip14.pakKip();
  blobKip14.tekenKip();
  blobKip15.pakKip();
  blobKip15.tekenKip();
}

function kipDeel9() {
  blobKip16 = new kip(216 - 51 * 3, 63 + 51 * 2, 2, 255, 255, 255, 1);
  blobKip17 = new kip(216 + 51 * 5, 63 + 51 * 1, 2, 255, 255, 255, 1);
  blobKip18 = new kip(216 - 51 * 1, 63 + 51 * 3, 2, 255, 255, 255, 1);
}

function tekenKipDeel9() {
  blobKip16.pakKip();
  blobKip16.tekenKip();
  blobKip17.pakKip();
  blobKip17.tekenKip();
  blobKip18.pakKip();
  blobKip18.tekenKip();
}


