class square{
    constructor(x, y) {
    var options = {
      restitution:1,
      


    }



        this.body= Bodies.rectangle(x, y, 30, 30, options);
          World.add(world, this.body);

    }

          




display() {
  fill("orange");
  rectMode(CENTER);
  rect(this.body.position.x, this.body.position.y, 30,30);


}

}