var hasDocked=fasle

function preload(){
s1=loadImage("spacecraft1.png")
s2=loadImage("spacecraft2.png")
s3=loadImage("spacecraft3.png")
s4=loadImage("spacecraft4.png")
bg=loadImage("spacebg.jpg")
iss=loadImage("iss.png")
}


function setup() {
  createCanvas(600,350);
 spaceraft = createSprite(285, 240, 50, 50)
 spaceraft.addImage(s1)
 spaceraft.scale=0.15
 isss=createSprite(330,130,50,50)
 isss.addImage(iss)
 isss.scale=0.25
}
function draw() {
  background(bg); 
  if(!hasDocked){
    spaceraft.x=spaceraft.x+random(-1,1)
  
  if(keyDown("UP_ARROW")){
spaceraft.y=spaceraft.y-2

  }
  if(keyDown("LEFT_ARROW")){
    spaceraft.addImage(s3)
    spaceraft.x=spaceraft.x-2
    
      }
      if(keyDown("RIGHT_ARROW")){
        spaceraft.addImage(s2)
        spaceraft.x=spaceraft.x+2
        
          }
          if(keyDown("DOWN_ARROW")){
            spaceraft.addImage(s1)
            spaceraft.y=spaceraft.y+2
            
              }
            }
            if(spaceraft.y<=(isss.y+70)&&spaceraft.x<=(isss.x-10)) {
            hasDocked=true
            textSize(25)
            fill("white")
             text("Docking succesfull",200,300)
            }
  drawSprites();
}