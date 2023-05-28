function createGrid(gridSize = 16) {
	const grid = document.createElement(div);
	for(let r = 0; r < gridSize; ++r){
		const gridRow = document.createElement(div);
		//Set style here
		for(let i = 0; i < gridSize; ++i){
			const gridItem = document.createElement(div)
			//Set style here
			//Insert event listener for element hover here
			gridRow.appendChild(gridItem);
		}
		grid.appendChild(gridRow);
	}
	document.getElementById("sketchGrid").appendChild(grid);
}