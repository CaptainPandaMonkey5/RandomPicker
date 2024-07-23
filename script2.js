document.addEventListener("DOMContentLoaded", function () {
  const lowerLimitInput = document.getElementById("lowerLimit");
  const upperLimitInput = document.getElementById("upperLimit");
  const generateButton = document.getElementById("generateButton");
  const clearButton = document.getElementById("clearButton");
  const result = document.getElementById("result");

  let timeoutId;

  function getRandomNumberInRange(lower, upper) {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
  }

  generateButton.addEventListener("click", function (event) {
    event.preventDefault();
    const lowerLimit = parseInt(lowerLimitInput.value);
    const upperLimit = parseInt(upperLimitInput.value);

    if (isNaN(lowerLimit) || isNaN(upperLimit)) {
      event.preventDefault();
      result.textContent = "Please enter valid numbers for both limits.";
      setTimeout(() => {
        result.textContent = "";
      }, 5000);
      return;
    }

    if (upperLimit <= lowerLimit) {
      event.preventDefault();
      result.textContent = "Upper limit must be higher than lower limit.";
      setTimeout(() => {
        result.textContent = "";
      }, 2000);
      return;
    }

    const randomNumber = getRandomNumberInRange(lowerLimit, upperLimit);
    result.textContent = `Random Number: ${randomNumber}`;
    setTimeout(() => {
      result.textContent = "";
    }, 10000);
    clearTimeout(timeoutId);
  });

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
