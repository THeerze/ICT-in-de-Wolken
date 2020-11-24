class speler {
  constructor(x, y, width, height, rood, groen, blauw, rzak, gzak, bzak, rjas, gjas, bjas, spd) {
    this.x = x;
    this.y = y;
    //width is de breedte van de pixels
    this.width = width;
    //height is alleen nodig vor het level-switchsysteem
    this.height = height;
    this.rood = rood;
    this.groen = groen;
    this.blauw = blauw;
    this.rzak = rzak
    this.gzak = gzak
    this.bzak = bzak
    this.rjas = rjas;
    this.gjas = gjas;
    this.bjas = bjas;

    this.rarm = this.rjas + 12;
    this.garm = this.gjas + 12;
    this.barm = this.bjas + 12;

    this.rpak = this.rjas + 100;
    this.gpak = this.gjas + 100;
    this.bpak = this.bjas + 100;

    this.roor = this.rood + 50;
    this.goor = this.groen + 50;
    this.boor = this.blauw + 50;

    this.xLB1 = this.x - this.width * 6;
    this.xLB2 = this.x - this.width * 6;
    this.xLB3 = this.x - this.width * 6;
    this.xLB4 = this.x + this.width * 10;
    this.xLB5 = this.x + this.width * 10
    this.xLB6 = this.x + this.width * 10

    this.xRB1 = this.x;
    this.xRB2 = this.x;
    this.xRB3 = this.x;
    this.xRB4 = this.x + this.width * 10;
    this.xRB5 = this.x + this.width * 10;
    this.xRB6 = this.x + this.width * 10;

    this.yLB1 = this.y + this.width * 39.5;
    this.yRB1 = this.y + this.width * 39.5;

    this.spd = spd;
    this.spdR = spd;
    this.spdL = spd;
    this.spdB = spd;
    this.spdO = spd;
    //this.tempSpd = spd;
    this.spdB1 = this.spdR * 0.5;
    this.spdB2 = this.spdR;
    this.spdB3 = this.spdR * 1.5;
    this.spdB4 = this.spdB * 0.5;
    this.spdB5 = this.spdL* 0.5;
    this.spdB6 = this.spdL;
    this.spdB7 = this.spdL * 1.5;
    this.spdB8 = this.spdO * 0.5;

  }
  
  //draw voor de rechterzijde van de player
  tekenSpelerRZ() {
    noStroke();
    fill(this.rood, this.groen, this.blauw);
    //hoofd
    rect(this.x, this.y, this.width * 6, this.width * 6);
    rect(this.x - this.width, this.y - this.width, this.width * 6, this.width);
    rect(this.x - this.width, this.y, this.width, this.width * 4);
    rect(this.x - this.width * 2, this.y + this.width, this.width, this.width * 3);
    rect(this.x + this.width * 3, this.y + this.width * 6, this.width * 2, this.width);
    rect(this.x - this.width, this.y + this.width * 4, this.width, this.width);

    //neus
    rect(this.x + this.width * 6, this.y + this.width * 5, this.width, this.width);
    rect(this.x + this.width * 5, this.y + this.width * 6, this.width * 3, this.width);

    //oren
    rect(this.x, this.y - this.width * 3, this.width, this.width * 2);
    rect(this.x + this.width, this.y - this.width * 2, this.width, this.width);
    rect(this.x + this.width * 3, this.y - this.width * 3, this.width, this.width * 2);

    //hand
    rect(this.x + this.width * 6, this.y + this.width * 9, this.width * 2, this.width * 2);

    //linkerbeen
    rect(this.x - this.width * 6, this.y + this.width * 35, this.width * 2, this.width * 2);
    rect(this.xLB1, this.y + this.width * 37, this.width * 2, this.width * 2);
    rect(this.xLB2, this.y + this.width * 39, this.width * 2, this.width * 2);
    rect(this.xLB3, this.y + this.width * 41, this.width * 2, this.width * 2);

    //rechterbeen
    rect(this.x, this.y + this.width * 32, this.width * 2, this.width * 2);
    rect(this.xRB1, this.y + this.width * 34, this.width * 2, this.width * 2);
    rect(this.xRB2, this.y + this.width * 36, this.width * 2, this.width * 2);
    rect(this.xRB3, this.y + this.width * 38, this.width * 2, this.width * 2);

    //staart
    rect(this.x - this.width * 7, this.y + this.width * 28, this.width, this.width * 2);
    rect(this.x - this.width * 8, this.y + this.width * 28, this.width, this.width * 4);
    rect(this.x - this.width * 9, this.y + this.width * 29, this.width, this.width * 4);
    rect(this.x - this.width * 10, this.y + this.width * 29, this.width, this.width * 6);
    rect(this.x - this.width * 11, this.y + this.width * 30, this.width, this.width * 7);
    rect(this.x - this.width * 12, this.y + this.width * 31, this.width, this.width * 8);
    rect(this.x - this.width * 13, this.y + this.width * 32, this.width, this.width * 8);
    rect(this.x - this.width * 14, this.y + this.width * 33, this.width, this.width * 8);
    rect(this.x - this.width * 15, this.y + this.width * 34, this.width, this.width * 7);
    rect(this.x - this.width * 16, this.y + this.width * 36, this.width, this.width * 4);
    rect(this.x - this.width * 17, this.y + this.width * 37, this.width, this.width * 2);



    fill(255)
    //staart
    rect(this.x - this.width * 18, this.y + this.width * 40, this.width * 3, this.width * 3);
    rect(this.x - this.width * 17, this.y + this.width * 39, this.width, this.width);
    rect(this.x - this.width * 15, this.y + this.width * 41, this.width, this.width);



    fill(this.roor, this.goor, this.boor);
    //binnenkant oor
    rect(this.x + this.width * 2, this.y - this.width * 3, this.width, this.width * 2);



    fill(0);
    //oog
    rect(this.x + this.width * 3, this.y + this.width * 2, this.width, this.width);

    //neus
    rect(this.x + this.width * 7, this.y + this.width * 5, this.width, this.width);



    fill(this.rjas, this.gjas, this.bjas)
    //jas in nek
    rect(this.x - this.width * 2, this.y + this.width * 4, this.width, this.width * 3);
    rect(this.x - this.width * 3, this.y + this.width * 5, this.width, this.width * 2);
    rect(this.x - this.width, this.y + this.width * 5, this.width, this.width);

    //rest van de jas
    rect(this.x - this.width, this.y + this.width * 14, this.width * 2, this.width * 3);
    rect(this.x - this.width * 2, this.y + this.width * 17, this.width * 4, this.width * 9);
    rect(this.x + this.width * 2, this.y + this.width * 18, this.width, this.width * 6);
    rect(this.x + this.width * 3, this.y + this.width * 18, this.width, this.width * 3);
    rect(this.x - this.width * 2, this.y + this.width * 26, this.width * 2, this.width * 3);
    rect(this.x - this.width * 6, this.y + this.width * 22, this.width * 4, this.width * 7);
    rect(this.x - this.width * 7, this.y + this.width * 23, this.width, this.width * 5);
    rect(this.x - this.width * 8, this.y + this.width * 25, this.width, this.width * 3);
    rect(this.x - this.width * 4, this.y + this.width * 20, this.width * 2, this.width * 2);
    rect(this.x - this.width * 5, this.y + this.width * 21, this.width, this.width);



    fill(this.rarm, this.garm, this.barm);
    //arm
    rect(this.x, this.y + this.width * 9, this.width * 4, this.width * 5);
    rect(this.x + this.width, this.y + this.width * 14, this.width * 5, this.width * 3);
    rect(this.x + this.width * 2, this.y + this.width * 17, this.width * 2, this.width);
    rect(this.x + this.width * 6, this.y + this.width * 14, this.width, this.width * 2);
    rect(this.x + this.width * 5, this.y + this.width * 13, this.width, this.width);
    rect(this.x + this.width * 6, this.y + this.width * 11, this.width * 2, this.width * 3);

    //broek
    rect(this.x + this.width * 2, this.y + this.width * 24, this.width, this.width * 6);
    rect(this.x, this.y + this.width * 26, this.width * 2, this.width * 6);
    rect(this.x - this.width * 6, this.y + this.width * 29, this.width * 6, this.width * 4);
    rect(this.x - this.width * 6, this.y + this.width * 33, this.width * 5, this.width);
    rect(this.x - this.width * 6, this.y + this.width * 34, this.width * 3, this.width);




    fill(this.rzak, this.gzak, this.bzak);
    //zak
    rect(this.x - this.width, this.y + this.width * 6, this.width * 4, this.width * 2);
    rect(this.x + this.width * 3, this.y + this.width * 7, this.width * 2, this.width * 2);
    rect(this.x + this.width * 5, this.y + this.width * 8, this.width * 3, this.width);
    rect(this.x + this.width * 5, this.y + this.width * 9, this.width, this.width * 2);
    rect(this.x - this.width, this.y + this.width * 8, this.width * 2, this.width);
    rect(this.x - this.width, this.y + this.width * 9, this.width, this.width * 5);
    rect(this.x - this.width * 4, this.y + this.width * 7, this.width * 3, this.width * 10);
    rect(this.x - this.width * 4, this.y + this.width * 17, this.width * 2, this.width * 3);
    rect(this.x - this.width * 6, this.y + this.width * 8, this.width * 2, this.width * 13);
    rect(this.x - this.width * 9, this.y + this.width * 9, this.width * 3, this.width * 2);
    rect(this.x - this.width * 11, this.y + this.width * 11, this.width * 5, this.width * 10);
    rect(this.x - this.width * 10, this.y + this.width * 21, this.width * 4, this.width);
    rect(this.x - this.width * 12, this.y + this.width * 14, this.width, this.width * 6);
    rect(this.x + this.width, this.y + this.width * 8, this.width * 2, this.width);
    rect(this.x, this.y + this.width * 9, this.width, this.width * 5);
    rect(this.x + this.width, this.y + this.width * 9, this.width, this.width);


    fill(this.rpak, this.gpak, this.bpak)
    //overhemd
    rect(this.x + this.width * 4, this.y + this.width * 9, this.width, this.width * 5);
    rect(this.x + this.width * 4, this.y + this.width * 17, this.width, this.width * 4);
    rect(this.x + this.width * 3, this.y + this.width * 21, this.width, this.width * 3);
  }

  //draw voor de linkerzijde van de player
  tekenSpelerLZ() {
    noStroke();
    fill(this.rood, this.groen, this.blauw);
    //hoofd
    rect(this.x, this.y, this.width * 6, this.width * 6);
    rect(this.x + this.width, this.y - this.width, this.width * 6, this.width);
    rect(this.x + this.width * 6, this.y, this.width, this.width * 4);
    rect(this.x + this.width * 7, this.y + this.width, this.width, this.width * 3);
    rect(this.x - this.width * 2, this.y + this.width * 6, this.width * 5, this.width);
    rect(this.x - this.width, this.y + this.width * 5, this.width, this.width);
    rect(this.x + this.width * 6, this.y + this.width * 4, this.width, this.width);

    //oren
    rect(this.x + this.width * 2, this.y - this.width * 3, this.width, this.width * 2);
    rect(this.x + this.width * 3, this.y - this.width * 2, this.width, this.width);
    rect(this.x + this.width * 5, this.y - this.width * 3, this.width, this.width * 2);

    //hand (1e rechter, 2e linker)
    rect(this.x - this.width * 2, this.y + this.width * 9, this.width * 2, this.width * 2);
    rect(this.x + this.width * 3, this.y + this.width * 22, this.width * 2, this.width * 2);

    //rechterbeen
    rect(this.x + this.width * 10, this.y + this.width * 35, this.width * 2, this.width * 2);
    rect(this.xRB4, this.y + this.width * 37, this.width * 2, this.width * 2);
    rect(this.xRB5, this.y + this.width * 39, this.width * 2, this.width * 2);
    rect(this.xRB6, this.y + this.width * 41, this.width * 2, this.width * 2);

    //linkerbeen
    rect(this.x + this.width * 4, this.y + this.width * 32, this.width * 2, this.width * 2);
    rect(this.xLB4, this.y + this.width * 34, this.width * 2, this.width * 2);
    rect(this.xLB5, this.y + this.width * 36, this.width * 2, this.width * 2);
    rect(this.xLB6, this.y + this.width * 38, this.width * 2, this.width * 2);

    //staart
    rect(this.x + this.width * 12, this.y + this.width * 28, this.width, this.width * 2);
    rect(this.x + this.width * 13, this.y + this.width * 28, this.width, this.width * 4);
    rect(this.x + this.width * 14, this.y + this.width * 29, this.width, this.width * 4);
    rect(this.x + this.width * 15, this.y + this.width * 29, this.width, this.width * 6);
    rect(this.x + this.width * 16, this.y + this.width * 30, this.width, this.width * 7);
    rect(this.x + this.width * 17, this.y + this.width * 31, this.width, this.width * 8);
    rect(this.x + this.width * 18, this.y + this.width * 32, this.width, this.width * 8);
    rect(this.x + this.width * 19, this.y + this.width * 33, this.width, this.width * 8);
    rect(this.x + this.width * 20, this.y + this.width * 34, this.width, this.width * 7);
    rect(this.x + this.width * 21, this.y + this.width * 36, this.width, this.width * 4);
    rect(this.x + this.width * 22, this.y + this.width * 37, this.width, this.width * 2);



    fill(255)
    //staart
    rect(this.x + this.width * 21, this.y + this.width * 40, this.width * 3, this.width * 3);
    rect(this.x + this.width * 22, this.y + this.width * 39, this.width, this.width);
    rect(this.x + this.width * 20, this.y + this.width * 41, this.width, this.width);



    fill(this.roor, this.goor, this.boor);
    //binnenkant oor
    rect(this.x + this.width * 4, this.y - this.width * 3, this.width, this.width * 2);



    fill(0);
    //oog
    rect(this.x + this.width * 2, this.y + this.width * 2, this.width, this.width);

    //neus
    rect(this.x - this.width * 2, this.y + this.width * 5, this.width, this.width);



    fill(this.rjas, this.gjas, this.bjas)
    //jas in nek
    rect(this.x + this.width * 7, this.y + this.width * 4, this.width, this.width * 3);
    rect(this.x + this.width * 8, this.y + this.width * 5, this.width, this.width * 2);
    rect(this.x + this.width * 6, this.y + this.width * 5, this.width, this.width);

    //rest van de jas
    rect(this.x + this.width * 5, this.y + this.width * 14, this.width * 2, this.width * 3);
    rect(this.x + this.width * 5, this.y + this.width * 17, this.width * 3, this.width * 9);
    rect(this.x + this.width * 4, this.y + this.width * 24, this.width, this.width * 2);
    rect(this.x + this.width * 2, this.y + this.width * 18, this.width, this.width * 3);
    rect(this.x + this.width * 6, this.y + this.width * 26, this.width * 2, this.width * 3);
    rect(this.x + this.width * 8, this.y + this.width * 22, this.width * 4, this.width * 7);
    rect(this.x + this.width * 12, this.y + this.width * 23, this.width, this.width * 5);
    rect(this.x + this.width * 13, this.y + this.width * 25, this.width, this.width * 3);
    rect(this.x + this.width * 8, this.y + this.width * 20, this.width * 2, this.width * 2);
    rect(this.x + this.width * 10, this.y + this.width * 21, this.width, this.width);
    rect(this.x + this.width * 5, this.y + this.width * 7, this.width * 5, this.width * 13);
    rect(this.x + this.width * 3, this.y + this.width * 6, this.width * 4, this.width);
    rect(this.x + this.width, this.y + this.width * 7, this.width * 4, this.width);
    rect(this.x + this.width * 2, this.y + this.width * 8, this.width, this.width);
    rect(this.x + this.width * 4, this.y + this.width * 8, this.width, this.width);


    fill(this.rarm, this.garm, this.barm);
    //arm
    rect(this.x + this.width * 3, this.y + this.width * 8, this.width * 2, this.width);
    rect(this.x + this.width * 2, this.y + this.width * 9, this.width * 3, this.width * 5);
    rect(this.x, this.y + this.width * 14, this.width * 5, this.width * 3);
    rect(this.x + this.width * 2, this.y + this.width * 17, this.width * 3, this.width * 5);
    rect(this.x - this.width, this.y + this.width * 14, this.width, this.width * 2);
    rect(this.x, this.y + this.width * 13, this.width, this.width);
    rect(this.x - this.width * 2, this.y + this.width * 11, this.width * 2, this.width * 3);

    //broek
    rect(this.x + this.width * 3, this.y + this.width * 24, this.width, this.width * 6);
    rect(this.x + this.width * 4, this.y + this.width * 26, this.width * 2, this.width * 6);
    rect(this.x + this.width * 6, this.y + this.width * 29, this.width * 6, this.width * 4);
    rect(this.x + this.width * 7, this.y + this.width * 33, this.width * 5, this.width);
    rect(this.x + this.width * 9, this.y + this.width * 34, this.width * 3, this.width);




    fill(this.rzak, this.gzak, this.bzak);
    //zak
    //rect(this.x + this.width * 3, this.y + this.width * 6, this.width * 4, this.width * 2);
    rect(this.x, this.y + this.width * 7, this.width, this.width * 2);
    rect(this.x - this.width * 2, this.y + this.width * 8, this.width * 3, this.width);
    rect(this.x, this.y + this.width * 9, this.width, this.width * 2);
    //rect(this.x + this.width * 3, this.y + this.width * 8, this.width * 2, this.width);
    //rect(this.x + this.width * 6, this.y + this.width * 9, this.width, this.width * 5);
    //rect(this.x + this.width * 7, this.y + this.width * 7, this.width * 3, this.width * 10);
    //rect(this.x + this.width * 8, this.y + this.width * 17, this.width * 2, this.width * 3);
    rect(this.x + this.width * 10, this.y + this.width * 8, this.width * 2, this.width * 13);
    rect(this.x + this.width * 12, this.y + this.width * 9, this.width * 3, this.width * 2);
    rect(this.x + this.width * 12, this.y + this.width * 11, this.width * 5, this.width * 10);
    rect(this.x + this.width * 12, this.y + this.width * 21, this.width * 4, this.width);
    rect(this.x + this.width * 17, this.y + this.width * 14, this.width, this.width * 6);
    //rect(this.x + this.width * 5, this.y + this.width * 8, this.width * 2, this.width);
    //rect(this.x + this.width * 5, this.y + this.width * 9, this.width, this.width * 5);
    //rect(this.x + this.width * 4, this.y + this.width * 9, this.width, this.width);


    fill(this.rpak, this.gpak, this.bpak)
    //overhemd
    rect(this.x + this.width, this.y + this.width * 8, this.width, this.width * 13);
    rect(this.x + this.width * 2, this.y + this.width * 22, this.width, this.width * 2);
  }

  //draw voor de achterzijde van de player
  tekenSpelerA() {
    noStroke();
    fill(this.rjas, this.gjas, this.bjas);
    //jas
    rect(this.x - this.width, this.y + this.width * 4, this.width * 10, this.width * 2);
    rect(this.x - this.width * 2, this.y + this.width * 6, this.width * 12, this.width * 23);


    fill(this.rarm, this.garm, this.barm);
    //broek
    rect(this.x - this.width * 2, this.y + this.width * 29, this.width * 12, this.width * 6);

    //arm
    rect(this.x - this.width * 3, this.y + this.width * 6, this.width, this.width);
    rect(this.x - this.width * 4, this.y + this.width * 7, this.width * 2, this.width * 17);


    fill(this.rood, this.groen, this.blauw);
    //hoofd
    rect(this.x, this.y, this.width * 8, this.width * 4);
    rect(this.x + this.width, this.y - this.width, this.width * 6, this.width);

    //oren
    rect(this.x + this.width, this.y - this.width * 3, this.width, this.width * 2);
    rect(this.x + this.width * 2, this.y - this.width * 2, this.width, this.width);
    rect(this.x + this.width * 5, this.y - this.width * 2, this.width, this.width);
    rect(this.x + this.width * 6, this.y - this.width * 3, this.width, this.width * 2);

    //staart
    rect(this.x + this.width * 2, this.y + this.width * 28, this.width * 4, this.width * 4);
    rect(this.x + this.width, this.y + this.width * 32, this.width * 6, this.width * 7);
    rect(this.x + this.width * 2, this.y + this.width * 39, this.width * 4, this.width);

    //linkerbeen
    rect(this.x - this.width * 2, this.y + this.width * 35, this.width * 2, this.width * 6);
    rect(this.x - this.width * 2, this.yLB1, this.width * 2, this.width * 3);

    //rechterbeen
    rect(this.x + this.width * 8, this.y + this.width * 35, this.width * 2, this.width * 6);
    rect(this.x + this.width * 8, this.yRB1, this.width * 2, this.width * 3);

    //linkerhand
    rect(this.x - this.width * 4, this.y + this.width * 24, this.width * 2, this.width * 2);

    fill(255);
    //staart
    rect(this.x + this.width * 3, this.y + this.width * 39, this.width * 2, this.width * 4);
    rect(this.x + this.width * 2, this.y + this.width * 40, this.width * 4, this.width * 2);


    fill(this.rzak, this.gzak, this.bzak);
    rect(this.x + this.width * 9, this.y + this.width * 6, this.width * 2, this.width * 2);
    rect(this.x + this.width * 11, this.y + this.width * 7, this.width, this.width);
    rect(this.x + this.width * 6, this.y + this.width * 8, this.width * 6, this.width);
    rect(this.x + this.width * 3, this.y + this.width * 9, this.width * 9, this.width * 2);
    rect(this.x + this.width, this.y + this.width * 11, this.width * 11, this.width * 4);
    rect(this.x, this.y + this.width * 15, this.width * 12, this.width * 2);
    rect(this.x, this.y + this.width * 17, this.width * 11, this.width * 3);
    rect(this.x, this.y + this.width * 20, this.width * 11, this.width);
    rect(this.x + this.width * 2, this.y + this.width * 21, this.width * 6, this.width);
  }

  //draw voor de voorzijde van de player
  tekenSpelerV() {
    noStroke();
    fill(this.rpak, this.gpak, this.bpak);
    //overhemd
    rect(this.x + this.width, this.y + this.width * 5, this.width * 6, this.width * 20);


    fill(this.rarm, this.garm, this.barm);
    //broek
    rect(this.x - this.width * 2, this.y + this.width * 25, this.width * 12, this.width * 10);

    //rechterarm
    rect(this.x + this.width * 10, this.y + this.width * 6, this.width, this.width);
    rect(this.x + this.width * 10, this.y + this.width * 7, this.width * 2, this.width * 17);

    //linkerarm
    rect(this.x - this.width * 3, this.y + this.width * 9, this.width * 2, this.width * 7);


    fill(this.roor, this.goor, this.boor);
    //oren
    rect(this.x + this.width, this.y - this.width * 3, this.width, this.width * 2);
    rect(this.x + this.width * 2, this.y - this.width * 2, this.width, this.width);
    rect(this.x + this.width * 5, this.y - this.width * 2, this.width, this.width);
    rect(this.x + this.width * 6, this.y - this.width * 3, this.width, this.width * 2);


    fill(this.rood, this.groen, this.blauw);
    //hoofd
    rect(this.x, this.y, this.width * 8, this.width * 4);
    rect(this.x + this.width, this.y - this.width, this.width * 6, this.width);
    rect(this.x + this.width, this.y + this.width * 4, this.width * 6, this.width);
    rect(this.x + this.width * 2, this.y + this.width * 5, this.width * 4, this.width * 2);

    //staart
    rect(this.x + this.width * 2, this.y + this.width * 33, this.width * 4, this.width);
    rect(this.x + this.width, this.y + this.width * 34, this.width * 6, this.width * 5);
    rect(this.x + this.width * 2, this.y + this.width * 39, this.width * 4, this.width);

    //linkerbeen
    rect(this.x - this.width * 2, this.y + this.width * 35, this.width * 2, this.width * 6);
    rect(this.x - this.width * 2, this.yLB1, this.width * 2, this.width * 3);

    //rechterbeen
    rect(this.x + this.width * 8, this.y + this.width * 35, this.width * 2, this.width * 6);
    rect(this.x + this.width * 8, this.yRB1, this.width * 2, this.width * 3);

    //rechterhand
    rect(this.x + this.width * 10, this.y + this.width * 24, this.width * 2, this.width * 2);

    //linkerhand
    rect(this.x - this.width * 3, this.y + this.width * 7, this.width * 2, this.width * 2);

    fill(255);
    rect(this.x + this.width * 3, this.y + this.width * 39, this.width * 2, this.width * 4);
    rect(this.x + this.width * 2, this.y + this.width * 40, this.width * 4, this.width * 2);


    fill(this.rzak, this.gzak, this.bzak);
    rect(this.x - this.width * 3, this.y + this.width * 6, this.width * 2, this.width);
    rect(this.x - this.width * 3, this.y + this.width * 16, this.width, this.width * 5);
    rect(this.x - this.width * 4, this.y + this.width * 7, this.width, this.width * 11);


    fill(this.rjas, this.gjas, this.bjas);
    //jas
    rect(this.x - this.width * 2, this.y + this.width * 16, this.width, this.width * 13);
    rect(this.x - this.width, this.y + this.width * 27, this.width, this.width);
    rect(this.x - this.width, this.y + this.width * 4, this.width * 2, this.width * 23);
    rect(this.x + this.width * 7, this.y + this.width * 4, this.width * 2, this.width * 23);
    rect(this.x + this.width * 8, this.y + this.width * 27, this.width, this.width);
    rect(this.x + this.width * 9, this.y + this.width * 6, this.width, this.width * 23);

    fill(0);
    //ogen
    rect(this.x + this.width * 2, this.y + this.width * 2, this.width, this.width);
    rect(this.x + this.width * 5, this.y + this.width * 2, this.width, this.width);

    //neus
    rect(this.x + this.width * 3, this.y + this.width * 6, this.width * 2, this.width);
  }
  
  
  //zorgt vokor de verplaatsing/animmatie van de speler
  beweegSpeler(){
    if (keyIsDown(39)){
      this.xLB4 = this.x + this.width * 5;
      this.xLB5 = this.x + this.width * 5;
      this.xLB6 = this.x + this.width * 5;
      this.xRB4 = this.x + this.width * 11;
      this.xRB5 = this.x + this.width * 11;
      this.xRB6 = this.x + this.width * 11;
      
      this.x += this.spdR;
      this.xLB1 += this.spdR - this.spdB1;
      this.xLB2 += this.spdR - this.spdB2;
      this.xLB3 += this.spdR - this.spdB3;
         
      this.xRB1 += this.spdR + this.spdB1;
      this.xRB2 += this.spdR + this.spdB2;
      this.xRB3 += this.spdR + this.spdB3;
      
      if (this.xLB1 < this.x - this.width * 7 || this.xLB1 > this.x - this.width * 6){
      this.spdB1 = -this.spdB1;
      this.spdB2 = -this.spdB2;
      this.spdB3 = -this.spdB3;
      } 
    }
    
    else if (keyIsDown(37)){
      this.xRB1 = this.x - this.width;
      this.xRB2 = this.x - this.width;
      this.xRB3 = this.x - this.width;
      this.xLB1 = this.x - this.width * 7;
      this.xLB2 = this.x - this.width * 7;
      this.xLB3 = this.x - this.width * 7;
      
      this.x -= this.spdL;
      this.xLB4 -= this.spdL + this.spdB5;
      this.xLB5 -= this.spdL + this.spdB6;
      this.xLB6 -= this.spdL + this.spdB7;
         
      this.xRB4 -= this.spdL - this.spdB5;
      this.xRB5 -= this.spdL - this.spdB6;
      this.xRB6 -= this.spdL - this.spdB7;
      
      if (this.xLB4 < this.x + this.width * 3 || this.xLB4 > this.x + this.width * 4){
      this.spdB5 = -this.spdB5;
      this.spdB6 = -this.spdB6;
      this.spdB7 = -this.spdB7;
      } 
    }
    
    else if (keyIsDown(38)){
      this.y -= this.spdB;
      this.yLB1 -= this.spdB - this.spdB4;
      this.yRB1 -= this.spdB + this.spdB4;
      
      if (this.yRB1 < this.y + this.width * 39 || this.yRB1 > this.y + this.width * 40){
        this.spdB4 = -this.spdB4
      }
    }
     
    else if (keyIsDown(40)){
      this.y += this.spdO;
      this.yLB1 += this.spdO - this.spdB8;
      this.yRB1 += this.spdO + this.spdB8;
      
      if (this.yRB1 < this.y + this.width * 39 || this.yRB1 > this.y + this.width * 40){
        this.spdB8 = -this.spdB8
      }
    }
    
    else{
      this.xLB1 = this.x - this.width * 6;
      this.xLB2 = this.x - this.width * 6;
      this.xLB3 = this.x - this.width * 6;  
      this.xRB1 = this.x;
      this.xRB2 = this.x;
      this.xRB3 = this.x;
      
      this.xLB4 = this.x + this.width * 4;
      this.xLB5 = this.x + this.width * 4;
      this.xLB6 = this.x + this.width * 4;   
      this.xRB4 = this.x + this.width * 10;
      this.xRB5 = this.x + this.width * 10;
      this.xRB6 = this.x + this.width * 10;
      
      this.yLB1 = this.y + this.width * 39.5;
      this.yRB1 = this.y + this.width * 39.5;
      
      this.spdB1 = abs(this.spdB1);
      this.spdB2 = abs(this.spdB2);
      this.spdB3 = abs(this.spdB3);
      this.spdB4 = abs(this.spdB4);
      this.spdB5 = abs(this.spdB5);
      this.spdB6 = abs(this.spdB6);
      this.spdB7 = abs(this.spdB7);
      this.spdB8 = abs(this.spdB8);
    }  
  }
}