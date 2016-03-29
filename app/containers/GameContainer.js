import React from 'react';
import HeadsUpContainer from './HeadsUpContainer';
import MapContainer from './MapContainer';
import store from '../store';
import dispatchWithLog from '../utils/dispatchWithLog';

const GameContainer = React.createClass({

	render: function() {
		return (
			<div className='jumbotron text-center'>
				<HeadsUpContainer />
				<MapContainer />
				<button onClick={
					() => {dispatchWithLog({type:'CREATE_MAP'});}
				}>
					Create Map
				</button>
				<button onClick={
					() => {dispatchWithLog({
						type:'CREATE_ENEMIES',
						amount: 6
					});}
				}>
					create enemies
				</button>

			</div>
		);
	}
})


export default GameContainer;