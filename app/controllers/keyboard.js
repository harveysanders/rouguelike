import store from '../store';

function expendEnergy() {
	console.log('------initial state: --------');
	console.log(store.getState());
	store.dispatch({
		type: 'EXPEND_ENERGY'
	})
	console.log('new state:');
	console.log(store.getState());
}

function onKeyDown(event) {
	if (!event)
		event = window.event;
	let code = event.keyCode;
	if (event.charCode && code === 0)
		code = event.charCode;
	switch(code) {
	case 37:
		//LEFT arrow key
		console.log('LEFT key');
		expendEnergy();
		break;
	case 38:
		//UP arrow key
		console.log('UP key');
		expendEnergy();
		break;
	case 39:
		//RIGHT arrow key
		console.log('RIGHT key');
		expendEnergy();
		// logDispatch('INCREMENT_GENERATION');
		break;
	case 40:
		//DOWN arrow key
		console.log('DOWN key');
		expendEnergy();
		break;
	}
	// event.preventDefault();
};

export default onKeyDown;