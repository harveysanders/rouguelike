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
		cellSize: 100,
		cells:[[]]
	}
}

function health(state = 100, action) {
	switch (action.type) {
		case 'EXPEND_ENERGY':
			return state = state - 1;
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
						size: state.cellSize
					};
				}
			}
			return Object.assign(
				{}, 
				state, 
				{cells: newCells}
			);
		}
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
			return Object.assign(
					{},
					state,
					{currMap: currMap(state.currMap, action)}
				);
		default:
			return state;
	};
}