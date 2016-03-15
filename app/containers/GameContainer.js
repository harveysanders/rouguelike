import React from 'react';
import HeadsUpContainer from './HeadsUpContainer';
import MapView from '../components/MapView';

const GameContainer = React.createClass({
	render: function() {
		return (
			<div className='jumbotron text-center'>
				<HeadsUpContainer />
				<MapView />
			</div>
		);
	}
})


export default GameContainer;