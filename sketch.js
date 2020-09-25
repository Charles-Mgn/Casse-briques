let x, y;
let horizontale, verticale;
let vx;
let vy;
let boule;
let nbTouches1;
let nbTouches2;
let nbTouches3;
let nbTouches4;
let nbTouches5;
let nbTouches6;
let nbTouches7;
let nbTouches8;
let nbTouches9;
let nbTouches10;
let nbTouchesGlobal;
let nbTouchesBarre;

function preload() {

}

function setup() {
    createCanvas(500,500);
    x=70;
    y=100;
    horizontale="droite";
    verticale="bas";
    vx=3;
    vy=3;
    nbTouches1=0;
    nbTouches2=0;
    nbTouches3=0;
    nbTouches4=0;
    nbTouches5=0;
    nbTouches6=0;
    nbTouches7=0;
    nbTouches8=0;
    nbTouches9=0;
    nbTouches10=0;
    nbTouchesBarre=0;
}


function draw() {
    // Fond de l'écran noir
    background(0);

    // Gestion du rebond sur les bords latéraux
    if ((x>=495)&&(horizontale="droite")) {
        horizontale="gauche";
    }
    if ((x<=5)&&(horizontale="gauche")) {
        horizontale="droite";
    }

    // Gestion du rebond en haut et en bas
    //if ((y>=495)&&(vertical="bas")) {
    //    vertical="haut";
    //}
    if ((y<=5)&&(verticale="haut")) {
        verticale="bas";
    }

    // Calcul de la nouvelle position du centre à l'horizontal
    if (horizontale=="droite") {
        x=x+vx;
    } else {
        x=x-vx;
    }

    // Calcul de la nouvelle position du centre à la vertical
    if (verticale=="bas") {
        y=y+vy;
    } else {
        y=y-vy;
    }

    // Gestion du reboud sur la barre
    if ((x>mouseX-30)&&(x<mouseX+30)&&(verticale=="bas")&&(y>465)&&(y<475)) {
        verticale="haut";
        if (nbTouchesGlobal>=20) nbTouchesBarre++;
    }

    // Rebond sur les briques 1 à 10
    if ((x>345)&&(x<405)&&(verticale=="haut")&&(y<20)&&(nbTouches1<2)) {
        verticale="bas";
        nbTouches1++;
    }

    if ((x>95)&&(x<155)&&(verticale=="haut")&&(y<20)&&(nbTouches2<2)) {
        verticale="bas";
        nbTouches2++;
    }

    if ((x>0)&&(x<55)&&(verticale=="haut")&&(y<20)&&(nbTouches3<2)) {
        verticale="bas";
        nbTouches3++;
    }

    if ((x>195)&&(x<255)&&(verticale=="haut")&&(y<20)&&(nbTouches4<2)) {
        verticale="bas";
        nbTouches4++;
    }

    if ((x>445)&&(x<500)&&(verticale=="haut")&&(y<20)&&(nbTouches5<2)) {
        verticale="bas";
        nbTouches5++;
    }

    if ((x>295)&&(x<345)&&(verticale=="haut")&&(y<20)&&(nbTouches6<2)) {
        verticale="bas";
        nbTouches6++;
    }

    if ((x>45)&&(x<105)&&(verticale=="haut")&&(y<20)&&(nbTouches7<2)) {
        verticale="bas";
        nbTouches7++;
    }

    if ((x>145)&&(x<205)&&(verticale=="haut")&&(y<20)&&(nbTouches8<2)) {
        verticale="bas";
        nbTouches8++;
    }

    if ((x>245)&&(x<305)&&(verticale=="haut")&&(y<20)&&(nbTouches9<2)) {
        verticale="bas";
        nbTouches9++;
    }

    if ((x>395)&&(x<445)&&(verticale=="haut")&&(y<20)&&(nbTouches10<2)) {
        verticale="bas";
        nbTouches10++;
    }

    fill(255,255,255,255);

    // Dessin de la balle
    ellipse(x,y,10,10);

    // Dessin barre du bas
    rect(mouseX-25,470,50,10);

    // Dessin des briques
    if (nbTouches1<2) {
        if (nbTouches1==0) {
            fill(255,0,0,255);
        } else {
            fill(255,0,0,170);
        }
        rect(350,5,50,10);
    }

    if (nbTouches2<2) {
        if (nbTouches2==0) {
            fill(255,0,0,255);
        } else {
            fill(255,0,0,170);
        }
        rect(100,5,50,10);
    }

    if (nbTouches3<2) {
        if (nbTouches3==0) {
            fill(255,0,0,255);
        } else {
            fill(255,0,0,170);
        }
        rect(0,5,50,10);
    }

    if (nbTouches4<2) {
        if (nbTouches4==0) {
            fill(255,0,0,255);
        } else {
            fill(255,0,0,170);
        }
        rect(200,5,50,10);
    }

    if (nbTouches5<2) {
        if (nbTouches5==0) {
            fill(255,0,0,255);
        } else {
            fill(255,0,0,170);
        }
        rect(450,5,50,10);
    }

    if (nbTouches6<2) {
        if (nbTouches6==0) {
            fill(255,0,0,255);
        } else {
            fill(255,0,0,170);
        }
        rect(300,5,50,10);
    }

    if (nbTouches7<2) {
        if (nbTouches7==0) {
            fill(255,0,0,255);
        } else {
            fill(255,0,0,170);
        }
        rect(50,5,50,10);
    }

    if (nbTouches8<2) {
        if (nbTouches8==0) {
            fill(255,0,0,255);
        } else {
            fill(255,0,0,170);
        }
        rect(150,5,50,10);
    }

    if (nbTouches9<2) {
        if (nbTouches9==0) {
            fill(255,0,0,255);
        } else {
            fill(255,0,0,170);
        }
        rect(250,5,50,10);
    }

    if (nbTouches10<2) {
        if (nbTouches10==0) {
            fill(255,0,0,255);
        } else {
            fill(255,0,0,170);
        }
        rect(400,5,50,10);
    }

    // Déclaration nbTouchesGlobal
    nbTouchesGlobal=nbTouches1+nbTouches2+nbTouches3+nbTouches4+nbTouches5+nbTouches6+nbTouches7+nbTouches8+nbTouches9+nbTouches10;

    // Mode infini
    if (nbTouchesGlobal>=20) {
        text("MODE INFINI DEBLOQUE !",170,270);
        text("NOMBRE DE TOUCHE",170,290);
        text(nbTouchesBarre,310,290)
        vx=3+nbTouchesBarre/2;
        vy=3+nbTouchesBarre/2;
    }

    // Fun
    fill(255,255,255,255);
    if ((nbTouchesGlobal>0)&&(nbTouchesGlobal<2)) text("Bonjour.", 220,250);
    if ((nbTouchesGlobal>2)&&(nbTouchesGlobal<4)) text("Vous allez bien ?", 200,250);
    if ((nbTouchesGlobal>4)&&(nbTouchesGlobal<6)) text("Quoi de beau ces derniers jours ?", 160,250);
    if ((nbTouchesGlobal>6)&&(nbTouchesGlobal<8)) text("...", 250,250);
    if ((nbTouchesGlobal>8)&&(nbTouchesGlobal<10)) {
        fill(60,60,60,255);
        text("il parle beaucoup celui là...", 170, 250);
    }
    if ((nbTouchesGlobal>10)&&(nbTouchesGlobal<12)) {
        fill(255,255,255,255);
        text("Hein quoi ? Dit quelque chose ? Non j'ai rien dit...", 130,220);
        text("Sinon, ça va le jeu ?", 200, 250);
    }
    if ((nbTouchesGlobal>12)&&(nbTouchesGlobal<14)) text("Pas trop chiant ?", 210,250);
    if ((nbTouchesGlobal>14)&&(nbTouchesGlobal<16)) text("... C'est pas bien de mentir ...", 160,250);
    if ((nbTouchesGlobal>16)&&(nbTouchesGlobal<18)) text("Vous savez bien que c'est le meilleur !", 150,250);
    if (nbTouchesGlobal==18) text("Vous devriez donner des bitcoins à son créateur...", 130,250);
    if (nbTouchesGlobal==19) {
        fill(60,60,60,255);
        text("Ca gonflera encore plus son ego...", 160,250);
    }

    if (nbTouchesBarre>0) text("Ca va s'accelerer !",210,100);

    // Gagné
    if (nbTouchesGlobal>=20) {
        fill(0,255,0,255);
        text("GAGNE !",220,250);
    }

    // Perdu
    if ((nbTouchesGlobal>=0)&&(nbTouchesGlobal<=15)&&(y>495)) {
        fill(0);
        rect(0, 100, 500, 400);
        fill(255, 0, 0, 255);
        text("PERDU !", 220, 250);
        }
    if ((nbTouchesGlobal>15)&&(nbTouchesGlobal<20)&&(y>495)) {
        fill(0);
        rect(0,100,500,400);
        fill(255,0,0,255);
        text("SI PROCHE !", 210,250);
    }
}