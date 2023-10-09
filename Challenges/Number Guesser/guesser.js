const numberInput = document.getElementById("numberInput");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const percentageH4 = document.getElementById("percentage");

let attempts = 3;
let victory = false;
let percentage = 10;

function checkSubmit() {
  const guess = numberInput.value;
  if (attempts == 1) {
    submitBtn.textContent = "Play Again";
  }
  if (guess === "" || isNaN(parseInt(guess))) {
    message.style.color = "red";
    numberInput.style.borderColor = "red";
    message.textContent = "Please enter a valid number";
    return;
  } else if (guess == target) {
    return true;
  }
  numberInput.textContent = "";

  return false;
}

function calculatePercentage() {
  percentage = 100 / (7 + attempts);
  percentageH4.textContent = `Chance to guess ${percentage.toFixed(2)}%`;
}

submitBtn.addEventListener("click", () => {
  if (!attempts == 0) {
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
      message.textContent = `You have ${attempts} attempts left`;
    }
  } else if (submitBtn.textContent == "Play Again") {
    message.textContent = "";
    numberInput.value = "";
    attempts = 3;
    victory = false;
    submitBtn.textContent = "Submit";
    target = Math.floor(Math.random() * 10) + 1;
    calculatePercentage();
  }
});
calculatePercentage();
let target = Math.floor(Math.random() * 10) + 1;
