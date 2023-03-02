var trexSprite, trexAnimacao;
var soloSprite, soloImagem;
//é aqui que cria a variável
var soloInvisivel;


//nessa função, carrega-se arquivos de mídia
function preload() {
    //é aqui que carrega a animação
    trexAnimacao = loadAnimation("trex1.png","trex2.png","trex3.png");
  soloImagem = loadImage("solo.png");
}


function setup() {
    createCanvas(600, 200);
    //é aqui que cria as sprites
    soloSprite = createSprite(300,190,600,20)
    soloSprite.addImage(soloImagem);
    trexSprite = createSprite(50,170,50,50);
    trexSprite.addAnimation("correndo",trexAnimacao);
    trexSprite.scale = 0.5;
    soloInvisivel = createSprite(300,210,600,20);
    soloInvisivel.visible = false;
    console.log("Hello World :]");
}


function draw() {
    //pinta o fundo de uma cor
    background("white");
    //verifica se a pessoa apertou a tecla espaço
    if(keyDown("space") && trexSprite.y > 150){
        //dá velocidade para o trex voar
        trexSprite.velocityY = -10;
    }
    //esse código dá gravidade para o trex cair
    trexSprite.velocityY += 0.8;
    
    soloSprite.velocityX = -3;

    trexSprite.collide(soloInvisivel);

    if (soloSprite.x < 0) {
      soloSprite.x = 300
    }
    
    

    drawSprites();
}