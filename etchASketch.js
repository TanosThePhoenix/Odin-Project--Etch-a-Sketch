function createGrid(gridSize = 16, colorFunc = basicRecolor) {
	//Limit size of grid
	if(isNaN(gridSize)) gridSize = 16;
	else if(gridSize < 2) gridSize = 2;
	else if(gridSize > 100) gridSize = 100;

	const maxGridDimension = 960;

	const grid = document.createElement('div');
	grid.style.display = "flex";
	grid.style.flexFlow = "column nowrap";
	grid.style.height = maxGridDimension+'px';
	grid.style.width = maxGridDimension+'px';
	for(let r = 0; r < gridSize; ++r){
		const gridRow = document.createElement('div');
		gridRow.style.flex = "1 1 10px";
		gridRow.style.display = "flex";
		gridRow.style.flexFlow = "row nowrap";
		for(let i = 0; i < gridSize; ++i){
			const gridItem = document.createElement('div')
			gridItem.style.flex = "1 1 10px";
			gridItem.style.backgroundColor = 'white';
			gridItem.style.border = '1px solid whitesmoke';
			gridItem.addEventListener('mouseover', e => {
				colorFunc(e);
			});
			gridRow.appendChild(gridItem);
		}
		grid.appendChild(gridRow);
	}
	sketchGrid.appendChild(grid);
}

function basicRecolor(e){
	e.currentTarget.style.backgroundColor = 'black';
	e.currentTarget.style.borderColor = "dimgray";
}

function advancedRecolor(e){
	const target = e.currentTarget;
	if("data-lightness" in target){
		const hue = target['data-hue'];
		const saturation = target['data-saturation'];
		let lightness = target['data-lightness'];
		lightness = (lightness > 0) ? lightness-10 : 0;
		if(lightness < 0) lightness = 0; //this shouldn't run but error check still
		target.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
		target['data-lightness'] = lightness;
	}
	else{
		const hue = Math.trunc(Math.random()*256);
		const saturation = Math.trunc(Math.random()*101);
		const lightness = 90;
		target.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
		target['data-hue'] = hue;
		target['data-saturation'] = saturation;
		target['data-lightness'] = lightness;
	}
}

const sketchGrid = document.getElementById("sketchGrid");

document.getElementById('resetButton').addEventListener('click', () => {
	const sideSize = parseInt(prompt("How many squares should each side be?", 16));
	sketchGrid.removeChild(sketchGrid.firstElementChild);
	createGrid(sideSize);
});

document.getElementById('altColorResetButton').addEventListener('click', () => {
	const sideSize = parseInt(prompt("How many squares should each side be?", 16));
	sketchGrid.removeChild(sketchGrid.firstElementChild);
	createGrid(sideSize, advancedRecolor);
});

createGrid();