import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import game from './reducers'
import HeadsUpContainer from './containers/HeadsUpContainer';

const store = createStore(game);

function Game() {
	return (
		<div>
			<HeadsUpContainer />
			<button onClick={
				function() {
					console.log('initial state:');
					console.log(store.getState());
					store.dispatch({
						type: 'EXPEND_ENERGY'
					})
					console.log('new state:');
					console.log(store.getState());
				}
			}>
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