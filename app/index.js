import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import HeadsUpContainer from './containers/HeadsUpContainer';
import onKeyDown from './controllers/keyboard';

document.onkeydown = onKeyDown;

function Game() {
	return (
		<div>
			<HeadsUpContainer />
			<button>
				decrease health
			</button>
		</div>
	);
}

ReactDOM.render(
	<Game />,
	document.getElementById('app')
);

Game();
store.subscribe(Game);