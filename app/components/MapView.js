import React from 'react';
import styles from '../styles';
import Cell from './Cell';

function MapView({cells}) {
	return (cells) ?
	(
		<div style={styles.mapView}>
			{cells.map(rows =>
				rows.map(cell => (
					<Cell
						key={cell.xCoor + ', ' + cell.yCoor}
						x={cell.xCoor}
						y={cell.yCoor}
						size={cell.size}
						isPlayer={cell.isPlayer}
						isWall={cell.isWall}
						isEnemy={cell.isEnemy}
					/>
				)
			)
		)}
		</div>
	)
	: <div>
			<div style={styles.cell}></div>
			<div style={styles.cell}></div>
		</div>;
}

export default MapView;