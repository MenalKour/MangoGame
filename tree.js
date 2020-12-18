class tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.menalWidth=450;
		this.menalHeight=600;
		this.wallThickness=10;
		
		this.image=loadImage("tree.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.menalWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(0, this.y-this.menalHeight/2, this.wallThickness, this.menalHeight, {isStatic:false})
		this.rightWallBody=Bodies.rectangle(this.x+this.menalWidth/2, this.y-this.menalHeight/2, this.wallThickness, this.menalHeight, {isStatic:false})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.menalHeight/2,this.menalWidth, this.menalHeight)
			pop()
			
	}

}