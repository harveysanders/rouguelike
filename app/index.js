import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import GameContainer from './containers/GameContainer';
import onKeyDown from './controllers/keyboard';

document.onkeydown = onKeyDown;

function Game() {
	return (
			<GameContainer />
	);
}

ReactDOM.render(
	<Game />,
	document.getElementById('app')
);

Game();
store.subscribe(Game);