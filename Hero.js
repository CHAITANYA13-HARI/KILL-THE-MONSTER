class Hero{
constructor (x, y, width,height)
{
var options = {
density: 1,
frictionAir: 0.5
};
this.x=x
this.y=y
this .width=width;
this .height=height;

this . image=loadImage("Superhero-01.png");
this. body=Bodies. rectangle(this.x, this.y,this.width, this.height, options)
World. add (world, this . body);
}
display () {
    var pos =this . body . position;
    //var angle = this . body . angle;
   // push ( ) ;
    translate(pos.x, pos .y) ;
   // rotate(angle) ;   
    rectMode (CENTER) ;
    strokeWeight(4);
    //stroke("black");
  // fill("red");
    rect(this.x,this.y, this.width, this . height);
    //pop ();
}
}