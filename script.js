"use strict";

function rollDice() {
	return Math.trunc(Math.random() * 6) + 1;
}

// Selecting elements!
let currentScore = 0;
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const newBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

rollBtn.addEventListener("click", function () {
	// 1. Generating random dice roll.
	const dice = rollDice();
	console.log(dice);
	// 2. Display proper dice.
	diceEl.classList.remove("hidden");
	diceEl.src = `dice-${dice}.png`; // .src manipulation !
	// 3. Check for rolled dice "1" if true, switch players.
	if (dice !== 1) {
		// Add dice to current player score.
		currentScore += dice;
		currentScore0El.textContent = currentScore; // Changle later!
	} else {
		// Switch to next player.
	}
});
