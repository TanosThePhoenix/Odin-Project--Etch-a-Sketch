function createGrid(gridSize = 16) {
	//Limit size of grid
	if(isNaN(gridSize)) gridSize = 16;
	else if(gridSize < 2) gridSize = 2;
	else if(gridSize > 100) gridSize = 100;

	const maxGridDimension = 960;

	const grid = document.createElement(div);
	grid.style.display = "flex";
	grid.style.flexFlow = "column nowrap";
	grid.style.height = maxGridDimension;
	grid.style.width = maxGridDimension;
	for(let r = 0; r < gridSize; ++r){
		const gridRow = document.createElement(div);
		gridRow.style.flex = "1 1 10px";
		gridRow.style.display = "flex";
		gridRow.style.flexFlow = "row nowrap";
		for(let i = 0; i < gridSize; ++i){
			const gridItem = document.createElement(div)
			gridItem.style.flex = "1 1 10px";
			gridItem.style.backgroundColor = 'white';
			gridItem.style.border = '1px solid whitesmoke';
			gridItem.addEventListener('hover', e => e.currentTarget.style.color = 'black');
			gridRow.appendChild(gridItem);
		}
		grid.appendChild(gridRow);
	}
	document.getElementById("sketchGrid").appendChild(grid);
}