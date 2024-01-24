// Team Members: Cade Smith & Carson Grant  
//Name: Cade Smith 
// Date: 1.22.2024
//Program: Maze
//Bolt ID: B2F8

//Start Commit

async function startProgram() {

	setMainLed({ r: 255, g: 255, b: 255 });

	await speak("Start", true); 

	await scrollMatrixText('Start!', { r: 66, g: 56, b: 255 }, 15, true)
	
	//Blue LED Commit
	
	await roll((getHeading() + 0), 60, 2.5);  
	
	await scrollMatrixText('Slue!', { r: 0, g: 0, b: 255 }, 15, true)

	await delay (1);
	
	await setMainLed({ r: 0, g: 0, b: 255 }); 
	
	await delay (1);
	
	await roll((getHeading() + 90), 60, 1.6); 
	
	await delay (1);
	
	//Sound 1 Commit 
	
	setMainLed({ r: 0, g:0 , b:0  });
	
	await Sound.Game.Coin.play(true); 
	
	await delay (1);

	await roll((getHeading() + 90), 60, 1.1);  
	
	await delay (1); 
	
	await roll((getHeading() + 35), 60, 1.1);
	
	// Red LED Commit 
	
	setMainLed({ r: 255, g:0 , b:0  });
	
	await delay (1);
	
	await roll((getHeading() + -90), 60, .5)

}
