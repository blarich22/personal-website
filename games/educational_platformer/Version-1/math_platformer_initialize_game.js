

var objects = {}; //insert here
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


  


// function startGame4() {
    
//     // objects = {
//     //     protagonist : new object(30,30,"red",30,170),
//     //     obstacle1 : new object(10, 30, "brown", 200, 170),
//     //     landscape : new object(width, 30, "green", 0, 200)
//     //   }
//     objects = {

//         //obstacle1 : new object({width: 20, height: 150, color: "brown", x: 200, y: 50, moveable : true}),
//         // obstacle1 : new object({width: width*0.2, height: 30, color: "blue", x: 20+width*0.2*4, y: 170, moveable : true}),
//         // obstacle1 : new object({width: width*0.2, height: 30, color: "blue", x: 20+width*0.2*1, y: 170, moveable : true}),
//         // obstacle1 : new object({width: width*0.2, height: 30, color: "blue", x: 20+width*0.2*2, y: 170, moveable : true}),
//         // obstacle1 : new object({width: width*0.2, height: 30, color: "blue", x: 20+width*0.2*3, y: 170, moveable : true}),
//         landscape : new object(landscape),
//         protagonist : new protagonist(protagonistArg),
//       }
  
      
//       level = 4;
//       myGameArea.start();
// }

function startGame3() {
  
  
  clearInterval(myGameArea.interval);

  level = 3
  
  objects = {
    protagonist : new Protagonist(protagonistArg),
    // obstacle1 : new object(30, 30, "brown", 100, 170),
    // obstacle2 : new object(30, 60, "brown", 115, 140),
    // obstacle3 : new object(120, 120, "brown", 130,  100),
    // obstacle4 : new object(60, 30, "brown", 300, 190),
    // obstacle5 : new object(30, 120, "brown", 450, 80),
    landscape : new object(landscape)
  } 
  
  //apply upgrades

//WHERE TO PUT THIS FUNCTION/REWRITE IT
//upgrades
// upgradeSpeed();


myGameArea.start();

}

{/* <script src="game_objects.json"/> */}


function getY(h,l) {return (l - h)}  

landscape = {w: screenW, h: 30, clr: "green", x: 3, y: getY(30, screenH)}
function tree(arguments) {
  defaultValTree = [10, 30, "brown", 200, 170]
  
    h = ((arguments.h != null) ? arguments.h : defaultValTree[1]);
    w = ((arguments.w != null) ? arguments.w : defaultValTree[0]);
    clr = ((arguments.clr != null) ? arguments.clr : defaultValTree[2]);
    x = ((arguments.x != null) ? arguments.x : defaultValTree[3]);
    y = ((arguments.y != null) ? arguments.y : getY(h, landscape.y));
    
  return {w: w, h: h, clr: clr, x: x, y: y};
  
}
medTree = {w: 10, h: 90, clr: "brown", x: 200, y: getY(90, landscape.y)};
protagonistArg = {w: 30, h: 30, clr: "red", x: 30, y: getY(30, landscape.y)}


function startGame1(level) {
  //upgradeJump();  
  clearInterval(myGameArea.interval);
  
  switch (level) {

    case 1: 
    console.log("check one")
    objects = { 
      landscape : new object(landscape),
      protagonist : new Protagonist(protagonistArg),
      smallTree: new object(new tree({h: 50, x: 100, w: 50})), 
      smallTree2: new object(new tree({h: 50, x: 250, w: 50})),
      smallTree3: new object(new tree({h: 50, x: 400, w: 50})),
      // smallTree4: new object(new tree({h: 30, x: 280, width: 70})),
      // smallTree5: new object(new tree({h: 50, x: 300})),
      // smallTree6: new object(new tree({h: 50, x: 320})),
      // smallTree7: new object(new tree({h: 50, x: 340})),
      // // smallTree4: new object(new tree({h: 40})) 
    }
      break;
    
    case 2: 
    console.log("check 2")
    objects = { 
      landscape : new object(landscape),
      protagonist : new Protagonist(protagonistArg),
      smallTree: new object(new tree({h: 20, x: 50, w: 50})), 
      smallTree2: new object(new tree({h: 30, x: 100, w: 50})),
      smallTree3: new object(new tree({h: 100, x: 150, w: 200})), 
    }
      break;

    case 3:
      objects = { 
        landscape : new object(landscape),
        protagonist : new Protagonist(protagonistArg),
        smallTree: new object(new tree({h: 20, x: 50, w: 50})), 
        smallTree2: new object(new tree({h: 120, x: 100, w: 50})),
        smallTree3: new object(new tree({h: 20, x: 150, w: 200})), 
      }
    break;
  
    default:
      break;
  }


  myGameArea.start();
  
}

function startGame4() {

  level = 5;
  switch (level) {
    case 5:
    objects = { 
      landscape : new object(landscape),
      protagonist : new Protagonist(protagonistArg),
      smallTree : new object(smallTree)
    }
      

      
      break;
      
      default: 
      break;
    }
    myGameArea.start()

  //("check")
  //objects.protagonist.x = 30;
  //objects.protagonist = new object(protagonistArg);
  //(objects)
  //objects.landscape = new object(landscape);
  // objects = {
    
    //   landscape : new object(landscape),
    //   protagonist : new protagonist(protagonistArg),
    //   smallTree : new object(medTree)
    // }
    
    //console.log(objects);
    
    
    // (objects.obstacle1.height)
    //myGameArea.start();
    
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
  
  
  
  function updateGameArea() {
    
    getAnswer();
    updateTextBox();
    myGameArea.reset();
    
    for (let ind in objects ) { 
      objects[ind].redraw();
    }
    
    objects.protagonist.animate();
    
    
    p = objects.protagonist;
    wonLevel = (p.x) >= (screenW - p.width);
    //level++;
    //startGame1();
    //  (wonLevel) ? clearInterval(this.myGameArea.interval) : 0
   // (wonLevel) ? (p.x = 30) : 0
   console.log(wonLevel);
   
    (wonLevel) ? (startGame1(level++)) : 0;
  }

  