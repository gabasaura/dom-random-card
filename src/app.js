/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Constantes
  const suits = ["spade", "diamond", "heart", "club"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  // Botones
  const generateButton = document.getElementById("generateButton");
  const resetButton = document.getElementById("resetButton");
  // Dimensiones
  const widthInput = document.getElementById("widthInput");
  const heightInput = document.getElementById("heightInput");

  // Select clases card y number
  const card = document.querySelector(".card");
  const num = document.querySelector(".num");

  // Function to get random item from an array
  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  // Generate a random card
  function generateRandomCard() {
    const randomSuit = getRandomItem(suits);
    const randomValue = getRandomItem(values);
    return { suit: randomSuit, value: randomValue };
  }

  function updateCardSize(width, height) {
    card.style.width = width;
    card.style.height = height;
  }

  function resetCard() {
    widthInput.value = "";
    heightInput.value = "";
    updateCardSize("", "");
  }

  resetButton.addEventListener("click", function() {
    resetCard();
  });

  generateButton.addEventListener("click", function() {
    const randomCard = generateRandomCard();
    card.className = "p-3 m-2 border border-success rounded-2 card";
    card.classList.add(randomCard.suit);
    num.textContent = randomCard.value;
  });

  let intervalId;
  function startInterval() {
    intervalId = setInterval(function() {
      const randomCard = generateRandomCard();
      card.className = "p-3 m-2 border border-success rounded-2 card";
      card.classList.add(randomCard.suit);
      num.textContent = randomCard.value;
    }, 10000);
  }

  function stopInterval() {
    clearInterval(intervalId);
  }

  startInterval();

  widthInput.addEventListener("input", function() {
    updateCardSize(widthInput.value, heightInput.value);
  });

  heightInput.addEventListener("input", function() {
    updateCardSize(widthInput.value + "px", heightInput.value + "px");
  });

  const randomCard = generateRandomCard();

  // SUMON NAIPE
  card.classList.add(randomCard.suit);
  num.textContent = randomCard.value;
};
