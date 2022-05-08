//4/19 - 123-1pm created code to move, not working
//3:30-4:15pm - trouble with collision
//4/20 - found issue, need to track elts being collided
       //10:30-11am - block slows down upon collision, working on groups now
       //11:30-11:55am - trying to get add/remove objects "in collision arr "
//4/21 - 7-730am discovered bug in find index func
//4/21 - 7:30-8am pushing block slows you down
// 8-9am - option to upgrade diff abilities implemented
//9-9:55am - blocks can be moved with sufficient "strenght"

function gameobject(attr) {
    //may not work on firefox -> https://www.w3schools.com/jsref/event_key_keycode.asp

    //name of object
    (attr.n == null) ? (this.name = "") : (this.name = attr.n)


    //length/height
    this.width = attr.w;
    this.height = attr.h;

    //coordinates
    this.x = attr.x;
    this.y = attr.y;
    this.cx = (2 * this.x + this.width) / 2.0;
    this.cy = (2 * this.y + this.height) / 2.0;

    //nu
    this.prevY = this.y;
    this.prevX = this.x;

    //physics
    this.gravity = 10.0/ 3.0 / 25.0;
    
    //is it moving?
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
        push: false
    },
    xcoll : {
        hasCollided : false, 
        fromWhere: "none", 
        object: null, 
        push : false, 
        isOverlap : false,
        collidedWith : []
        }
    }   

    this.moveable = true

    //strenght stats
    this.weight = this.width * this.height
    this.strength = 0;  //note: largest object hsa to be les than 158
    //attr.moveable;

    this.setYHelper = function(v) { return ((v > 0) ? ("below") : ("mid")) };
    this.setPosY = function(v) { return (v < 0) ? ("above") : (this.setYHelper(v)) };
    this.setXHelper = function(v) { return ((v > 0) ? ("left") : ("mid")) };
    this.setPosX = function(v) { return (v < 0) ? ("right") : (this.setXHelper(v)) };

    
    this.coll = function() {

        xcolArr = []
        for (let i in gameobjects) {
            //isStanding = this.interactions.xcoll.fromWhere;
            //collideFrom = this.interactions.ycoll.fromWhere;
            xmaxproximity = (gameobjects[i].width+this.width)/2;
            ymaxproximity = (gameobjects[i].height+this.height)/2;
            xproximity = this.cx - gameobjects[i].cx;
            yproximity = this.cy - gameobjects[i].cy;
            // xproximityPrev = this.prevX - gameobjects[i].x
            // yproximityPrev = this.prevY - gameobjects[i].y
            // xgapPrev = Math.abs(xproximityPrev) - xmaxproximity;
            // ygapPrev = Math.abs(yproximityPrev) - ymaxproximity;
            xgap = Math.abs(xproximity) - xmaxproximity; //closenness to ma prox
            ygap = Math.abs(yproximity) - ymaxproximity;
            // xgapPrevAbs = Math.abs(xgapPrev);
            // ygapPrevAbs = Math.abs(ygapPrev);
            // xgapAbs = Math.abs(xgap);
            // ygapAbs = Math.abs(ygap);

            ////////////////////////////////////// UNUSED CODE - DELETE SOON!!!!
            //detect gameobjects below or in front
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
//ISSUe, OBJECT WILL FORGET IF IT COLLIDED WITH SOMETHING BECAUSE
//CHANGES MUCH
            if (!(gameobjects[i]==this)) {

            //WHEN I TOUCH A MOVEABLE OBJECT, it moves! WRONG!!!!!
            //TO DO: Detect collisions from above!!!!
            //BASE CASE: What if ygap == xgap ????

            //is it closer to the top or to the sides?
             this.interactions.ycoll.hasCollided = (xgap < 0) && (ygap <= 0) && (ygap > xgap);
             ycollision = this.interactions.ycoll.hasCollided;
             aboveOrBelow =  (ycollision == true);
             ypos = ((aboveOrBelow) ? ("above") : ("none"));
             this.interactions.ycoll.fromWhere = ypos; 

            this.adjustUp = function() {this.y = gameobjects[i].y - this.height}
            this.adjustLeft = function() {this.x = gameobjects[i].x - this.width}
            this.adjustRight = function() {this.x = gameobjects[i].x + gameobjects[i].width}


            //is there a horizontal collistion, if so, in which direction

            //is it overlapping or colliding?
            this.interactions.xcoll.hasCollided = (xgap == 0) && (ygap < 0) && (ygap < xgap);
            this.interactions.xcoll.isOverlap =  (xgap < 0) && (ygap < 0) && (ygap < xgap);
           
            //if either, remember it, if not, remove it from object collision arr

            xcollision = this.interactions.xcoll.hasCollided || this.interactions.xcoll.isOverlap;

                    ///calculate new velocity
            if (this.interactions.xcoll.collidedWith.length > 0) {
                let listWeights = []
                let listObjects = this.interactions.xcoll.collidedWith
                listObjects.forEach(elt => {listWeights.push(elt.weight)});
                
                const init = 0.0;
                const totalWeight = listWeights.reduce((prev, curr) => prev + curr, init)
            
                weightDiff = this.strength - totalWeight 
               // weightDiff = 200
                if (weightDiff >  0) { 
                    this.velocity = 0.3 
                  //  gameobjects[i].moveable = true
                  //AVOID UNCOMMENTING CODE ABOVE AND 2 LINES AFTER 
                } else {
                  //  gameobjects[i].moveable = false
                    //this.setMotionRight("f")
                }

            } else {
                this.velocity = 1
            }
            //console.log(this.interactions.xcoll.hasCollided, this.interactions.xcoll.isOverlap)
            //if current colliding, remember it 
            
             
             
             //console.log(this.interactions.xcoll.collidedWith)
             

            //if either, from which side did it happen?
            leftOrRight = (xcollision == true);            
            xpos = ((leftOrRight) ? (this.setPosX(xproximity)) : ("none"));
            this.interactions.xcoll.fromWhere = xpos;

            //REDUNDANCY HERE! DEAL WITH IT!!
            horizontalOverlap = (ygap < 0) && (xgap < 0) && (ygap < xgap);
            verticalOverlap = (ygap < 0) && (xgap < 0) && (ygap > xgap);
            bothOverlap = (ygap < 0) && (xgap < 0) && (ygap == xgap);
           

            pos = (horizontalOverlap || verticalOverlap) ? (this.whichOverlap()) : ("none"); 
            this.whichOverlap = function() {return ((horizontalOverlap) ? (xpos) : (ypos))}  

            //console.log(gameobjects)
            if (! gameobjects[i].moveable) {
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
                    case "right": this.adjustLeft(); this.setMotionRight("t"); gameobjects[i].setMotionRight("t"); this.velocity=0.2; break;
                    case "left":  this.adjustRight(); this.setMotionLeft("t"); gameobjects[i].setMotionLeft("t"); this.velocity=0.2; break;
                  //  case "none": console.log("t")
                }   
            }

            var arr = this.interactions.xcoll.collidedWith
            var test = gameobjects[i].name
            var index = arr.findIndex((v, i) => {return v.name == test; }) //find index of element

            if (xcollision && index == -1) {
                this.interactions.xcoll.collidedWith.push(gameobjects[i]) 
            } else if (!xcollision && index != -1) {
                this.interactions.xcoll.collidedWith.splice(index)
            }

        
            
//console.log(gameobjects)
            // console.log(horizontalOverlap, this.interactions.xcoll.hasCollided);
            
            
        }  
        
    }  

    //console.log(this.interactions.xcoll.collidedWith);

  
   



        }

        

        


    
    //check for colls
    this.canMoveHorizontally = function() {
    //where are you standing on/or are you falling?

    


    var hasCollided = false;
    for (let i in gameobjects) {

            coll = this.interactions.xcoll
            xmaxproximity = (gameobjects[i].width+this.width)/2;
            ymaxproximity = (gameobjects[i].height+this.height)/2;
            xproximity = this.cx - gameobjects[i].cx;
            yproximity = this.cy - gameobjects[i].cy;

     //console.log(xproximity, xmaxproximity, yproximity, ymaxproximity, gameobjects[i]);
     if ((Math.abs(xproximity) <= xmaxproximity) && (Math.abs(yproximity) < ymaxproximity) && !(gameobjects[i]==this)) { // don't look at obj 1
                hasCollided = true;
                coll.object = gameobjects[i];

                if ((gameobjects[i].moveable == true) && (Math.abs(xproximity) < xmaxproximity)) {

                    

                if (xproximity < 0) {
                    coll.fromWhere = "right"; 
                    gameobjects[i].x = this.x + this.width; //adjust the position so they align
                } else if (xproximity > 0) {
                    coll.fromWhere = "left"; 
                    gameobjects[i].x = this.x - gameobjects[i].width;
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
        this.ctx.fillStyle = attr.clr;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.cx = (2 * this.x + this.width) / 2.0;
        this.cy = (2 * this.y + this.height) / 2.0;

        this.nextX = 0;
        this.nextY = 0;
        this.updatePrev = this.motions.rights || this.motions.left;
        (this.updatePrev) ? (this.prevY = this.y) : (this.prevX = this.x)
        

        this.coll()
        //does it move on its own
        this.motions.right = this.motions.left = !(this.passiveSpeed == 0);
        this.motions.right = (this.passiveSpeed > 0)
        this.motions.left = (this.passiveSpeed < 0)


    };

    

}

    
    /////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////
    




























    
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
        this.JumpVeloc = 4;
        this.velocity = 1;


        //strength stats
        
        this.weight = this.width * this.height
        this.strength = this.weight

      //  console.log(this, "test")
//which key is pressed? set true or false
        window.addEventListener('keydown', function(event) {
        state = gameobjects.protagonist.keyPressed;
        protagonist = gameobjects.protagonist
      // var protagonist = window.gameobjects.protagonist;
       //var state = protagonist.keyPressed;


        if (event.code == "ArrowLeft") {state.left = true; };
        if (event.code == "ArrowUp") {state.up = true};
        if (event.code == "ArrowRight") {state.right = true};
        if (event.code == "ArrowDown") {state.down = true;}; 
        if (event.code == "Space") {state.spacebar.num = 1;} 

        // gameobjects.protagonist.keyPressed.right = true;
        // console.log(gameobjects.protagonist.keyPressed.right);


        // heightBeforeJump = this.canMoveHorizontally().y
        if ((event.code === "Space") && ((state.dblspacebar)))  {
            gameobjects.protagonist.currentVeloc = gameobjects.protagonist.JumpVeloc; 
        state.spacebar = false;
        state.dblspacebar = false;
        //   gameobjects.protagonist.y -= gameobjects.protagonist.currentVeloc;


        }; 






    })

        //jump if spacebar pressed - do nothing until jump has finised (avoid multiple presses)
        
        //jump in the air once
        
        
        window.addEventListener('keyup', function(event) {   
            state = gameobjects.protagonist.keyPressed;
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
            
            for (let i in gameobjects) {
                //object interactions
                xmaxproximity = (gameobjects[i].width+this.width)/2;
                ymaxproximity = (gameobjects[i].height+this.height)/2;
                xproximity = this.cx - gameobjects[i].cx;
                yproximity = this.cy - gameobjects[i].cy;
                
                
                if ((Math.abs(xproximity) < xmaxproximity) &&
                (Math.abs(yproximity) <= ymaxproximity)  && 
                !(gameobjects[i]==this)) { // don't look at obj 1
                    
                    // this.interactions.ycoll.fromWhere = "above"
                    this.interactions.ycoll.object = gameobjects[i]; 
                    return gameobjects[i];
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
                            
                            //console.log(this.keyPressed.spacebar);
                            
                            
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
                                           // console.log("check");
                                        } 

                                        
                                        this.coll();

                                       // console.log(this.velocity)
                                        
                                        
                                        if (true)  {
                                        // gameobjects.protagonist.jumpState = true;
                                        // state.spacebar = true;
                                        
                                        //console.log(gameobjects.protagonist.y);
                                    }; 
                                    
                                    //CAN DOUBLE JUMP INF WHEN TOUCHING gameobjects FIX!!!!
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
                                    
                                    for (let i in gameobjects) { //do a loop to find all of the connected gameobjects, and then move all of them together.
                                        if (gameobjects[i].motions.right) {gameobjects[i].x+=this.velocity}
                                        else if (gameobjects[i].motions.left) {gameobjects[i].x-=this.velocity}
                                        if (gameobjects[i].motions.jumping) {
                                            gameobjects.protagonist.currentVeloc = gameobjects.protagonist.JumpVeloc;  
                                            gameobjects.protagonist.y -= gameobjects.protagonist.currentVeloc;
                                            this.motions.jumping = false;
                                            this.keyPressed.spacebar.num++;
                                        }
//move landscape
//  (objects[i] != this && objects.protagonist.motions.right) ? (objects[i].x-=6) : 0;
}




    
    
  
}




    }


    //do a loop to find all objects connected, 
    //if one have positive V, all objects share that V
    //they all should also be moveable, else, don't move
