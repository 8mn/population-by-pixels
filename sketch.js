let img;
const pandaPopulation = 100;

function setup() {
	createCanvas(900, 500);
	img = loadImage("./panda-img.jpg");
	
}

function draw() {
	// background(220);
	
	let x = floor(random(img.width));
	let y = floor(random(img.height));
	
	
	let black = color(0)
	img.loadPixels();
	img.set(x, y, black);
	img.updatePixels();
	
	image(img, 0,0)


	
}


