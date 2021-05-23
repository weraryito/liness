let lines = new Lines();

function setup(){
	createCanvas(windowWidth - 10, windowHeight - 5);
}

function draw() {
	background('lightgray');
	textSize(13);

    text('PUNTO PENDIENTE', 90, 70);
    circle(150, 150, 140);
	lines.ecuPP(200, 200, 100, 100);
	lines.ecuPP(100, 200, 200, 100);
	lines.ecuPP(150, 80, 150, 220);
	lines.ecuPP(80, 150, 220, 150);

	
	text('DDA', 335, 70);
	circle(350, 150, 140);
	lines.ecuDDA(400, 200, 300, 100);
	lines.ecuDDA(300, 200, 400, 100);
	lines.ecuDDA(350, 80, 350, 220);
	lines.ecuDDA(280, 150, 420, 150);

	text('BRESENHAM', 510, 70);
	circle(550, 150, 140);
	lines.ecuBresenham(600, 200, 500, 100);
	lines.ecuBresenham(500, 200, 600, 100);
	lines.ecuBresenham(550, 80, 550, 220);
	lines.ecuBresenham(480, 150, 620, 150);

}