// // new character!
// function character(width, height, color, x, y) {
//    //may not work on firefox -> https://www.w3schools.com/jsref/event_key_keycode.asp

//     //object dimensions
//     this.width = width;
//     this.height = height;
//     this.x = x;
//     this.y = y;
//     this.cx = (2*this.x+this.width)/2.0;
//     this.cy = (2*this.y+this.height)/2.0;

//     this.redraw = function() {
//     this.ctx = myGameArea.context;
//     this.ctx.fillStyle = color;
//     this.ctx.fillRect(this.x, this.y, this.width, this.height);
//     this.cx = (2*this.x+this.width)/2.0;
//     this.cy = (2*this.y+this.height)/2.0;
//     this.prevY = this.y;
//      }

//     //for your protagonist, only!

//     this.gravity = 10.0/ 3.0;
//     this.JumpVeloc = 20;
//     this.currentVeloc = 0.0;
//     this.jumpState = false;
//     this.walkingSpeed = 5;
//     this.prevY =this.y;




//       //move your character 
//      this.moveLeft = function() {this.x-=(this.walkingSpeed); }
//      this.moveUp = function() {this.y-=(this.walkingSpeed);}
//      this.moveRight = function() {this.x+=(this.walkingSpeed);}
//      this.moveDown = function() {this.y+=(this.walkingSpeed);}


//     //state for each key pressed
//     this.keyPressed = { 
//       right : false,
//       left : false,
//       up: false,
//       down: false,
//       spacebar : false,
//       dblspacebar : false, //clean up
//     };


//     this.setDir = function(dir, boolean) {
//       this.currentObjectState.forEach(elt => {
//         if (elt[0] === dir) {
//           elt[1] = boolean;
//         //  event.codee.log(this.currentObjectState)
//           return 1;
//         }
//       })
//     }

//     this.animate = function() {


//     //which key is pressed? set true or false
//       window.addEventListener('keydown', function(event) {
//         state = objects.protagonist.keyPressed;
//         protagonist = objects.protagonist;

//     if (event.code == "ArrowLeft") {state.left = true; };
//     if (event.code == "ArrowUp") {state.up = true};
//     if (event.code == "ArrowRight") {state.right = true};
//     if (event.code == "ArrowDown") {state.down = true;}; 


// // heightBeforeJump = this.canMoveHorizontally().y
//     if ((event.code === "Space") && ((state.dblspacebar)))  {
//          objects.protagonist.currentVeloc = objects.protagonist.JumpVeloc; 
//         state.spacebar = false;
//         state.dblspacebar = false;
//       //   objects.protagonist.y -= objects.protagonist.currentVeloc;


//      }; 


//     //jump if spacebar pressed - do nothing until jump has finised (avoid multiple presses)
//     if (((event.code == "Space") && (objects.protagonist.jumpState == false)) && (state.spacebar == false))  {
//        objects.protagonist.jumpState = true;
//        state.spacebar = true;
    
//        objects.protagonist.currentVeloc = objects.protagonist.JumpVeloc; 
//        objects.protagonist.y -= objects.protagonist.currentVeloc;
//     }; 

//     //jump in the air once

//   })

//     window.addEventListener('keyup', function(event) {   
//       state = objects.protagonist.keyPressed;
//     if (event.code == "ArrowLeft") {state.left = false;};
//     if (event.code == "ArrowUp") {state.up = false};
//     if (event.code == "ArrowRight") {state.right = false};
//     if (event.code == "ArrowDown") {state.down = false;}; 


//     if (state.spacebar == true) {
//         state.dblspacebar = true;
//     }
// })
    

//     //are you standing still?
//     this.isAirborne = function() {

//     for (let i in objects ) {     
//       if ((Math.abs(this.cx - objects[i].cx) < ((objects[i].width+this.width)/2.0))
//        &&
//         ((this.y + this.height) >= objects[i].y)
//        && !(objects[i]==objects['protagonist'])
//        ) { // don't look at obj 1
//         return objects[i].y;
//       }
//     }
//    return true;
// }

