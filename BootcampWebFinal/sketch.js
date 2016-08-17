var newStar = [] ;
var whiteStarImage ;
var noFillStarImage ;
var endScreenImage ;
var holder = true ;
var counter = 498 ;
var counter2 = 0 ;
var randoNum ;
var stage = true ;
var arrayHolder = [] ;
var x ;
var stageNum = 1 ;
var gamePlay = true ;
var starFill ;
var keyBool = true ;
var starNumber ;
var someNumber ;
var ending ;
var begin = 0 ;
var canvas ;
var newHolder = true ;


function setup() {
  canvas = createCanvas(500, 500) ;
  canvas.parent("myP5") ;
  background(0) ;
   whiteStarImage = loadImage("assets/whitestar.png") ;
   noFillStarImage = loadImage("assets/noFill_Star.png") ;
   endScreenImage = loadImage("assets/endScreen.png") ;

  starFill = loadAnimation("assets/whitestar.png", "assets/noFill_Star.png") ;
   
  starFill.looping = false ;
  // starFill.frameDelay = 10000 ;

    for(var i = 0 ; i < 500 ; i+=2) {
      newStar[i] = createSprite(width/2 - 100, height/2) ;
      newStar[i].addImage("normal", noFillStarImage) ;
      newStar[i].addAnimation("fill", starFill) ;
      
      newStar[i+1] = createSprite(width/2+100, height/2) ;
      newStar[i+1].addImage("normal", noFillStarImage) ;
      newStar[i+1].addAnimation("fill", starFill) ;
    }
    textAlign(CENTER) ;
    fill(255) ;
    text("Do you want to play? If so, press your mouse button.", width/2, height/2) ;
    
}


function draw() {
  if(begin === true) {
    if(gamePlay === true){
      
      background(0) ;
      textAlign(CENTER) ;
      fill(255) ;
      text("Stage: " + stageNum, width/2, 50 ) ;
      text("1", 150, height/2-50) ;
      text("2", 350, height/2-50) ;
      
      if(holder === false) {
      if(keyWentDown('1')) {
        newStar[0].changeAnimation("fill") ;
        if(arrayHolder[x] == 1) {
          x++ ;
          print("this happened")
        }else {
          gamePlay = false ;
        }
      }else {
        newStar[counter].changeAnimation("normal") ;
      }
      
      if(keyWentDown('2')) {
        newStar[1].changeAnimation("fill") ;
        if(arrayHolder[x] == 2) {
          x++ ;
          print("or this") ;
        }else {
          gamePlay = false ;
        }
      }else {
        newStar[counter+1].changeAnimation("normal") ;
      }
      someNumber = counter + 2 ;
      newStar[someNumber].remove() ;
      newStar[someNumber+1].remove() ;
    }
      
      if(holder === true && stage === true) { 
      randoNum = floor(random(0,2)) ;
      println("the random number is " + randoNum) ;
      arrayHolder[counter2] = randoNum + 1 ;
      starNumber = counter + randoNum ;
      newStar[starNumber].changeAnimation("fill") ;
  
            
        stage = false ;
        if(counter < 498) {
          stageNum = stageNum + 1 ;
        }
        counter = counter - 2 ;
        counter2 = counter2 + 1 ;
      }
      
     
       
      drawSprites() ;
      keyPressed() ;
    } else if (gamePlay === false) {
      background(0) ;
      fill(255) ;
      x = counter2 ;
      text("Your sequence:" , width/2, 100) ;
        for(var i = 0 ; i < x ; i++) {
          text(arrayHolder[i], (width/2)-((x*11)/2)+i*11, 130) ;
        }
      text("You Lose", width/2, height/2-10) ;
      text("Game Over", width/2, height/2+10) ;
    }
  }
}

function keyPressed() {
  // if(keyBool === true) {
    if(keyWentDown("i")) {
        holder = false ;
        x = 0 ;
        keyBool = false ;
        println("user can input") ;
    }
    if(keyWentDown("o")) {
        holder = true ;
        stage = true ;
        keyBool = false ;
    }
    
  
  if(key == 'c') {
    keyBool = true ;
  }
  
  if(keyWentDown == 'y') {
    begin = true ;
  }
}

function mousePressed() {
  begin = true ;
}
