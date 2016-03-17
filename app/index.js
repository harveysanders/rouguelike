import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import GameContainer from './containers/GameContainer';
import onKeyDown from './controllers/keyboard';

document.onkeydown = onKeyDown;

const render = () => {
	ReactDOM.render(
		<GameContainer />,
		document.getElementById('app')
	);	
}

render();
store.subscribe(render);
