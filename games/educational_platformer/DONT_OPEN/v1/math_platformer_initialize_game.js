

objects = {}; //insert here
screenW = 600;
screenH = 230;


var level = 1;



// function moveFalse(direction) {

//     if (direction === 'r') { state.right = false;} 
//     else if (direction === 'l') {state.left = false;
//   } else {
      
//   }
//   }
//     function moveTrue(direction) {
  
//       if (direction === 'r') { state.right = true;} 
//       else if (direction === 'l') {state.left = true; } 
//       else {
//       objects.protagonist.jumpState = true;
//          objects.protagonist.currentVeloc = objects.protagonist.JumpVeloc; 
//          objects. protagonist.y -= this.objects.protagonist.JumpVeloc;
//     }
  
//  }
  
 function returnObject(arr) {

 }


  


function startGame4() {
    
    // objects = {
    //     protagonist : new object(30,30,"red",30,170),
    //     obstacle1 : new object(10, 30, "brown", 200, 170),
    //     landscape : new object(width, 30, "green", 0, 200)
    //   }
    objects = {

        obstacle1 : new object({width: 20, height: 150, color: "brown", x: 200, y: 50, moveable : true}),
        // obstacle1 : new object({width: width*0.2, height: 30, color: "blue", x: 20+width*0.2*4, y: 170, moveable : true}),
        // obstacle1 : new object({width: width*0.2, height: 30, color: "blue", x: 20+width*0.2*1, y: 170, moveable : true}),
        // obstacle1 : new object({width: width*0.2, height: 30, color: "blue", x: 20+width*0.2*2, y: 170, moveable : true}),
        // obstacle1 : new object({width: width*0.2, height: 30, color: "blue", x: 20+width*0.2*3, y: 170, moveable : true}),
        landscape : new object({width: screenW, height: 80, color: "green", x: 0, y: 200, moveable : false}),
        protagonist : new protagonist({width: 30, height: 30, color: "red", x: 30, y: 170}),
      }
  
      
      level = 4;
      myGameArea.start();
}

function startGame3() {

level = 3

objects = {
  protagonist : new protagonist(30,30,"red",30,170),
  obstacle1 : new object(30, 30, "brown", 100, 170),
  obstacle2 : new object(30, 60, "brown", 115, 140),
  obstacle3 : new object(120, 120, "brown", 130,  100),
  obstacle4 : new object(60, 30, "brown", 300, 190),
  obstacle5 : new object(30, 120, "brown", 450, 80),
  landscape : new object(screenW, 20, "green", 0, 200)
} 

//apply upgrades
upgradeJump();

  //upgrades
 // upgradeSpeed();


myGameArea.start();

}

{/* <script src="game_objects.json"/> */}


landscape = {w: screenW, h: 30, clr: "green", x: 3, y: y(30, screenH)}
smallTree = {w: 10, h: 30, clr: "brown", x: 200, y: y(30, landscape.y)};
medTree = {w: 10, h: 90, clr: "brown", x: 200, y: y(90, landscape.y)};
protagonistArg = {w: 30, h: 30, clr: "red", x: 30, y: y(30, landscape.y)}

function y(h,l) {return (l - h)}

function startGame1() {

  objects = {
     
    landscape : new object(landscape),
    protagonist : new protagonist(protagonistArg),
    smallTree : new object(smallTree)
  }


level = 1;
  myGameArea.start();

}

function startGame(level) {


//console.log("check")

//objects.protagonist = new protagonist(protagonistArg);
//objects.obstacle1 = new object(mediumTree);
//console.log(objects)
//objects.landscape = new object(landscape);



// console.log(objects.obstacle1.height)
myGameArea.start();

}


var myGameArea = {
    canvas : document.createElement("canvas"), //here is the element canvas
    start : function() { //takes the above canvas elt and adds attributes
      this.canvas.width = screenW;
      this.canvas.height = screenH;
      this.context = this.canvas.getContext("2d");
      this.fillStyle = "blue" //need to fix
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);//why?
      this.interval = setInterval(updateGameArea, 2);   
    },
    reset : function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  } 
  
 
 // wonLevel = (p.x) >= (screenW - p.width);

function updateGameArea() {
  
    getAnswer();
    updateTextBox();
    myGameArea.reset();
    
     for (let ind in objects ) { 
      objects[ind].redraw();
     }

     objects.protagonist.animate();
  
     checkWin();  
  } 
  
  function checkWin() {
    p = objects.protagonist; 
    wonLevel = (p.x) >= (screenW - p.width);
   // console.log(this.myGameArea.interval);
   // (wonLevel) ? clearInterval(this.myGameArea.interval) : 0
    (wonLevel) ? startGame(level++) : 0;
           }

  
