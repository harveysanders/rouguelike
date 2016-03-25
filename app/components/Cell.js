import React from 'react';
import styles from '../styles';

const Cell = ({x, y, size, isPlayer, isWall, cssClass}) => (
	<div
		style={{
			height: size,
			width: size,
			background: isPlayer ? 'blue' : isWall ? 'grey' : 'white'
		}}
		className={cssClass}>
		
	</div>
);

export default Cell;