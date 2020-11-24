class heg {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    //width is de breedte van de pixels
    this.width = 3;
    this.rood = 65;
    this.groen = 157;
    this.blauw = 120; 
    
    this.rblad = this.rood - 50;
    this.gblad = this.groen - 50;
    this.bblad = this.blauw - 50;
  }

  tekenVheg() {     
    if(this.x - this.width <= Speler.x + Speler.width * 7 && this.x >= Speler.x + Speler.width * 7 && this.y <= Speler.y + Speler.width * 34 && this.y + this.width * 17 >= Speler.y + Speler.width * 34){
      Speler.spdR = 0
      Speler.spdO = Speler.spd;
      Speler.spdL = Speler.spd;
      Speler.spdB = Speler.spd;
      totaalR -= 1;
    }
    else if(this.x + this.width * 15 <= Speler.x - Speler.width * 3 && this.x + this.width * 16 >= Speler.x - Speler.width * 3 && this.y <= Speler.y + Speler.width * 34 && this.y + this.width * 17 >= Speler.y + Speler.width * 34){
      Speler.spdL = 0
      Speler.spdO = Speler.spd
      Speler.spdR = Speler.spd;
      Speler.spdB = Speler.spd;
      totaalL -= 1;
    }
    else if (this.x - this.width <= Speler.x + Speler.width * 5 && this.x + this.width * 16 >= Speler.x + Speler.width * 5 && this.y <= Speler.y + Speler.width * 42 && this.y + this.width >= Speler.y + Speler.width * 42){
      Speler.spdO = 0
      Speler.spdB = Speler.spd
      Speler.spdR = Speler.spd;
      Speler.spdL = Speler.spd;
      totaalO -= 1;
    }
    
    noStroke();
    fill(this.rood, this.groen, this.blauw);
    //heg
    rect(this.x + this.width, this.y, this.width * 15, this.width * 17);

    fill(this.rblad, this.gblad, this.bblad);
    //schaduw links
    rect(this.x, this.y, this.width, this.width * 17);

    rect(this.x + this.width, this.y + this.width, this.width, this.width * 2);
    rect(this.x + this.width, this.y + this.width * 4, this.width, this.width);
    rect(this.x + this.width, this.y + this.width * 6, this.width, this.width * 3);
    rect(this.x + this.width, this.y + this.width * 11, this.width, this.width);
    rect(this.x + this.width, this.y + this.width * 14, this.width, this.width * 2);

    rect(this.x + this.width * 2, this.y, this.width, this.width);
    rect(this.x + this.width * 2, this.y + this.width * 2, this.width, this.width);
    rect(this.x + this.width * 2, this.y + this.width * 5, this.width, this.width * 2);
    rect(this.x + this.width * 2, this.y + this.width * 10, this.width, this.width);
    rect(this.x + this.width * 2, this.y + this.width * 14, this.width, this.width);
    rect(this.x + this.width * 2, this.y + this.width * 16, this.width, this.width);

    rect(this.x + this.width * 3, this.y + this.width * 3, this.width, this.width);
    rect(this.x + this.width * 3, this.y + this.width * 8, this.width, this.width);
    rect(this.x + this.width * 3, this.y + this.width * 11, this.width, this.width);
    rect(this.x + this.width * 3, this.y + this.width * 13, this.width, this.width);
    rect(this.x + this.width * 3, this.y + this.width * 16, this.width, this.width);

    rect(this.x + this.width * 4, this.y + this.width * 5, this.width, this.width);
    rect(this.x + this.width * 4, this.y + this.width * 14, this.width, this.width);

    //schaduw rechts
    rect(this.x + this.width * 16, this.y, this.width, this.width * 17);

    rect(this.x + this.width * 15, this.y, this.width, this.width * 2);
    rect(this.x + this.width * 15, this.y + this.width * 3, this.width, this.width);
    rect(this.x + this.width * 15, this.y + this.width * 5, this.width, this.width * 2);
    rect(this.x + this.width * 15, this.y + this.width * 8, this.width, this.width * 2);
    rect(this.x + this.width * 15, this.y + this.width * 11, this.width, this.width);
    rect(this.x + this.width * 15, this.y + this.width * 13, this.width, this.width * 3);

    rect(this.x + this.width * 14, this.y + this.width, this.width, this.width);
    rect(this.x + this.width * 14, this.y + this.width * 5, this.width, this.width);
    rect(this.x + this.width * 14, this.y + this.width * 9, this.width, this.width);
    rect(this.x + this.width * 14, this.y + this.width * 11, this.width, this.width * 2);
    rect(this.x + this.width * 14, this.y + this.width * 15, this.width, this.width * 2);

    rect(this.x + this.width * 13, this.y + this.width * 2, this.width, this.width);
    rect(this.x + this.width * 13, this.y + this.width * 4, this.width, this.width);
    rect(this.x + this.width * 13, this.y + this.width * 8, this.width, this.width);
    rect(this.x + this.width * 13, this.y + this.width * 14, this.width, this.width);

    rect(this.x + this.width * 12, this.y + this.width * 11, this.width, this.width);
  }

  tekenHheg() {
    if(this.x <= Speler.x + Speler.width * 7 && this.x + this.width >= Speler.x + Speler.width * 7 && this.y <= Speler.y + Speler.width * 34 && this.y + this.width * 17 >= Speler.y + Speler.width * 34)
    {
      Speler.spdR = 0
      Speler.spdO = Speler.spd
      Speler.spdL = Speler.spd;
      Speler.spdB = Speler.spd;
      totaalR -= 1;
    }
    
    else if(this.x + this.width * 16 <= Speler.x - Speler.width * 3 && this.x + this.width * 17 >= Speler.x - Speler.width * 3 && this.y <= Speler.y + Speler.width * 34 && this.y + this.width * 17 >= Speler.y + Speler.width * 34)
    {
      Speler.spdL = 0
      Speler.spdO = Speler.spd
      Speler.spdR = Speler.spd;
      Speler.spdB = Speler.spd;
      totaalL -= 1;
    }
    
    else if (this.x <= Speler.x + Speler.width * 5 && this.x + this.width * 17 >= Speler.x + Speler.width * 5 && this.y - this.width <= Speler.y + Speler.width * 42 && this.y >= Speler.y + Speler.width * 42)
    {
      Speler.spdO = 0
      Speler.spdR = Speler.spd;
      Speler.spdL = Speler.spd;
      Speler.spdB = Speler.spd;
      totaalO -= 1;
    }   
    
    else if (this.x <= Speler.x + Speler.width * 5 && this.x + this.width * 17 >= Speler.x + Speler.width * 5 && this.y + this.width * 16 >= Speler.y + Speler.width * 34 && this.y + this.width * 15 <= Speler.y + Speler.width * 34)
    {
      Speler.spdB = 0
      Speler.spdR = Speler.spd;
      Speler.spdL = Speler.spd;
      Speler.spdO = Speler.spd;
      totaalB -= 1;
    }
    
    
    
    
    noStroke();
    fill(this.rood, this.groen, this.blauw);
    //heg
    rect(this.x, this.y + this.width, this.width * 17, this.width * 15);

    fill(this.rblad, this.gblad, this.bblad);
    //schaduw boven
    rect(this.x, this.y, this.width * 17, this.width);

    rect(this.x + this.width, this.y + this.width, this.width * 2, this.width);
    rect(this.x + this.width * 4, this.y + this.width, this.width, this.width);
    rect(this.x + this.width * 6, this.y + this.width, this.width * 3, this.width);
    rect(this.x + this.width * 11, this.y + this.width, this.width, this.width);
    rect(this.x + this.width * 14, this.y + this.width, this.width * 2, this.width);

    rect(this.x, this.y * this.width * 2, this.width, this.width);
    rect(this.x + this.width * 2, this.y + this.width * 2, this.width, this.width);
    rect(this.x + this.width * 5, this.y + this.width * 2, this.width * 2, this.width);
    rect(this.x + this.width * 10, this.y + this.width * 2, this.width, this.width);
    rect(this.x + this.width * 14, this.y + this.width * 2, this.width, this.width);
    rect(this.x + this.width * 16, this.y + this.width * 2, this.width, this.width);
    
    rect(this.x + this.width * 3, this.y + this.width * 3, this.width, this.width);
    rect(this.x + this.width * 8, this.y + this.width * 3, this.width, this.width);
    rect(this.x + this.width * 11, this.y + this.width * 3, this.width, this.width);
    rect(this.x + this.width * 13, this.y + this.width * 3, this.width, this.width);
    rect(this.x + this.width * 16, this.y + this.width * 3, this.width, this.width);

    rect(this.x + this.width * 5, this.y + this.width * 4, this.width, this.width);
    rect(this.x + this.width * 14, this.y + this.width * 4, this.width, this.width);

    //schaduw onder
    rect(this.x, this.y + this.width * 16, this.width * 17, this.width);

    rect(this.x, this.y + this.width * 15, this.width * 2, this.width);
    rect(this.x + this.width * 3, this.y + this.width * 15, this.width, this.width);
    rect(this.x + this.width * 5, this.y + this.width * 15, this.width * 2, this.width);
    rect(this.x + this.width * 8, this.y + this.width * 15, this.width * 2, this.width);
    rect(this.x + this.width * 11, this.y + this.width * 15, this.width, this.width);
    rect(this.x + this.width * 13, this.y + this.width * 15, this.width * 3, this.width);

    rect(this.x + this.width, this.y + this.width * 14, this.width, this.width);
    rect(this.x + this.width * 5, this.y + this.width * 14, this.width, this.width);
    rect(this.x + this.width * 9, this.y + this.width * 14, this.width, this.width);
    rect(this.x + this.width * 11, this.y + this.width * 14, this.width * 2, this.width);
    rect(this.x + this.width * 15, this.y + this.width * 14, this.width * 2, this.width);

    rect(this.x + this.width * 2, this.y + this.width * 13, this.width, this.width);
    rect(this.x + this.width * 4, this.y + this.width * 13, this.width, this.width);
    rect(this.x + this.width * 8, this.y + this.width * 13, this.width, this.width);
    rect(this.x + this.width * 14, this.y + this.width * 13, this.width, this.width);

    rect(this.x + this.width * 11, this.y + this.width * 12, this.width, this.width);
  }
}