document.addEventListener("DOMContentLoaded", function () {
  const diceSidesInput = document.getElementById("diceSides");
  const result = document.getElementById("result");
  const rollButton = document.getElementById("rollButton");
  function diceRoll(event) {
    // parseInt - converts s to int
    event.preventDefault();
    const sides = parseInt(diceSidesInput.value, 10);

    if (isNaN(sides) || sides <= 0) {
      event.preventDefault();
      result.textContent = "Enter valid number of sides";
      setTimeout(() => {
        result.textContent = "";
      }, 5000);
      return;
    }

    const roll = Math.floor(Math.random() * sides) + 1;
    result.textContent = `You rolled ${roll}`;
  }

  rollButton.addEventListener("click", diceRoll);

  const clearButton = document.getElementById("clearButton");
  clearButton.addEventListener("click", function (event) {
    event.preventDefault();
    result.textContent = "";
    diceSidesInput.value = "";

    if (result.textContent) {
      result.textContent = "";
      setTimeout(() => {
        result.textContent = "";
      }, 2000);
    } else {
      result.textContent = "No items to clear.";
      setTimeout(() => {
        result.textContent = "";
      }, 2000);
    }
  });
});
