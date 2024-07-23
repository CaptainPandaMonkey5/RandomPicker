// Fisher-Yates (Knuth) Shuffle algorithm

document.addEventListener("DOMContentLoaded", function () {
  const userInput = document.getElementById("userInput");
  const addItemButton = document.getElementById("addItem");
  const itemList = document.getElementById("itemList");
  const randomizerButton = document.getElementById("Randomizer");
  const result = document.getElementById("result");

  addItemButton.addEventListener("click", function (event) {
    event.preventDefault();
    const newItem = userInput.value.trim().split(",");

    let hasValidItems = false;

    newItem.forEach((newItem) => {
      newItem = newItem.trim().replace(/,\s*/, "");

      if (newItem) {
        hasValidItems = true;
        const li = document.createElement("li");
        li.textContent = newItem;
        itemList.appendChild(li);
      }
    });
    userInput.value = "";

    if (!hasValidItems) {
      result.textContent = "No items to add.";
      setTimeout(() => {
        result.textContent = "";
      }, 2000);
    }
  });

  randomizerButton.addEventListener("click", function (event) {
    event.preventDefault();
    const items = Array.from(itemList.children);
    const randomizedItems = shuffleArray(items);
    itemList.innerHTML = " ";
    randomizedItems.forEach((item) => itemList.appendChild(item));

    if (items == 0) {
      result.textContent = "No items to shuffle.";
      setTimeout(() => {
        result.textContent = "";
      }, 2000);
    }
  });

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  clearButton.addEventListener("click", function (event) {
    event.preventDefault();
    itemList.innerHTML = "";
    result.textContent = "No items to clear.";
    setTimeout(() => {
      result.textContent = "";
    }, 2000);
  });
});
