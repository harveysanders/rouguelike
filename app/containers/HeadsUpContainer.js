import React from 'react';
import HUD from '../components/HUD';

const HeadsUpContainer = React.createClass({
	render: function() {
		return (
			<div>
				<HUD />
			</div>
		);
	}
});

export default HeadsUpContainer;