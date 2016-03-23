import React from 'react';

function HUD({gameState}) {
	return (
		<div>
			<div>Health: {gameState.health}</div> 
			<div>Weapon: {gameState.weapon}</div> 
			<div>Attack: {gameState.attack}</div> 
			<div>Level: {gameState.level} </div>
			<div>Next Level: {gameState.nextLevelAt}</div>
			<div>Dungeon: {gameState.dungeon}</div>
		</div>
	)
}

export default HUD;