'use strict';
const scoreEl0 = document.querySelector("#score--0");
const scoreEl1 = document.getElementById("score--1");//this methode is faster than that of query selector
const diceEl = document.querySelector(".dice");
const butNew = document.querySelector(".btn--new");
const butHold = document.querySelector(".btn--hold");
const butRoll = document.querySelector(".btn--roll");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const currentEl = document.querySelectorAll(".current-score")
const players = document.querySelectorAll(".player")
const score = document.querySelectorAll(".score");
let currentScore = 0;
let currentplayer = 0;
let totalScore = [0, 0];

scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
diceEl.classList.add("hidden");
const switchPlayer = function () {
    currentplayer = (currentplayer + 1) % 2;
    console.log(currentplayer)
    players[currentplayer].classList.add("player--active");
    players[((currentplayer + 1) % 2)].classList.remove("player--active");
    currentEl[0].textContent = 0;
    currentEl[1].textContent = 0;
    currentScore = 0;
    return (currentplayer);

}
const rst = function () {
    currentplayer = 0;
    currentEl[0].textContent = 0;
    currentEl[1].textContent = 0;
    currentScore = 0;
    players[0].classList.add("player--active");
    players[1].classList.remove("player--active");
    score[0].textContent = 0;
    score[1].textContent = 0;
    diceEl.src = `dice-1.png`;



}
butNew.addEventListener("click", rst);


const hld = function () {
    totalScore[currentplayer] += currentScore;
    score[currentplayer].textContent = totalScore[currentplayer];
    switchPlayer();
}


butHold.addEventListener("click", hld);







butRoll.addEventListener("click", function () {
    // generating random number 
    const dice = Math.trunc(Math.random() * 6) + 1;
    // displaying dice 
    diceEl.src = `dice-${dice}.png`;

    diceEl.classList.remove("hidden");

    if (dice !== 1) {
        currentScore += dice; // a=a+1
        currentEl[currentplayer].textContent = currentScore;


    } else {


        switchPlayer();

    }







})





