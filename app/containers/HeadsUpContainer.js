import React from 'react';
import HUD from '../components/HUD';
import store from '../store';

const HeadsUpContainer = React.createClass({
	render: function() {
		return (
			<div>
				<HUD gameState={store.getState()}/>
			</div>
		);
	}
});

export default HeadsUpContainer;