//4/19 - 123-1pm created code to move, not working
//3:30-4:15pm - trouble with collision
//4/20 - found issue, need to track elts being collided
       //10:30-11am - block slows down upon collision, working on groups now
       //11:30-11:55am - trying to get add/remove objects "in collision arr "
//4/21 - 7-730am discovered bug in find index func
//4/21 - 7:30-8am pushing block slows you down
// 8-9am - option to upgrade diff abilities implemented
//9-9:55am - blocks can be moved with sufficient "strenght"


//6/4 4pm: need to be able to detect if hit from above or below
//6/5 7: issues with proximity funcion
//6/9: 6:30-7pm spent time reading through code
function gameobject(attr) {
    //may not work on firefox -> https://www.w3schools.com/jsref/event_key_keycode.asp

    //name
    this.name = attr.n

 

    //length/height
    this.width = attr.w;
    this.height = attr.h;
    //coordinates

    this.x = attr.x;
    this.y = attr.y;
    this.cx = (2 * this.x + this.width) / 2.0;
    this.cy = (2 * this.y + this.height) / 2.0;
    
    //physics
    this.gravity = 10.0/ 3.0 / 25.0 / 3;
    
    this.velocity = 0
    
    this.moveable = true   //to change later 

    //strenght stats
    this.weight = this.width * this.height
    this.strength = 200000;  //note: largest object hsa to be les than 158
    //attr.moveable;
    
    
    //functions
    this.setMotionLeft = function(v) {
        this.motions.left = ((v == "f") ? (0) : (1))
    }
    
    this.setMotionRight = function(v) {
        this.motions.right = ((v == "f") ? (0) : (1))
    }
    
    //is the object on left or right of object
    this.setYHelper = function(v) { 
        return ((v > 0) ? ("below") : ("mid")) 
    };
    this.setPosY = function(v) { return (v < 0) ? ("above") : (this.setYHelper(v)) };
    this.setXHelper = function(v) { return ((v > 0) ? ("left") : ("mid")) };
    this.setPosX = function(v) { return (v < 0) ? ("right") : (this.setXHelper(v)) };

    //how far apart are two objects, horizontally or vertically
    function calculateGap(a, b, dimension, axis) {
        maxwidth = (a[dimension] + b[dimension])/2
        distance = a[axis] - b[axis]
        return Math.abs(distance) - maxwidth
    }


        
    //curr- current object
    //object - other object
    function setCollisionState(curr, object) {
                xgap = calculateGap(curr, object, "width", "cx") //closenness to ma prox
                ygap = calculateGap(curr, object, "height", "cy")

                if (object.name == "st1") {
                    //  console.log(xgap)
                }

                
                for (let x of [curr, object]) {
                    // console.log(x)
                    x.interactions.ycoll.hasCollided = (xgap < 0) && (ygap == 0) && (ygap > xgap);
                    x.interactions.ycoll.currentOverlap = (xgap < 0) && (ygap < 0);
                    x.interactions.xcoll.hasCollided = (xgap == 0) && (ygap < 0) && (ygap < xgap);
                    x.interactions.xcoll.currentOverlap = (xgap < 0) && (ygap < 0);
                }
            
                    
                        
    }

    
    
    //objects

    //is it moving?
    this.motions = {
    left : false,
    right : false,  
    falling: false,
    jumping: false
    }

    //interaction states (ground, wall, etc.)
    this.interactions = {
    ycoll : {
        hasCollided : false, 
        fromWhere: "none", 
        object: null, 
        push: false,
        currentOverlap: false,
        collidedWith : [],
        overlappedWith: []
    },
    xcoll : {
        hasCollided : false, 
        fromWhere: "none", 
        object: null, 
        push : false, 
        currentOverlap : false, //currently overlapping with an object (use in for loop)
        hasOverlapped : false, 
        collidedWith : [],
        overlappedWith: []
        }
    }   

     //If overlap, adjust current object to be touching
    //  this.adjustUp = function() {this.y = levelObjects[i].y - this.height}
     this.moveLeft = function(pushing, pushed) {pushed.x = pushing.x - pushed.width}
     this.moveRight = function(pushing, pushed) {pushed.x = pushing.x + pushing.width}


     //miscellaneous functions 
     
    this.findElt = function(arr, elt) {
        found = false
        index = "none" //if splice element is called, then default is to return it
        for (let x in arr) {
                     
            if (arr[x].name == elt.name) {
                found = true
                index = x
            }
        }

        return {found: found, index: index}
    }

          
        //7/17 3:30pm - found issue with detect objects     
    function detectObjects(curr, object) {
                
        elt = curr.findElt(curr.interactions.xcoll.overlappedWith, object)

        //  console.log(curr.interactions.xcoll.currentOverlap)
        if (curr.interactions.xcoll.currentOverlap) {
            if (elt.found == false) {
                // console.log(elt.found)
                curr.interactions.xcoll.overlappedWith.push(object)       
            }  
        } else {
            if (elt.found == true) {
                // console.log(curr.interactions.xcoll.overlappedWith)
                curr.interactions.xcoll.overlappedWith.splice(elt.index,1)
               
            }
        }

    
        hasOverlapped = curr.interactions.xcoll.overlappedWith.length > 0
        curr.interactions.xcoll.hasOverlapped = hasOverlapped
        // object.interactions.xcoll.hasOverlapped = hasOverlapped
       
      
    }


     //7/9 1230- cleaning detect coll, refined setcollisionstate
     //7/9 100 - finished making calculate gap
     //7/9 1:56pm - modified detect collision functions
     //7/9 4:55pm - detect collision was tested once
     //7/9 6:pm - added modifications to detect coll
     //7/12: 4:08PM - can move objects now.

     //7/12 9:30 - modified detect collision, xgap & ygap
     //7/13 3:50pm - need to make sure other objects can detect overlap
    
    this.detectColl = function() {
        for (let x in levelObjects) {
            if (levelObjects[x] == this) {
                continue
            }

            setCollisionState(this, levelObjects[x]) //is there an overlap/collision?
            detectObjects(this, levelObjects[x]) //if so, which objects? (might move to diff func)

        }
    
    }


    this.handleColl = function() {

        for (let x in levelObjects) {
            if (levelObjects[x] == this) {
                continue
            }

        //     if (levelObjects[x].name == "st1") {
        //         console.log(.interactions.xcoll.overlappedWith.length)
        //    }

        // console.log(levelObjects[x].interactions.xcoll.hasOverlapped)   


         //rename sumveloz
        function notUsed(curr, object) {

    

            if (curr.interactions.xcoll.hasOverlapped) {


                addVelocity = (init, elt) => init + elt.velocity

                //sum all velocities
                sum = curr.interactions.xcoll.overlappedWith.reduce(
                    addVelocity, curr.velocity)
            
                //set all velocities to all overlapping objects
                curr.interactions.xcoll.overlappedWith.forEach(
                    (e) => {e.velocity = sum}) 



        //         this.velocity = levelObjects[2].velocity = sumVeloz
        //         console.log(sumVeloz, xgap)
            
        //     // if (levelObjects[i].moveable != false) {
        //            //     switch (pos) {
        //     //     case "above": this.adjustUp(); break;
        //     //     case "right": this.adjustLeft(this, levelObjects[i]);
        //     //      this.setMotionRight("f");  break;
        //     //     case "left": this.adjustRight(); this.setMotionLeft("f");  break;
        //     //     case "both": break;
        //     //     case "none": break; 
        //     //     }
        //      //   }

        console.log(sum)

        //      //pushing an object to the right
            if (sum > 0) {
                // console.log(levelObjects['smallTree'])
                // curr.moveRight(curr, object);
            } else if (sum < 0) {
            //    curr.moveLeft(curr, object);

        //     //push to left
        //     if (sumVeloz < 0) {
        //         // console.log("d")
        //          this.adjustLeft(this,levelObjects[2])
             }
        
         }
    }

    // console.log(levelObjects[x])
 notUsed(this, levelObjects[x])
            //     // console.log(levelObjects[i], pos)
            
            //6/10 - call adjust right on multiple objects
            //6/10 - 755am - created function to auto adjust all objects/ not work 
            //6/29 - 11:30am - can move object left and right
            //6/29 - 12:55am - cleaning up / remaking collision

            //item - pushing object
            function adjustLeftRecurse(item) {
               if (item.interactions.xcoll.left ==  "none") {
                return
               }
               console.log(item)
               item.adjustLeft(item.interactions.xcoll.fromWhere, item)
               item.setMotionRight("t")
               adjustLeftRecurse(item.interactions.xcoll.fromWhere    ) 
            }        
     }  
        }

    //console.log(this.interactions.xcoll.collidedWith);

  
   



        // }

    //redraw object
    this.redraw = function () {
        this.ctx = myGameArea.context;
        this.ctx.fillStyle = attr.clr;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.cx = (2 * this.x + this.width) / 2.0;
        this.cy = (2 * this.y + this.height) / 2.0;

        this.nextX = 0;
        this.nextY = 0;
        this.updatePrev = this.motions.rights || this.motions.left;
        (this.updatePrev) ? (this.prevY = this.y) : (this.prevX = this.x)
        
        // this.coll()
        //does it move on its own
        this.motions.right = false
        this.motions.left = false;
        // this.motions.right = (this.passiveSpeed > 0)
        // this.motions.left = (this.passiveSpeed < 0)

        this.velocity = 0
    };

    

}

    
    /////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////
    


    // console.log(levelObjects)

        
    

        
        
            //started to create function to loop items
            //7/2 8:17pm: can detect specific object, fix slice

            //researched splice function

            

            // xcollision = this.interactions.xcoll.hasCollided || this.interactions.xcoll.currentOverlap;
            

            ///calculate new velocity
            // if (this.interactions.xcoll.collidedWith.length > 0) {
            //     let listWeights = []
            //     let listObjects = this.interactions.xcoll.collidedWith
            //     listObjects.forEach(elt => {listWeights.push(elt.weight)});
                
            //     const init = 0.0;
            //     const totalWeight = listWeights.reduce((prev, curr) => prev + curr, init)
            
            //     weightDiff = this.strength - totalWeight 
            //    // weightDiff = 200
            //     if (weightDiff >  0) { 
            //         // this.velocity = 0.3 
            //       //  levelObjects[i].moveable = true
            //       //AVOID UNCOMMENTING CODE ABOVE AND 2 LINES AFTER 
            //     } else {
            //       //  levelObjects[i].moveable = false
            //         //this.setMotionRight("f")
            //     }

            // } else {
            //     // this.velocity = 1
            // }
            //console.log(this.interactions.xcoll.hasCollided, this.interactions.xcoll.currentOverlap)
            //if current colliding, remember it 
             //console.log(this.interactions.xcoll.collidedWith)
            //if either, from which side did it happen?
                    

            // position = "none"
            // (xcollision && (xproximity > 0)) ? ("")
            // xpos = ((xcollision) ? (this.setPosX(xproximity)) : ("none"));
            // this.interactions.xcoll.fromWhere = xpos;

            //REDUNDANCY HERE! DEAL WITH IT!!
            // horizontalOverlap = (ygap < 0) && (xgap < 0) && (ygap < xgap);
            // verticalOverlap = (ygap < 0) && (xgap < 0) && (ygap > xgap);
            //bothOverlap = (ygap < 0) && (xgap < 0) && (ygap == xgap);
            // console.log(this.interactions.xcoll.currentOverlap)


            // pos = (horizontalOverlap || verticalOverlap) ? (this.whichOverlap()) : ("none"); 
            // this.whichOverlap = function() {return ((horizontalOverlap) ? (xpos) : (ypos))}  
