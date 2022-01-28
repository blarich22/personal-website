
  statUpdated = false;

  
let answer = 0;
//check for answer
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

  if (level == 4) {
    direction.innerHTML = " solve this problem to move the tree. a tree weights 1 ton. If chopped in half, how much does a half weights (in lbs)"
    if (answer == 1000) {
      direction.innerHTML = "strength increased!"
      objects.obstacle1.moveable = true
      //answer = -1;
    }
  }
  
  
  if (level == 1) {
  direction.innerHTML= " get to the end of this platform"; 
  }
  
  if (level == 2) {
  if(you.x <= 40) {
  direction.innerHTML="That was easy, but you can't jump over this one";
  } 
  if ((you.x > 40) && (answer == 0)) {
  direction.innerHTML="you need to level up your jumping; do this by doing math. \n Here's one: Marsha jumped 5ft more than John. Together, they jumped 15ft. How much did John jump?"; 
  }
  
  if (answer == 10) {
    //upgrade jump velocity
   upgradeJump();
   direction.innerHTML="congrats, you can jump higher! Try it again";
   inputBox = document.querySelector("input");
   inputBox.value = "";
   answer = -1;
                                          
   
  } 
  
  if (you.x >=width) {
    direction.innerHTML="This is how you'll get through the copious obstacles in this game"
  } 
  }
  
  if (level == 3) {
    direction.innerHTML = "But can you make this jump?"
  
    if (you.x > 130) {
      direction.innerHTML = 'you need to power your SPEED to make this jump, try this!'

      if ((statUpdated == false) && (answer == 4)) { //make sure it only happens once
    //   upgradeSpeed();
    //   statUpdated = true;
      }
    
  
  
    //   direction.innerHTML = 'yes! try the jump again'
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
  //       direction.html = lvl4[index]
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
