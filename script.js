'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore = 0;
let current0El = document.getElementById('current--0');
let current0E2 = document.getElementById('current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let activePlayer = 0;
const scores = [0, 0];

// to hide the dice crete a hideen class and get that when the game starts .hiideen{display:none}
// the classlist is the read only property
// used to manipulate the element of that class
// here the element dice of class name accesses the hidden classs created in the css

// rolling the dice
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  if (dice != 1) {
    // add to the current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // current0El.textContent = currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  // add current score to the active player score
  // and check the score is atleast 100
  // if yes finish the game else switch to the next player
  scores[activePlayer] = scores[activePlayer] + currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 20) {
    document
      .querySelector(`player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    switchPlayer();
  }
});
