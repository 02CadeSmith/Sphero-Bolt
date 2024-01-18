//Programmer: Cade Smith 
//Date: 1.10.2024
//Program: Sphero Bolt Testing 
//Bolt ID:SB-B2F8

/*
async function startProgram() {
	await speak("Hello World", true);
	setMainLed({ r: 0, g: 0, b: 255});
	setSpeed(60);
	await delay (2);
	setSpeed(0);

}
*/

// Square W/ Different Colors For Each Line & Commit
/*
async function startProgram() {

	setMainLed({ r: 0, g: 0, b: 255 });

	await speak("Hello Square", true);

	await delay(1);

	for (var _i1 = 0; _i1 < 4; _i1++) {

		setMainLed(getRandomColor());

		await Sound.Game.Coin.play(true);

		await roll((getHeading() + 90), 60, 1);

		await delay(1);

	}

}

*/

// Square W/ Different Colors & Sounds For Each Line & Commit

async function startProgram() {

	setMainLed({ r: 0, g: 0, b: 255 });

	await speak("Hello Square", true);
	
	await Sound.Game.Coin.play(true);
	
	await roll((getHeading() + 90), 60, 1);

	await delay(1); 

	setMainLed({ r: 0, g: 255, b: 0 });

	await Sound.Game.Coin.play(true);

	await roll((getHeading() + 90), 60, 1);

	await delay(1); 
	
	setMainLed({ r: 255, g: 0, b: 0 });

	await Sound.Game.Coin.play(true);

	await roll((getHeading() + 90), 60, 1);

	await delay(1); 
	
	setMainLed({ r: 255, g: 255, b: 0 });

	await Sound.Game.Coin.play(true);

	await roll((getHeading() + 90), 60, 1);

	await delay(1);
	
	
		
		
		
	

}






// Figure 8 & Commit
