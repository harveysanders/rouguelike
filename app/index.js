import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

import HeadsUpContainer from './containers/HeadsUpContainer';


function Game() {
	return (
		<div>
			<HeadsUpContainer />
		</div>
	);
}

ReactDOM.render(
	<Game />,
	document.getElementById('app')
);