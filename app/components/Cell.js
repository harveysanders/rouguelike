import React from 'react';
import styles from '../styles';

const Cell = ({x, y, size}) => (
		<div
			style={{
				height: size,
				width: size,
				border: '1px solid black'
			}}
			className='cell'>
		</div>
	);

export default Cell;