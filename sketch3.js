let img; // creates image variable

let startx = 0; // starting x coordinate
let starty = 0; // starting y coordinate

let population
let animalSpecies

let numOfPixels; //aka total remaining population for panda it is ~1800
let numOfPixelsX;
let numOfPixelsY;

let sizeOfPixel = 0;

let showAnimal;

let animalImage;

function preload() {
	panda = loadImage("./assets/panda-img.jpg"); // loads image

	tiger = loadImage("./assets/2tlod51659_Sumatran_Tiger_Hero.jpg");
	whiteRhino = loadImage(
		"./assets/993px-Northern_White_Rhinoceros_Angalifu.jpg"
	); // loads image

    amurLeopard = loadImage("./assets/amur-leaopard.jpg")



    // img = tiger;
    // animalSpecies = "Tiger";
    // population = 3900

    img = whiteRhino
    animalSpecies = "Northern white rhinoceros"
    population = 3

    // img = panda
    // animalSpecies = "Giant Panda"
    // population = 1864


    // img = amurLeopard
    // animalSpecies = "Amur leopard"
    // population = 99
}

function setup() {
	createCanvas(img.width, img.height); // creates canvas
	// createCanvas(920, windowHeight); // creates canvas

	img.loadPixels(); // loads image
	// img.resize(500, 0); // resizes image to window size
	imageMode(CENTER);
	img.updatePixels(); // updates image


	rSlider = createSlider(3, 1000, calculateSize(population), 1);
	rSlider.position(30, 5);
	rSlider.style("width", `${img.width}px`);

    

	// let currentPop = floor((img.height * img.width) /Math.pow(rSlider.value(), 2))

	// createP("Current Population: " + currentPop);

	button = createButton("Reset");

	button.mousePressed(resetPop);
	// buttonTiger = createButton("Tiger");
	// buttonTiger.mousePressed(tiger);
}

function resetPop() {
	location.reload();
}


function draw() {
	clear();
	background(0);
	// console.log((floor(img.width * img.height) / rSlider.value()));
	// console.log(img.width);
	// console.log(rSlider.value());

	// sizeOfPixel = floor(map(rSlider.value(), 0, width, 5, 40));
	sizeOfPixel = rSlider.value();
	// sizeOfPixel = 18;

	// console.log(sizeOfPixel);

	// console.log((floor((img.width * img.height) / sizeOfPixel)));

	// findNumOfPixels();
	// console.log(floor(calculateSize(1800)));
	// sizeOfPixel = calculateSize(1800);
	// findNumOfPixels()

	numOfPixelsX = floor(img.width / sizeOfPixel);
	numOfPixelsY = floor(img.height / sizeOfPixel);

	// console.log(numOfPixelsX * numOfPixelsY);

	numOfPixels = numOfPixelsX * numOfPixelsY;

	for (var starty = 0; starty < img.height; starty++) {
		// creates pixel index
		for (var startx = 0; startx < img.width; startx++) {
			var index = (startx + starty * img.width) * 4;
			var r = img.pixels[index + 0];
			var g = img.pixels[index + 1];
			var b = img.pixels[index + 2];

			noStroke(); // disables element stroke
			fill(r, g, b);

			rect(startx, starty, sizeOfPixel, sizeOfPixel);

			// triangle(startx, starty, startx + (sizeOfPixel / 2), starty + sizeOfPixel, startx + sizeOfPixel, starty) // upside down triangle
			// triangle(startx, starty, startx, starty + sizeOfPixel, startx + sizeOfPixel, starty)

			startx = startx + sizeOfPixel - 1; // set new startx value
		}
		starty = starty + sizeOfPixel - 1; // set new starty value
	}

	let fps = frameRate();

	fill(255);
	// textSize(32);
	text(animalSpecies, 10, 30);
	text("Population: " + numOfPixels, 10, 45);
	text("Size of Pixel: " + sizeOfPixel, 10, 60);
	// text("FPS :" + fps.toFixed(0), 10, 75);
	// console.log();
}

// function findNumOfPixels() {
// 	// console.log(numOfPixelsX);
// 	// console.log(numOfPixelsY);
// 	// console.log(numOfPixels);
// 	// console.log(sizeOfPixel)
// 	// console.log(img.height);
// 	// console.log(rSlider.value(), sizeOfPixel);
// 	numOfPixelsX = floor(img.width / sizeOfPixel);
// 	numOfPixelsY = floor(img.height / sizeOfPixel);

// 	// console.log(numOfPixelsX * numOfPixelsY);

// 	numOfPixels = numOfPixelsX * numOfPixelsY;
// 	return numOfPixels;
// }

function calculateSize(population) {
	let area = img.width * img.height;

	let s = area / population;

	let s1 = Math.sqrt(s);

	return s1;
}


// function tiger() {
// 	img = tiger;
// }
