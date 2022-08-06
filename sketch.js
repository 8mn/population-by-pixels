let img;
const pandaPopulation = 100;

function preload() {
	img = loadImage("./tiger-image.jpg");
}

function setup() {
	createCanvas(img.width, img.height);
	img.loadPixels();
	img.updatePixels();
	pixelDensity(1);
}

function draw() {
	clear();
	background("#5e3d32");

	let sizeDot = floor(map(5, 0, width, 0, height));
	// let sizeDot = 30;

	// console.log(img.pixels.length/4);

	for (var starty = 0; starty < img.height; starty++) {
		// creates pixel index
		for (var startx = 0; startx < img.width; startx++) {
			var index = (startx + starty * img.width) * 4;
			var r = img.pixels[index + 0];
			var g = img.pixels[index + 1];
			var b = img.pixels[index + 2];

			// let alpha = img.pixels[index + 3];

			let bright = lightness(color(r, g, b));

			noStroke(); // disables element stroke

			if (bright > 30) {
				fill("#efd181");
			} else {
				fill("#5e3d32");
			}

			// fill only 3900 pixels

			// fill("#5e3d32");

			// random(sizeDot);

			ellipse(startx, starty, random(sizeDot, -8)); // creates element

			startx = startx + sizeDot - 1; // set new startx value
		}
		starty = starty + sizeDot - 1; // set new starty value
	}

	noLoop();
}


// to erase pixels
// set fill to #5e3d32 or sizeDot to 0