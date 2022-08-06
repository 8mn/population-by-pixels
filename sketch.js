let img;
const pandaPopulation = 100;

function preload() {
	img = loadImage("./tiger-image.jpg");
}

function setup() {
	createCanvas(img.width, img.height);
	img.loadPixels()
	img.updatePixels()


}

// function draw() {
// 	// tint(0, 153, 204);
// 	background(0);
// 	image(img, 0, 0);

// 	// let c = get(width / 2, height / 2);
// 	// fill(c);
// 	// noStroke();
// 	// circle(width/2, height/2, 20);
// 	loadPixels();
// 	// for
// 	const d = pixelDensity();
// 	for (let x = 0; x < width; x++) {
// 		for (let y = 0; y < height; y++) {

// 			circle(width/2, height/2, 20);
// 		}
// 	}
// 	noLoop();
// 	updatePixels()

// 	// console.log(get(50, 90));
// }


function draw() {
	clear();
	background("#5e3d32");

	let size = floor(map(50, 0, width, 5, 40)); // maps mouseX value to element size

	// size = 10
	// console.log(size);
	

	for (var starty = 0; starty < img.height; starty++) {
		// creates pixel index
		for (var startx = 0; startx < img.width; startx++) {
			var index = (startx + starty * img.width) * 4;
			var r = img.pixels[index + 0];
			var g = img.pixels[index + 1];
			var b = img.pixels[index + 2];

			// var bright = 0.3 * r + 0.59 * g + 0.11 * b; // sets pixel value to adjusted grayscale

			let bright = (r + g + b) / 3;

			noStroke(); // disables element stroke

			// fill(bright); // fills element with adjusted grayscale
			// fill(r, g, b); 
			if(bright < 20){

				fill("#efd181"); 
			}else{
				fill("#5e3d32");
			}
			

			circle(startx, starty, size);


			startx = startx + size - 1; // set new startx value
		}
		starty = starty + size - 1; // set new starty value
	}
}
