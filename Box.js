//create box class
class Box {

    //give any x,y,width and height
    constructor (x,y,width, height){
        //setup width and height
        this.width = width;
        this.height = height;
        //guve restitution option
        var box_options = {
            restitution : 0.3
        }
        //create box body
        this.body = Bodies.rectangle (x, y, this.width, this.height, box_options);
        //add box body to world
        World.add (myWorld, this.body );
    }

    //display function to show 
    display () {
        //make pos variable to control positions
        var pos =this.body.position;
        //control angle
        var angle=this.body.angle;
        //push lets you make properties only available to a portion of the code 
        push ();
        //translate lets you change the position of the origin, in this case it makes it the x and y position to the center of any object you make so that the object will rotate on it's center
        translate (pos.x,pos.y);
        //this is required to make rotate work
        angleMode (RADIANS);
        //Rotate the body
        rotate (angle);
        //make rectMode center
        rectMode(CENTER);
        //color and make rectangle visible
        fill(255);
        rect(0, 0, this.width, this.height);
        //push & pop are a pair
        pop ();
        
    }
}