//     //if not, you must be moving! 
//     if ((this.isAirborne() == true)) {
//       this.currentVeloc -= this.gravity;
//       this.y -= this.currentVeloc;
//     } else {
//       this.y = this.isAirborne() - this.height; //reset height/end jump
//       this.jumpState = false;
//       this.keyPressed.dblspacebar = false;
//       this.keyPressed.spacebar = false;
//       this.currentVeloc = 0.0;
//     }

//     //am i moving horizontally?
//     this.canMoveHorizontally = function() {
//     //where are you standing on/or are you falling?
//     for (let i in objects) {     
//       if ((Math.abs(this.cx - objects[i].cx) <= ((objects[i].width+this.width)/2.0)) 
//       &&
//         (Math.abs(this.cy - objects[i].cy) < ((objects[i].height+this.height)/2.0)) 
//       && !(objects[i]==objects['protagonist'])) { // don't look at obj 1
//       return objects[i];
//       }
//     }
//    return true;
// }

//  //if not, in which direction?
//   if ((object = this.canMoveHorizontally()) != true) {
//    if ((this.cx - object.cx) < 0) {
//      this.keyPressed.right = false;
//    } else {
//     this.keyPressed.left = false;
//    }
//   }






//     if (this.keyPressed.left) {
//         this.moveLeft();       
//        }

//        if (this.keyPressed.up) {
//         // this.moveUp();       
//        }

//        if (this.keyPressed.right) {
//         this.moveRight();       
//        }

//        if (this.keyPressed.down) {
//         // this.moveDown();       
//        }

//       }

//   }



