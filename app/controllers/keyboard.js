import store from '../store';
import dispatchWithLog from '../utils/dispatchWithLog';

function onKeyDown(event) {
	if (!event)
		event = window.event;
	let code = event.keyCode;
	if (event.charCode && code === 0)
		code = event.charCode;
	switch(code) {
	case 37:
		//LEFT arrow key
		store.dispatch({
			type: 'MOVE',
			direction: 'LEFT'
		});
		// dispatchWithLog('UPDATE_MAP');
		break;
	case 38:
		//UP arrow key
		store.dispatch({
			type: 'MOVE',
			direction: 'UP'
		});
		// dispatchWithLog('UPDATE_MAP');
		break;
	case 39:
		//RIGHT arrow key
		store.dispatch({
			type: 'MOVE',
			direction: 'RIGHT'
		});
		// dispatchWithLog('UPDATE_MAP');
		break;
	case 40:
		//DOWN arrow key
		store.dispatch({
			type: 'MOVE',
			direction: 'DOWN'
		});
		// dispatchWithLog('UPDATE_MAP');
		break;
	}
	// event.preventDefault();
};

export default onKeyDown;