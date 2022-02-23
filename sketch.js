
var backgroundImg;
var gato;
var mouse;

function preload() {
    animacaoFinal = loadImage(cat1.png);
    cat2 = loadImage(cat2.png);
    cat3 = loadImage(cat3.png);
    catSentado = loadImage(cat4.png);

    mouse1=loadImage(mouse1.png);
    mouse2=loadImage(mouse2.png);
    rato_provocando = loadImage(mouse3.png);
    mouse4 = loadImage(mouse3.png);

    garden = loadImage(garden.png);
}

function setup(){
    createCanvas(1000,800);
   
    cat1 = createSprites(870,600);
    
    cat.addAnimation("catSentado",cat1 );

}

function draw() {

    background(garden);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem

    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
    cat.velocityX = 0;
   cat.addAnimation("animacaoFinal",cat3);
   cat.changeAnimation("animacaoFinal");

   cat.x = 300;
   cat.scale = 0.2;

    }
    drawSprites();



}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
 if(KeyCode === LEFT_ARROW){

 mouse.addAnimation("rato_provocando",mouse1);
 mouse.changeAnimation("rato_provocando");
 mouse.frameDelay = 25;

 cat.velocityX = -5;
 }


}
