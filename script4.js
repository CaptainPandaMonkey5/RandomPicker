document.addEventListener("DOMContentLoaded", function () {
  function diceRoll(event) {
    const diceSidesInput = document.getElementById("diceSides");
    const result = document.getElementById("result");
    const rollButton = document.getElementById("rollButton");

    // parseInt - converts s to int

    const sides = parseInt(diceSidesInput.value, 10);

    if (isNaN(sides) || sides <= 0) {
      result.textContent = "Please enter a valid number of sides";
      return;
    }

    const roll = Math.floor(Math.random() * sides) + 1;
    result.textContent = `You rolled $[roll]`;
  }

  rollButton.addEventListener("click", diceRoll);

  clearButton.addEventListener("click", function (event) {
    event.preventDefault();
    lowerLimitInput.value = "";
    upperLimitInput.value = "";
    result.textContent = "";

    if (!lowerLimitInput.value && !upperLimitInput.value) {
      result.textContent = "No items to clear.";
      setTimeout(() => {
        result.textContent = "";
      }, 5000);
    }
  });
});
