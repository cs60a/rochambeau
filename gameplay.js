// "use strict"

const container = document.querySelector('#container');
const content = document.createElement('div');
// content.classList.add('content');

// content.textContent = 'Hail the glorious text content';
// container.appendChild(content);

let playerScore = 0;
let computerScore = 0
let tiedScore = 0;


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
		
	for (let i = 0; i < 6; i += 2) { // 6 is size of playerWinsArray
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

	/***** REPLACE THIS WITH BUTTON-BASED PLAY
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
	****/

	console.log(`Player ${playerScore}, Computer ${computerScore}, with ${tieScore} ties`);
};

// Here begins the refactoring for button-based play
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

	button.addEventListener('click', () => {
		// button.style.background = 'pink';
		playerMove = button.id;

		// alert(playerMove);
		computerMove = computerPlay();

		switch (playRound(playerMove, computerMove)) {
			case 'Player':
				console.log("Player won!");
				playerScore++;
				break;
			case 'Computer':
				console.log("Computer won!");
				computerScore++;
				break;
			case 'Tie':
				console.log("Tie!");
				tiedScore++;
				break;
			default:
				console.log("playRound return error - should never get here");
		}

		textToPrint = "Player Net Score = " + (playerScore - computerScore).toString();
		document.getElementById("score").innerText = textToPrint;

		if ((playerScore - computerScore) >= 5) {
			document.getElementById("score").innerText = "Player Wins!";
			playerScore = computerScore = tiedScore = 0;
		}

		if ((computerScore - playerScore) >= 5) {
			document.getElementById("score").innerText = "Computer Wins!";	
			playerScore = computerScore = tiedScore = 0;
		}
	});

});


// game();

/* const playerSelection = "paper";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection)); */
