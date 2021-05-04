var drumImg,drum,pianoImg,piano,brassImg,brass,guitarImg,guitar
var handImg,hand,canvas
var startImg,start,stopImg,stop
var SERVE=0
var PLAY=1
var gameState=SERVE
var edges
var brassSound,pianoSound,guitarSound,drumSound

function preload(){
    handImg=loadImage("hand.png")
    drumImg=loadImage("drum.png")
    pianoImg=loadImage("piano.png")
    brassImg=loadImage("brass.png")
    guitarImg=loadImage("guitar.png")
    startImg=loadImage("start.png")
    stopImg=loadImage("stopSound.png")

    brassSound=loadSound("brassSound.wav")
    pianoSound=loadSound("pianoSound.wav")
    guitarSound=loadSound("guitarBeat.wav")
    drumSound=loadSound("drumBeat.wav")
}

function setup(){
   canvas= createCanvas(windowWidth,windowHeight)

    drum=createSprite(150,630,20,20)
    drum.addImage("drum_play",drumImg)
    drum.scale=0.6

    
    piano=createSprite(drum.width+100,630,20,20)
    piano.addImage("piano_play",pianoImg)
    piano.scale=0.6
   

    brass=createSprite(piano.width+500,630,20,20)
    brass.addImage("brass_play",brassImg)
    brass.scale=0.6
    

    guitar=createSprite(brass.width+900,540,20,20)
    guitar.addImage("guitar_play",guitarImg)
    guitar.scale=0.6
   

    start=createSprite(750,465,20,20)
    start.addImage("startButton",startImg)
    start.scale=0.6

    hand=createSprite(random(20,750),100,40,40)
    hand.addImage("pressed_hand",handImg)
    hand.velocityX=4
    hand.velocityY=5
    hand.scale=0.3

    stop=createSprite(750,365,20,20)
    stop.addImage("stop_sound",stopImg)
    stop.scale=0.6
    stop.visible=false

    hand.depth=stop.depth
    hand.depth=hand.depth+1
}

function draw(){
    background("grey")
    
    if(gameState==SERVE){
    start.visible=true
    fill("red")
    textSize(100)
    stroke("blue")
    strokeWeight(30)
    textFont("Comic Sans Ms")
    text("Music Instruments",300,height/2)
    hand.visible=false
    }
    if(mousePressedOver(start)){
        start.destroy()
        gameState=PLAY
        
    }
if(gameState==PLAY){
    hand.visible=true
    stop.visible=true
    edges=createEdgeSprites()
    hand.bounceOff(edges)
   
    
    
    
    
    if(hand.isTouching(brass)){
        brassSound.play()
        hand.bounceOff(brass)
    }
    if(hand.isTouching(piano)){
        hand.bounceOff(piano)
     pianoSound.play()
    
    }
    if(hand.isTouching(drum)){
        hand.bounceOff(drum)
     drumSound.play()
    }
    if(hand.isTouching(guitar)){
        hand.bounceOff(guitar)
     guitarSound.play()
    
    }
    if(mousePressedOver(stop)&&gameState==PLAY){
        brassSound.stop()
        guitarSound.stop()
        pianoSound.stop()
        drumSound.stop()
       
    }
}

    drawSprites();
    
}


  
