import React from 'react';
import styles from '../styles';

const Cell = ({x, y, size, isPlayer}) => (
		<div
			style={{
				height: size,
				width: size,
				border: '1px solid black',
				background: isPlayer ? 'blue' : 'white' 
			}}
			className='cell'>
			
		</div>
	);

export default Cell;