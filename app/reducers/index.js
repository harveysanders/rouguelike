const initialState = {
	health: 100,
	weapon: 'fist',
	attack: 7,
	level: 0,
	nextLevelAt: 60,
	dungeon: 0,
	currMap: {
		width: 800,
		height: 600,
		cellSize: 40,
		cells:[[]],
		playerCoords: {
			x: 0,
			y: 0
		},
	}
}

//move player movement functionalilty to cells reducer

function health(state = 100, action) {
	switch (action.type) {
		case 'EXPEND_ENERGY':
			return state = state - 1;
	}
}

// function playerCoords(state = {x: 0, y: 0}, action) {
// 	switch (action.direction) {
// 		case 'LEFT': {
// 			return Object.assign(
// 				{}, 
// 				state, 
// 				{x: state.x === 0 ? 0 : state.x - 1}
// 			);
// 		}
// 		case 'RIGHT': {
// 			return Object.assign(
// 				{},
// 				state,
// 				{x: state.x + 1}
// 			);
// 		}
// 		case 'UP': {
// 			return Object.assign(
// 				{},
// 				state,
// 				{y: state.y === 0 ? 0 : state.y - 1}
// 			);
// 		}
// 		case 'DOWN': {
// 			return Object.assign(
// 				{},
// 				state,
// 				{y: state.y + 1}
// 			);
// 		}
// 		default:
// 			return state;
// 	}
// }

function cells(state = [], action) {
	switch (action.type) {
		case 'MOVE': {
			let playerPosition = {x: null, y: null};
			let newState = state.map( (row, y) => {
				return row.map( (cell, x) => {
					let newCell = Object.assign({}, cell);
					if (cell.isPlayer) {
						console.log('player @ (' + x + ', ' + y + ')');
						playerPosition = {x: x, y: y};
						newCell.isPlayer = false;
					}
					return newCell;
				});
			});
			switch (action.direction) {
				case 'LEFT':
					newState[playerPosition.y][playerPosition.x - 1].isPlayer = true;
					break;
				
				case 'RIGHT':
					newState[playerPosition.y][playerPosition.x + 1].isPlayer = true;
					break;
				
				case 'UP': 
					newState[playerPosition.y - 1][playerPosition.x].isPlayer = true;
					break;
			
				case 'DOWN': 
					newState[playerPosition.y + 1][playerPosition.x].isPlayer = true;
					break;
				
			}
			return newState;
		}
		default:
			return state;
	}
}

function currMap(state = {}, action) {
	switch (action.type) {
		case 'CREATE_MAP': {
			let newCells = [];
			const rows = state.height / state.cellSize;
			const cols = state.width / state.cellSize;

			for (let y = 0; y < rows; y++) {
				newCells.push([]);
				for (let x = 0; x < cols; x++) {
					newCells[y][x] = {
						xCoor: x,
						yCoor: y,
						size: state.cellSize,
						isPlayer: x === state.playerCoords.x && y === state.playerCoords.y,
						isWall: Math.random() > 0.8 ? true : false,
					};
				}
			}
			return Object.assign(
				{}, 
				state, 
				{cells: newCells}
			);
		}
		case 'MOVE':
			return Object.assign(
				{},
				state,
				{cells: cells(state.cells, action)}
			);
		// case 'MOVE':
		// 	return Object.assign(
		// 		{}, 
		// 		state, 
		// 		{playerCoords: playerCoords(state.playerCoords, action)}
		// 	);
		default:
			return state;
	}
}

export default function game(state = initialState, action) {
	switch (action.type) {
		case 'EXPEND_ENERGY':
			return Object.assign(
				{},
				state,
				{health: health(state.health, action)}
			);
		case 'CREATE_MAP':
		case 'MOVE':
			console.log('move');
			return Object.assign(
				{}, 
				state, 
				{currMap: currMap(state.currMap, action)}
			);
		default:
			return state;
	};
}