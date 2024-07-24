document.addEventListener("DOMContentLoaded", function () {
  // retrieve inputs and push of buttons

  const userInput = document.getElementById("userInput");
  const addItemButton = document.getElementById("addItem");
  const itemList = document.getElementById("itemList");
  const pickRandomButton = document.getElementById("pickRandom");
  const result = document.getElementById("result");

  let items = [];

  addItemButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Get the user input, trim any leading/trailing spaces, and split it into an array of values using commas as the separator
    const values = userInput.value.trim().split(",");

    // Loop through each value in the array
    values.forEach((value) => {
      // Remove any leading/trailing spaces and commas from the value
      value = value.trim().replace(/,\s*/, "");

      if (value) {
        // Add the value to the items array
        items.push(value);
        const listItem = document.createElement("li");
        // Set the text content of the list item to the value
        listItem.textContent = value;
        // Add the list item to the item list
        itemList.appendChild(listItem);
        // Clear the user input field
        userInput.value = "";
        console.log(items);
      } else {
        result.textContent = "No items to add.";
        setTimeout(() => {
          result.textContent = "";
        }, 2000);
      }
    });
  });

  pickRandomButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Check if there are any items to pick from
    if (items.length > 0) {
      // Generate a random index within the range of the items array
      const randomIndex = Math.floor(Math.random() * items.length);
      // Set the result text to display the randomly picked item
      result.textContent = `Random pick: ${items[randomIndex]}`;
      // Log the picked item to the console
      console.log(`Picked item: ${items[randomIndex]}`);
    } else {
      result.textContent = "No items to pick from.";
      setTimeout(() => {
        result.textContent = "";
      }, 2000);
    }
  });

  clearButton.addEventListener("click", function (event) {
    event.preventDefault();
    itemList.innerHTML = "";
    items = [];
    result.textContent = "";

    if (items.length == 0) {
      result.textContent = "No items to clear.";
      setTimeout(() => {
        result.textContent = "";
      }, 2000);
    }
  });
});

const tham = document.querySelector(".tham");

tham.addEventListener("click", () => {
  tham.classList.toggle("tham-active");
});
