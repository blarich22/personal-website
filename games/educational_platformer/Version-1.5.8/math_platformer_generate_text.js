
statUpdated = false;

text = [
  "use the arrow keys and spacebar to get to end!",
  "lets try something a bit harder...",
  "you're getting good"
]
let answer = 0;
//check for answer

i = 0; //which directions?
function displayDialog(lvl) {
  directions.innerHTML(lvl[i]);
  i++;
}


function getAnswer() {

inputBox = document.querySelector("input");
inputBox.addEventListener('keydown', function(event) {
  if (event.keyCode == 13) {
   answer = event.target.value;
  }
});

return answer; 
}

function updateTextBox() {

  this.ctx = myGameArea.context;
  ctx.font = "22px Arial";
  you = objects.protagonist;
  directions.innerHTML = text[level+1]; //dialog shown corresponds to lvl + 1


  //UNUSED CODE - DELETE 2/25 IF NOT USED
 //************************************************* */

  // if (level == 4) {
  //   directions.innerHTML = " solve this problem to move the tree. a tree weights 1 ton. If chopped in half, how much does a half weights (in lbs)"
  //   if (answer == 1000) {
  //     directions.innerHTML = "strength increased!"
  //     objects.obstacle1.moveable = true;
  //     //answer = -1;
  //   }
  // }
  //**************************************************** */
  

  if (level == 2) {
  // if(you.x <= 40) {
  // directions.innerHTML="That was easy, but you can't jump over this one";
  // } 
  // if ((you.x > 40) && (answer == 0)) {
  // directions.innerHTML="you need to level up your jumping; do this by doing math. \n Here's one: Marsha jumped 5ft more than John. Together, they jumped 15ft. How much did John jump?"; 
  // }
  
  // if (answer == 10) {
  //   //upgrade jump velocity
  //  upgradeJump();
  //  directions.innerHTML="congrats, you can jump higher! Try it again";
  //  inputBox = document.querySelector("input");
  //  inputBox.value = "";
  //  answer = -1;
                                          
   
  // } 
  
  // if (you.x >=300) {
  //   directions.innerHTML="This is how you'll get through the copious obstacles in this game"
  // } 
  }
  
  if (level == 3) {
    directions.innerHTML = "But can you make this jump?"
  
    if (you.x > 130) {
      directions.innerHTML = 'you need to power your SPEED to make this jump, try this!'

      if ((statUpdated == false) && (answer == 4)) { //make sure it only happens once
    //   upgradeSpeed();
    //   statUpdated = true;
      }
    
  
  
    //   directions.innerHTML = 'yes! try the jump again'
    //   question = document.createElement("img")
    //   question = setAttribute("src", "speedquestion"l
  
    //   inputBox.value = "";
    //   statUpdated = true;
      
  
  }
  }
  } 

  
  // switch (level) {
  //   case 4:
  //     while (level == 4) {
  //       lvl4 = ["la", "lalala"];
  //       directions.html = lvl4[index]
  //     }
  //     index++;
  //     index % lvl4.length();
      
  //     break;
  
  //   default:
  //     break;
  // }


  

//}

//  window.addEventListener("onclick", updateTextBox());

  
  //index = 0;