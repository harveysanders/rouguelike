import React from 'react';
import HeadsUpContainer from './HeadsUpContainer';
import MapContainer from './MapContainer';
import store from '../store';

function dispatchWithLog(action){
	console.log('----orig state:----');
	console.log(store.getState());
	console.log('dispatching: ', action);
	store.dispatch({type: action})
	console.log('-----new state:----');
	console.log(store.getState());
	console.log('-------------------');
}

const GameContainer = React.createClass({
	render: function() {
		return (
			<div className='jumbotron text-center'>
				<HeadsUpContainer />
				<MapContainer />
				<button onClick={
					() => {dispatchWithLog('CREATE_MAP');}
				}>
					Create Map
				</button>
				<button onClick={
					() => {dispatchWithLog('EXPEND_ENERGY');}
				}>
					expend energy
				</button>

			</div>
		);
	}
})


export default GameContainer;