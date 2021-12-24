// "use strict"

let computerPlay = () => {
	const allThreeMoves = ['Rock', 'Paper', 'Scissors'];
	const randNum = Math.floor(Math.random() * 3);

	return (allThreeMoves[randNum]);
};

let playRound = (playerMove, computerMove) => {
	const player = playerMove.toLowerCase();
	const computer = computerMove.toLowerCase();
	let retString;
	const playerWinsArray = ['rock', 'scissors', 'scissors', 'paper',
		'paper', 'rock'];

	if (player === computer) {
		//retString = `Tie round: ${player} = ${computer}!`;
		retString = "Tie";
		console.log(retString);
		return retString;
	}
		
	for (let i = 0; i < 6; i += 2) {
		if (playerWinsArray[i] === player) {
			if (playerWinsArray[i+1] === computer) {
				//retString = `You won: ${player} beats ${computer}!`;
				retString = "Player";
				console.log(retString);
				return retString;
			}
		}
	}

	// Not a tie, and player didn't win, therefore lost
	//retString = `You lost: ${computer} beats ${player}!`;
	retString = "Computer";
	console.log(retString);
	return retString;
};

let game = () => {
	let playerMove;
	let computerMove;
	let tieScore = 0
	let playerScore = 0;
	let computerScore = 0;

	for (let i = 0; i < 5; i++) {
		playerMove = prompt(`Enter your  #${i+1} move bro: `);
		computerMove = computerPlay();

		//console.log(playRound(playerMove, computerMove));
		switch (playRound(playerMove, computerMove)) {
			case 'Player':
				playerScore += 1;
				break;
			case 'Computer':
				computerScore += 1;
				break;
			case 'Tie':
				tieScore += 1;
				break;
			default:
				console.log("playRound return error - should never get here");
		}
	}
	console.log(`Player ${playerScore}, Computer ${computerScore}, with ${tieScore} ties`);
};

game();

/* const playerSelection = "paper";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection)); */