function object(characteristics) {
    //may not work on firefox -> https://www.w3schools.com/jsref/event_key_keycode.asp

    //object length dimensions
    this.width = characteristics.w;
    this.height = characteristics.h;
    this.x = characteristics.x;
    this.y = characteristics.y;
    this.cx = (2 * this.x + this.width) / 2.0;
    this.cy = (2 * this.y + this.height) / 2.0;
    this.prevY = this.y;
    this.prevX = this.x;

    
    //object motions
    this.gravity = 10.0/ 3.0 / 25.0;
    this.currentVeloc = 0.0;
    this.walkingSpeed = 5;
    this.passiveSpeed = 0;
    
    this.motions = {
    left : false,
    right : false, 
    falling: false,
    jumping: false

    }

    this.setMotionLeft = function(v) {this.motions.left = (v == "f") ? (0) : (1)}
    this.setMotionRight = function(v) {this.motions.right = (v == "f") ? (0) : (1)}


    //interaction states (ground, wall, etc.)
    this.interactions = {
    ycoll : {
        hasCollided : false, 
        fromWhere: "none", 
        object: null, 
        push: false},
    xcoll : {
        hasCollided : false, 
        fromWhere: "none", 
        object: null, 
        push : false, 
        isOverlap : false}
    }   

    this.moveable = characteristics.moveable;

    this.setYHelper = function(v) { return ((v > 0) ? ("below") : ("mid")) };
    this.setPosY = function(v) { return (v < 0) ? ("above") : (this.setYHelper(v)) };
    this.setXHelper = function(v) { return ((v > 0) ? ("left") : ("mid")) };
    this.setPosX = function(v) { return (v < 0) ? ("right") : (this.setXHelper(v)) };

    
    this.coll = function() {
        for (let i in objects) {
            isStanding = this.interactions.xcoll.fromWhere;
            collideFrom = this.interactions.ycoll.fromWhere;
            xmaxproximity = (objects[i].width+this.width)/2;
            ymaxproximity = (objects[i].height+this.height)/2;
            xproximity = this.cx - objects[i].cx;
            yproximity = this.cy - objects[i].cy;
            xproximityPrev = this.prevX - objects[i].x
            yproximityPrev = this.prevY - objects[i].y
            xgapPrev = Math.abs(xproximityPrev) - xmaxproximity;
            ygapPrev = Math.abs(yproximityPrev) - ymaxproximity;
            xgap = Math.abs(xproximity) - xmaxproximity; //closenness to ma prox
            ygap = Math.abs(yproximity) - ymaxproximity;
            xgapPrevAbs = Math.abs(xgapPrev);
            ygapPrevAbs = Math.abs(ygapPrev);
            xgapAbs = Math.abs(xgap);
            ygapAbs = Math.abs(ygap);

            ////////////////////////////////////// UNUSED CODE - DELETE SOON!!!!
            //detect objects below or in front
            //check if collide with objec
            //calculate trajectory
            //if more left/right true = add +6
            //if falling true = subject by velocity ()
            //check if collision occured, else keep moving
            negSpeedX = (this.motions.left) ? (-6) : (0) 
            posSpeedX = (this.motions.right) ? (6) : (0)
            netX = this.x + negSpeedX + posSpeedX;
            if (this.motions.falling) {
            velocityY = this.currentVeloc; 
            velocityY -= this.gravity;
            netY = this.y - this.currentVeloc;
        } else { 
            netY = this.y;
        }
            newCX = (netX + this.width) * 0.5;
            newCY = (netY + this.width) * 0.5;
           // console.log(newCX, newCY);
            //////////////////////////////////////////
            //////////////////////////////////////////

            if (!(objects[i]==this)) {

            //WHEN I TOUCH A MOVEABLE OBJECT, it moves! WRONG!!!!!
            //TO DO: Detect collisions from above!!!!
            //BASE CASE: What if ygap == xgap ????

            //is it closer to the top or to the sides?
             this.interactions.ycoll.hasCollided = (xgap < 0) && (ygap <= 0) && (ygap > xgap);
             ycollision = this.interactions.ycoll.hasCollided;
             aboveOrBelow =  (ycollision == true);
             ypos = ((aboveOrBelow) ? ("above") : ("none"));
             this.interactions.ycoll.fromWhere = ypos; 

            this.adjustUp = function() {this.y = objects[i].y - this.height}
            this.adjustLeft = function() {this.x = objects[i].x - this.width}
            this.adjustRight = function() {this.x = objects[i].x + objects[i].width}


            //is there a collistion, if so, in which direction
            horizontalColl = this.interactions.xcoll.hasCollided;
            this.interactions.xcoll.hasCollided = (xgap == 0) && (ygap < 0) && (ygap < xgap);
            this.interactions.xcoll.isOverlap =  (xgap < 0) && (ygap < 0) && (ygap < xgap);
            xcollision = this.interactions.xcoll.hasCollided || this.interactions.xcoll.isOverlap;
            leftOrRight = (xcollision == true);            
            xpos = ((leftOrRight) ? (this.setPosX(xproximity)) : ("none"));
            this.interactions.xcoll.fromWhere = xpos;

            //REDUNDANCY HERE! DEAL WITH IT!!
            horizontalOverlap = (ygap < 0) && (xgap < 0) && (ygap < xgap);
            verticalOverlap = (ygap < 0) && (xgap < 0) && (ygap > xgap);
            bothOverlap = (ygap < 0) && (xgap < 0) && (ygap == xgap);
           

            pos = (horizontalOverlap || verticalOverlap) ? (this.whichOverlap()) : ("none"); 
            this.whichOverlap = function() {return ((horizontalOverlap) ? (xpos) : (ypos))}  

            if (! objects[i].moveable) {
            switch (pos) {
            case "above": this.adjustUp(); break;
            case "right": this.adjustLeft(); this.setMotionRight("f"); break;
            case "left": this.adjustRight(); this.setMotionLeft("f");  break;
            case "both": break;
            case "none": break; 
                break;
             }
            } else {
                switch (pos) {
                    case "right": this.adjustLeft(); this.setMotionRight("t"); objects[i].setMotionRight("t"); break;
                    case "left":  break; 
                }
            }
        }  
            
        }  

 
        //     if ((ygap < 0) && (xgap < 0)) {
        //         above 
        //         // (collFromAbove) (this.y = objects[i].y-this.height) : 0;
        //         // (xgapPrev >=  0) && (ygapPrev  < 0) ? (this.interactions.xcoll.hasCollided = true) : 0;
        //         // if (this.interactions.xcoll.hasCollided) 
        //           //  this.x = objects[i].x-this.width) : 0;
        //     //if prev position was above object and in its width, it should readjust up
        //     //if prev was left, then readjust left and so on...
        //     }
            // if (xgap <= 0) {
            //         (ygap < 0) ? ((xproximity < 0) ? (collideFrom = "right") : (collideFrom = "left")) : (collideFrom = "none")
            //     } if (xgap < 0) {
            //         (ygap == 0) ? ((yproximity < 0) ? (isStanding = "above") : (isStanding = "below")) : (isStanding = "none"); 
            //         (ygap < 0) ? ((Math.abs(xproximity) > Math.abs(yproximity)) ? (this.push = true) : (this.pressdown = true)) : 0
            //     }

            //     (ygap == 0) ? isStanding = "none" : 0 


                // if (this.push) {
                //     yproximity = false;
                // }
            
            //     console.log(this.interactions.xcoll.fromWhere, this.interactions.ycoll.fromWhere, objects[i]);

          //  }
                    // console.log(ycoll.fromWhere, xcoll.fromWhere, objects[i])
               //  else if (xover) && (ygap < 0)) {
                //     xcoll.fromWhere = (xproximity > 0)
        
                           //   }              // console.log("interaction w/" + " " + objects[i]);
                // if (ygapAbs >= xgapAbs) {
                //     console.log("move back horizontally")
                //     coll.hasCollided = true;
                //     if (xproximity > 0) {coll.fromWhere = "right" }
                //     else if (xproximity < 0) {coll.fromWhere = "left" }

                // } else {console.log("moveback ver");ycollsion.fromWhere = "above"}
            // } else {
                // xcoll.fromWhere = ycoll.fromWhere = "none";
            // }
         //   }
         //   return true;
        }

        

        


    
    //check for colls
    this.canMoveHorizontally = function() {
    //where are you standing on/or are you falling?

    


    var hasCollided = false;
    for (let i in objects) {

            coll = this.interactions.xcoll
            xmaxproximity = (objects[i].width+this.width)/2;
            ymaxproximity = (objects[i].height+this.height)/2;
            xproximity = this.cx - objects[i].cx;
            yproximity = this.cy - objects[i].cy;

     //console.log(xproximity, xmaxproximity, yproximity, ymaxproximity, objects[i]);
     if ((Math.abs(xproximity) <= xmaxproximity) && (Math.abs(yproximity) < ymaxproximity) && !(objects[i]==this)) { // don't look at obj 1
                hasCollided = true;
                coll.object = objects[i];

                if ((objects[i].moveable == true) && (Math.abs(xproximity) < xmaxproximity)) {

                    

                if (xproximity < 0) {
                    coll.fromWhere = "right"; 
                    objects[i].x = this.x + this.width; //adjust the position so they align
                } else if (xproximity > 0) {
                    coll.fromWhere = "left"; 
                    objects[i].x = this.x - objects[i].width;
                   }
            //    console.log(coll.fromWhere)
                }
                
               
            }
        }

        if (hasCollided != true) {this.interactions.xcoll.fromWhere = "none"}
        // console.log(this.interactions.xcoll.fromWhere)
    }


 
    //redraw
    this.redraw = function () {
        this.ctx = myGameArea.context;
        this.ctx.fillStyle = characteristics.clr;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.cx = (2 * this.x + this.width) / 2.0;
        this.cy = (2 * this.y + this.height) / 2.0;

        this.nextX = 0;
        this.nextY = 0;
        this.updatePrev = this.motions.rights || this.motions.left;
        (this.updatePrev) ? (this.prevY = this.y) : (this.prevX = this.x)
        
        //does it move on its own
        this.motions.right = this.motions.left = !(this.passiveSpeed == 0);
        this.motions.right = (this.passiveSpeed > 0)
        this.motions.left = (this.passiveSpeed < 0)

    };

    

}

    
    /////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////
    




























    
    function Protagonist(characteristics) {
        object.call(this, characteristics);
       
       // console.log(this);
        
    //   console.log(this.cy)
        //state for each key pressed
        this.keyPressed = { 
            right : false,
            left : false,
            up: false,
            down: false,
            spacebar : {
                num : 0
            },
            dblspacebar : false, //clean up
        };
        
        
        this.jumpState = false;
        this.JumpVeloc = 4;

  
        
        
        
        
        // //interaction states (ground, wall, etc.)
        // var interactions = {
        //     ycoll : {fromWhere : "", object: null},
        //     xcoll : {fromWhere: "", object:  null}, //standing
        // }
        
        //move your character 
        // this.moveLeft = function() {this.x-=(this.walkingSpeed); }
        // this.moveUp = function() {this.y-=(this.walkingSpeed);}
        // this.moveRight = function() {this.x+=(this.walkingSpeed);}
        // this.moveDown = function() {this.y+=(this.walkingSpeed);}
        
       // coll = this.interactions.xcoll;
        //m i moving horizontally?
        // this.canMoveHorizontally = function() {
        
        
        //     //where are you standing on/or are you falling?
        //     for (let i in objects) {
                
        // //space between objects
        // //space between objects
        // xmaxproximity = (objects[i].width+this.width)/2;
        // ymaxproximity = (objects[i].height+this.height)/2;
        // xproximity = this.cx - objects[i].cx;
        // yproximity = this.cy - objects[i].cy;
        // if ((Math.abs(xproximity) <= xmaxproximity) && (Math.abs(yproximity) < ymaxproximity) && !(objects[i]==this)) { // don't look at obj 1
        //     interactions.xcoll.object = objects[i];
        //     if (xproximity < 0) {interactions.xcoll.fromWhere = "right"; this.keyPressed.right = false;} 
        //     else {interactions.xcoll.fromWhere = "left"; this.keyPressed.left = false;}
        //   // console.log(interactions.xcoll.fromWhere)
        // } else {
        //   //  console.log("ceck")
        //   //  interactions.xcoll.fromWhere = "none";
        // }
        // }
        // }
        
      //  console.log(this, "test")
//which key is pressed? set true or false
        window.addEventListener('keydown', function(event) {
        state = objects.protagonist.keyPressed;
        protagonist = objects.protagonist
      // var protagonist = window.objects.protagonist;
       //var state = protagonist.keyPressed;


        if (event.code == "ArrowLeft") {state.left = true; };
        if (event.code == "ArrowUp") {state.up = true};
        if (event.code == "ArrowRight") {state.right = true};
        if (event.code == "ArrowDown") {state.down = true;}; 
        if (event.code == "Space") {state.spacebar.num = 1;} 

        // objects.protagonist.keyPressed.right = true;
        // console.log(objects.protagonist.keyPressed.right);


        // heightBeforeJump = this.canMoveHorizontally().y
        if ((event.code === "Space") && ((state.dblspacebar)))  {
            objects.protagonist.currentVeloc = objects.protagonist.JumpVeloc; 
        state.spacebar = false;
        state.dblspacebar = false;
        //   objects.protagonist.y -= objects.protagonist.currentVeloc;


        }; 






    })

        //jump if spacebar pressed - do nothing until jump has finised (avoid multiple presses)
        
        //jump in the air once
        
        
        window.addEventListener('keyup', function(event) {   
            state = objects.protagonist.keyPressed;
            if (event.code == "ArrowLeft") {state.left = false;};
            if (event.code == "ArrowUp") {state.up = false};
            if (event.code == "ArrowRight") {state.right = false};
            if (event.code == "ArrowDown") {state.down = false;}; 
            
            
            if (state.spacebar == true) {
                state.dblspacebar = true;

            }
        })
        
        
        
        //are you standing still?
        this.isAirborne = function() {
            
            for (let i in objects) {
                //object interactions
                xmaxproximity = (objects[i].width+this.width)/2;
                ymaxproximity = (objects[i].height+this.height)/2;
                xproximity = this.cx - objects[i].cx;
                yproximity = this.cy - objects[i].cy;
                
                
                if ((Math.abs(xproximity) < xmaxproximity) &&
                (Math.abs(yproximity) <= ymaxproximity)  && 
                !(objects[i]==this)) { // don't look at obj 1
                    
                    // this.interactions.ycoll.fromWhere = "above"
                    this.interactions.ycoll.object = objects[i]; 
                    return objects[i];
                } else {
                    //    this.interactions.ycoll.fromWhere = "none"
                }
            }
            return true;
        }
        
        this.animate = function() {   
            
            if (!this.isAirborne() & this.keyPressed.spacebar.num == 1) {
                console.log("test");
               // this.keyPressed.spr++;
            }
            
            if (this.keyPressed.left) {
                // if (this.interactions.xcoll.fromWhere == "left") {
                    //     if (this.interactions.xcoll.object.moveable == true) {
                        //     this.interactions.xcoll.object.motions.left = this.motions.left = true; 
                        //     } else {
                            //         this.motions.left = false;
                            //     }
                            // } else {
                                this.motions.left = true;
                                // }
                            } else {
                                this.motions.left = false;
                            }
                            
                            
            if (this.keyPressed.up) {
                                // this.moveUp();      
                            }
                            
                            console.log(this.keyPressed.spacebar);
                            
                            
                            //if right is pressed, and no obstacle(s)
                            
                            if (this.keyPressed.right) {
                            
                                
                                //     if (this.interactions.xcoll.fromWhere == "right") {
                                    //         if (this.interaction.ycoll.object.moveable == true) {
                                        //            this.interaction.ycoll.object.motions.right = this.motions.right = true; 
                                        //         }
                                        //    } else {
                                            this.motions.right = true;
                                            //     } 
                                        } else {
                                            this.motions.right = false;
                                        }
                                        
                                        
                                        
                                        if (this.keyPressed.down) {
                                            // this.moveDown();       
                                        }

                                        if (this.keyPressed.spacebar.num == 1) {
                                            this.motions.jumping = true;
                                            console.log("check");
                                        } 

                                        
                                        this.coll();
                                        
                                        if (true)  {
                                        // objects.protagonist.jumpState = true;
                                        // state.spacebar = true;
                                        
                                        //console.log(objects.protagonist.y);
                                    }; 
                                    
                                    //CAN DOUBLE JUMP INF WHEN TOUCHING OBJECTS FIX!!!!
                                    //if not, you must be moving! 
                                    //CHANGE FALLING STATE TO 
                                    if ((state = this.isAirborne()) == true) {
                                        this.currentVeloc -= this.gravity;
                                        this.y -= this.currentVeloc;
                                    } else {
                                        // console.log(state)
                                        
                                        if (state.y > this.y) {
                                            this.y = state.y - this.height; //reset height/end jump
                                        }
                                        this.jumpState = false;
                                        this.keyPressed.dblspacebar = false;
                                        this.keyPressed.spacebar.num = 0; //reset spacebar count
                                        this.currentVeloc = 0.0;

                                    }
                                    
                                    for (let i in objects) { //do a loop to find all of the connected objects, and then move all of them together.
                                        if (objects[i].motions.right) {objects[i].x+=1}
                                        else if (objects[i].motions.left) {objects[i].x-=1}
                                        else if (objects[i].motions.jumping) {
                                            objects.protagonist.currentVeloc = objects.protagonist.JumpVeloc;  
                                            objects.protagonist.y -= objects.protagonist.currentVeloc;
                                            this.motions.jumping = false;
                                          //  this.keyPressed.spacebar++;
                                        }
//move landscape
//  (objects[i] != this && objects.protagonist.motions.right) ? (objects[i].x-=6) : 0;
}




    
    
  
}




    }


    //do a loop to find all objects connected, 
    //if one have positive V, all objects share that V
    //they all should also be moveable, else, don't move
    //all objects have motion positive

