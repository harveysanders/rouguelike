const initialState = {
	health: 100,
	weapon: 'fist',
	attack: 7,
	level: 0,
	nextLevelAt: 60,
	dungeon: 0
}

function health(state = 100, action) {
	switch (action.type) {
		case 'EXPEND_ENERGY':
			return state = state - 1;
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
		default:
			return state;
	};
}