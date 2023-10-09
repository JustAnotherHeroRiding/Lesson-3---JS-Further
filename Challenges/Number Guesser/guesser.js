const numberInput = document.getElementById("numberInput");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const percentageH4 = document.getElementById("percentage");

let attempts = 3;
let victory = false;
let percentage = 10;

let guessedNumbers = new Set();
function checkSubmit() {
  const guess = numberInput.value;
  if (attempts == 1) {
    submitBtn.textContent = "Play Again";
  }
  if (guess === "" || guess > 10) {
    message.style.color = "red";
    numberInput.style.borderColor = "red";
    message.textContent = "Please enter a valid number";
    return;
  }
  if (isNaN(parseInt(guess))) {
    message.style.color = "red";
    numberInput.style.borderColor = "red";
    message.textContent = "Please enter a valid number";
    return;
  }
  if (guess == target) {
    guessedNumbers.add(guess);
    return true;
  } else {
    guessedNumbers.add(guess);
  }

  return false;
}

function calculatePercentage() {
  let remainingAttempts = 10 - guessedNumbers.size;
  percentage = 100 / remainingAttempts;
  percentageH4.textContent = `Chance to guess ${percentage.toFixed(2)}%`;
}

function handleSubmit() {
  if (attempts > 0) {
    if (checkSubmit() === true) {
      message.textContent = "You guessed correctly!";
      message.style.color = "green";
      numberInput.style.borderColor = "green";
      victory = true;
      attempts = 0;
      submitBtn.textContent = "Play Again";
    } else if (checkSubmit() == false) {
      attempts--;
      calculatePercentage();
      message.style.color = "red";
      numberInput.style.borderColor = "red";

      if (attempts == 0) {
        message.textContent = `You ran out of attempts :(, the correct number was ${target}`;
      } else {
        message.textContent = `${numberInput.value} is not correct, you have ${attempts} attempts left`;
      }
      numberInput.value = "";
      numberInput.focus();
    }
  } else if (submitBtn.textContent == "Play Again") {
    message.textContent = "";
    numberInput.value = "";
    attempts = 3;
    victory = false;
    submitBtn.textContent = "Submit";
    target = Math.floor(Math.random() * 10) + 1;
    guessedNumbers = new Set();
    calculatePercentage();
    numberInput.focus();

  }
}

submitBtn.addEventListener("click", () => {
  handleSubmit();
});
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleSubmit();
  }
});
calculatePercentage();
let target = Math.floor(Math.random() * 10) + 1;
