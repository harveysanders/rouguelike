import React from 'react';
import styles from '../styles';

const Cell = ({x, y, size, isPlayer, isWall}) => (
	<div
		style={{
			height: size,
			width: size,
			background: isPlayer ? 'blue' : isWall ? 'grey' : 'white'
		}}>
		
	</div>
);

export default Cell;