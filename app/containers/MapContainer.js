import React from 'react';
import MapView from '../components/MapView';
import store from '../store';


const MapContainer = React.createClass({
	render: function() {
		return (
			<div>
				<MapView cells={store.getState().currMap.cells}/>
			</div>
		)
	}
});

export default MapContainer;