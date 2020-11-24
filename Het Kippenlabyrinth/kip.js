class kip {
  constructor(x, y, width, rood, groen, blauw, spd) {
    this.x = x;
    this.y = y;
    this.ypos = y
    //width is de breedte van de pixels
    this.width = width;
    this.rood = rood;
    this.groen = groen;
    this.blauw = blauw;
    this.rpoot = rood - 40;
    this.gpoot = groen - 40;
    this.bpoot = blauw - 40;
    this.spd = spd
  }
  
  //tekent de kip en de animatievan de kip
  tekenKip() {
    noStroke();
    fill(this.rood, this.groen, this.blauw);
    //lijf
    rect(this.x, this.y, this.width * 8, this.width * 15);
    rect(this.x + this.width, this.ypos + this.width * 15, this.width * 8, this.width);
    rect(this.x - this.width, this.y + this.width, this.width, this.width * 13);
    rect(this.x - this.width * 2, this.y + this.width * 2, this.width, this.width * 11);
    rect(this.x - this.width * 3, this.y + this.width * 3, this.width, this.width * 5);
    rect(this.x + this.width * 8, this.y + this.width, this.width, this.width * 14);
    rect(this.x + this.width * 9, this.y + this.width * 2, this.width, this.width * 13);
    rect(this.x + this.width * 10, this.y + this.width * 3, this.width, this.width * 11);
    rect(this.x + this.width * 11, this.y + this.width * 4, this.width, this.width * 9);
    rect(this.x + this.width * 12, this.y + this.width * 5, this.width, this.width * 8);
    rect(this.x + this.width * 13, this.y + this.width * 6, this.width, this.width * 6);
    rect(this.x + this.width * 14, this.y + this.width * 5, this.width, this.width * 6);
    rect(this.x + this.width * 15, this.y + this.width * 5, this.width, this.width * 2);
    
    fill(this.rood, this.groen - 20, this.blauw - 20);
    //schaduw
    rect(this.x + this.width, this.y + this.width * 9, this.width * 2, this.width);
    rect(this.x, this.y + this.width * 10, this.width, this.width);
    
    rect(this.x + this.width * 6, this.y + this.width * 8, this.width, this.width);
    rect(this.x + this.width * 11, this.y + this.width * 8, this.width, this.width);
    rect(this.x + this.width * 7, this.y + this.width * 9, this.width * 4, this.width);

    fill(225, 0 ,0);
    //hanenkam
    rect(this.x + this.width, this.y - this.width * 2, this.width * 5, this.width * 2);
    rect(this.x + this.width * 2, this.y - this.width * 3, this.width * 3, this.width);
    rect(this.x + this.width * 3, this.y - this.width * 4, this.width * 2, this.width);
    
    fill(255, 255, 0);
    //snavel
    rect(this.x - this.width, this.y + this.width * 6, this.width * 3, this.width);
    rect(this.x, this.y + this.width * 5, this.width * 2, this.width);
    
    //poot
    rect(this.x + this.width * 2, this.ypos + this.width * 16, this.width * 2, this.width);
    rect(this.x + this.width * 6, this.ypos + this.width * 16, this.width * 2, this.width);
    
    fill(0);
    //oog
    rect(this.x + this.width, this.y + this.width * 3, this.width, this.width);
    rect(this.x + this.width * 4, this.y + this.width * 3, this.width, this.width);

    //beweegKip
    this.y += this.spd;
    if (this.y > this.ypos + this.width || this.y < this.ypos){
        this.spd = -this.spd
    }
  }

  pakKip(){
    if(this.x - this.width * 3 <= Speler.x + Speler.width * 9 && this.x + this.width * 15 >= Speler.x - Speler.width * 3 && (this.y - this.width * 4 <= Speler.y + Speler.width * 42 && this.y + this.width * 16 >= Speler.y - Speler.width * 3)){
      chickenCount += 1;
      pak = true;
      this.x = -1000
    }

  }
}