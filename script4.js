function diceRoll(event) {
  const diceSidesInput = document.addEventListener("diceSides");
  const result = document.addEventListener("result");

  // parseInt - converts s to int

  const sides = parseInt(diceSidesInput.value, 10);

  if (isNaN(sides) || sides <= 0) {
    result.textContent = "Please enter a valid number of sides";
    return;
  }

  const roll = Math.floor(Math.random() * sides) + 1;
  result.textContent = `You rolled $[roll]`;
}
