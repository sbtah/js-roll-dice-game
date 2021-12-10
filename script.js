"use strict";

// Selecting elements!
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const newBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
let scores, currentScore, activePlayer, playing;

// Functions.
function rollDice() {
	return Math.trunc(Math.random() * 6) + 1;
}

const init = function () {
	playing = true;
	scores = [0, 0];
	currentScore = 0;
	activePlayer = 0;

	score0El.textContent = 0;
	score1El.textContent = 0;
	currentScore0El.textContent = 0;
	currentScore1El.textContent = 0;

	diceEl.classList.add("hidden");
	player0El.classList.remove("player--winner");
	player1El.classList.remove("player--winner");
	player1El.classList.remove("player--active");
	player0El.classList.add("player--active");
};
init();

function switchPlayer() {
	document.getElementById(`current--${activePlayer}`).textContent = 0;
	currentScore = 0;
	activePlayer = activePlayer === 0 ? 1 : 0;
	player0El.classList.toggle("player--active");
	player1El.classList.toggle("player--active");
}

// Game logic.
// Roll dice button.
rollBtn.addEventListener("click", function () {
	if (playing) {
		// 1. Generating random dice roll.
		const dice = rollDice();
		// 2. Display proper dice.
		diceEl.classList.remove("hidden");
		diceEl.src = `dice-${dice}.png`; // .src manipulation !
		// 3. Check for rolled dice "1" if true, switch players.
		if (dice !== 1) {
			// Add dice to current player score.
			currentScore += dice;
			document.getElementById(`current--${activePlayer}`).textContent =
				currentScore;
		} else {
			switchPlayer();
		}
	}
});

// Hold button.
holdBtn.addEventListener("click", function () {
	if (playing) {
		// 1. Add current score to active player's score.
		scores[activePlayer] += currentScore;
		document.getElementById(`score--${activePlayer}`).textContent =
			scores[activePlayer];
		// 2. Check if score is already 100!
		// Finish game
		if (scores[activePlayer] >= 100) {
			playing = false;
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.add("player--winner");
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.remove("player--active");
		}
		// If not switch to next player!
		switchPlayer();
	}
});

// New game button.
newBtn.addEventListener("click", function () {
	init();
});
