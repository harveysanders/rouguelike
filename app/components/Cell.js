import React from 'react';
import styles from '../styles';

const Cell = ({x, y, size, isPlayer, isWall, isEnemy}) => (
	<div
		style={{
			height: size,
			width: size,
			background: isPlayer 
				? 'blue' 
				: isWall 
				? 'grey' 
				: isEnemy
				? 'red'
				: 'white'
		}}>
		
	</div>
);

export default Cell;