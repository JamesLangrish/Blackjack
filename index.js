let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  return randomNumber;
}

function startGame() {
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got blackjack!";
    hasBlackjack = true;
  } else {
    message = "You lose.";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  message = "Drawing a new card";
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
}
