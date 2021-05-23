class Lines {

constructor() {

}

ecuPP(x1, y1, x2, y2){
	let x = x1;
	let y = y1;
	let stepX = 1;
	let stepY = 1;
	const dx = x2 - x1;
	const dy = y2 - y1;

	if(dx==0){
		if(dy < 0){
			stepY = -1;
		}
		while(y!= y2){
			point(x, y);
			y+= stepY;
		}
	}else{
		const m = dy / dx;
	const b = y1 - (m * x1);
		if(dx < 0){
			stepX = -1;
		}
		while(x != x2){
			point(x, y);
			x+= stepX;
			y = m * x + b;
		}
    }
}

ecuDDA(x1, y1, x2, y2){
	let dx = x2 - x1;
	let dy = y2 - y1;
	let pp;
	let x, y, ax, ay;
	let i = 1;

	if(abs(dx) > abs(dy)){
		pp = abs(dx);
	}
	else{
		pp = abs(dy);
	}

	ax = dx / pp;
	ay = dy / pp;
	x = x1;
	y = y1;

	while(i <= pp){
		point(x,y);
		x = x + ax;
		y = y + ay;
		i = i + 1; 
	}
}

ecuBresenham(x1, y1, x2, y2){
    let x = x1;
    let y = y1;
    let dx = x2 - x1;
    let dy = y2 - y1;
    let sx = 1;
    let sy = 1;
  
    if (dy < 0) {
      dy = -dy;
      sy = -1;
    }
    if (dx < 0) {
      dx = -dx;
      sx = -1;
    }
  
    if (dx > dy) {
      let p = 2 * dy - dx;
      while (x != x2) {
        point(x, y);
        x += sx;
        if (p < 0) {
          p += 2 * dy;
        } else {
          y += sy;
          p += 2 * (dy - dx);
        }
      }
    } else {
      let p = 2 * dx - dy;
      while (y != y2) {
        point(x, y);
        y += sy;
        if (p < 0) {
          p += 2 * dx;
        } else {
          x += sx;
          p += 2 * (dx - dy);
        }
      }
    }
  }

}