// console.log(this.interactions.xcoll.hasCollided)


////////////////CREATE FUNCTION TO HANDLE THIS!!!!!
///////////////////////////////////////////////////DO NOT DELETE

        























    
    function Protagonist(attr) {
        gameobject.call(this, attr);
       
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
        this.JumpVeloc = 3;
        this.velocity = 0;


        //strength stats
        
        this.weight = this.width * this.height
        this.strength = this.weight

      //  console.log(this, "test")
//which key is pressed? set true or false
        window.addEventListener('keydown', function(event) {
        state = levelObjects.protagonist.keyPressed;
        protagonist = levelObjects.protagonist
      // var protagonist = window.levelObjects.protagonist;
       //var state = protagonist.keyPressed;


        if (event.code == "ArrowLeft") {state.left = true; };
        if (event.code == "ArrowUp") {state.up = true};
        if (event.code == "ArrowRight") {state.right = true};
        if (event.code == "ArrowDown") {state.down = true;}; 
        if (event.code == "Space") {state.spacebar.num = 1;} 

        // levelObjects.protagonist.keyPressed.right = true;
        // console.log(levelObjects.protagonist.keyPressed.right);


        // heightBeforeJump = this.canMoveHorizontally().y
        if ((event.code === "Space") && ((state.dblspacebar)))  {
            levelObjects.protagonist.currentVeloc = levelObjects.protagonist.JumpVeloc; 
        state.spacebar = false;
        state.dblspacebar = false;
        //   levelObjects.protagonist.y -= levelObjects.protagonist.currentVeloc;


        }; 






    })

        //jump if spacebar pressed - do nothing until jump has finised (avoid multiple presses)
        
        //jump in the air once
        
        
        window.addEventListener('keyup', function(event) {   
            state = levelObjects.protagonist.keyPressed;
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
            
            for (let i in levelObjects) {
                //object interactions
                xmaxproximity = (levelObjects[i].width+this.width)/2;
                ymaxproximity = (levelObjects[i].height+this.height)/2;
                xproximity = this.cx - levelObjects[i].cx;
                yproximity = this.cy - levelObjects[i].cy;
                
                
                if ((Math.abs(xproximity) < xmaxproximity) &&
                (Math.abs(yproximity) <= ymaxproximity)  && 
                !(levelObjects[i]==this)) { // don't look at obj 1
                    
                    // this.interactions.ycoll.fromWhere = "above"
                    this.interactions.ycoll.object = levelObjects[i]; 
                    return levelObjects[i];
                } else {
                    //    this.interactions.ycoll.fromWhere = "none"
                }
            }
            return true;
        }
        
        this.animate = function() { 
            
            this.velocity = 0;
            
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
                                this.velocity = -1
                                // }
                            } else {
                                this.motions.left = false;
                                // this.velocity = 0
                            }
                            
                            
            if (this.keyPressed.up) {
                                // this.moveUp();      
                            }
                            
                            //console.log(this.keyPressed.spacebar);
                            
                            
                            //if right is pressed, and no obstacle(s)
                            
                            if (this.keyPressed.right) {
                            
                                
                                //     if (this.interactions.xcoll.fromWhere == "right") {
                                    //         if (this.interaction.ycoll.object.moveable == true) {
                                        //            this.interaction.ycoll.object.motions.right = this.motions.right = true; 
                                        //         }
                                        //    } else {
                                            this.motions.right = true;
                                            this.velocity = 1
                                            //     } 
                                        } else {
                                            this.motions.right = false;
                                            // this.velocity = 0
                                        }

                            if ((this.keyPressed.right == this.keyPressed.left) == false) {
                                // this.velocity = 0
                            }
                                        
                                        
                                        
                                        if (this.keyPressed.down) {
                                            // this.moveDown();       
                                        }

                                        if (this.keyPressed.spacebar.num == 1) {
                                            this.motions.jumping = true;
                                           // console.log("check");
                                        } 

                        

                            this.detectColl();
                            this.handleColl();
                        

                                       // console.log(this.velocity)
                                        
                                        
                                        if (true)  {
                                        // levelObjects.protagonist.jumpState = true;
                                        // state.spacebar = true;
                                        
                                        //console.log(levelObjects.protagonist.y);
                                    }; 
                                    
                                    //CAN DOUBLE JUMP INF WHEN TOUCHING levelObjects FIX!!!!
                                    //if not, you must be moving! 
                                    //CHANGE FALLING STATE TO 
                                    if ((state = this.isAirborne()) == true) {
                                        this.currentVeloc -= this.gravity;
                                        this.y -= this.currentVeloc;
                                    } else {
                                        
                                        if (state.y > this.y) {
                                            this.y = state.y - this.height; //reset height/end jump
                                        }
                                        this.jumpState = false;
                                        this.keyPressed.dblspacebar = false;
                                        this.keyPressed.spacebar.num = 0; //reset spacebar count
                                        this.currentVeloc = 0.0;

                                    }
                                    
                                    for (let i in levelObjects) { //do a loop to find all of the connected levelObjects, and then move all of them together.
                                        levelObjects[i].x+=levelObjects[i].velocity
                                        // console.log(this.cx)
                                        
                                        // if (levelObjects[i].motions.right) {levelObjects[i].x+=this.velocity}
                                        // else if (levelObjects[i].motions.left) {levelObjects[i].x+=this.velocity}
                                        if (levelObjects.protagonist.motions.jumping) {
                                            levelObjects.protagonist.currentVeloc = levelObjects.protagonist.JumpVeloc;  
                                            levelObjects.protagonist.y -= levelObjects.protagonist.currentVeloc;
                                            levelObjects.protagonist.motions.jumping = false;
                                            levelObjects.protagonist.keyPressed.spacebar.num++;
                                        }
//move landscape
//  (objects[i] != this && objects.protagonist.motions.right) ? (objects[i].x-=6) : 0;
}




    
    
  
}




    }


    //do a loop to find all objects connected, 
    //if one have positive V, all objects share that V
    //they all should also be moveable, else, don't move
