var img;

function preload() {
	img = loadImage("./panda-img.jpg");
}

function setup() {
	createCanvas(img.width, img.height);
	pixelDensity(1);
	image(img, 0, 0);
	loadPixels();
	background(255);
	noStroke();

	var size = 10;

	for (var x = 0; x < width; x += size) {
		for (var y = 0; y < height; y += size) {
			var index = (x + y * width) * 4;

			// Advanced black and white filter
			var r = pixels[index];
			var g = pixels[index + 1];
			var b = pixels[index + 2];
			var col = color(r, g, b);
			var light = lightness(col);
			var radius = map(light, 0, 100, size, 3);

			fill(r, g, b);
			ellipse(x, y, radius);
		}
	}
}
