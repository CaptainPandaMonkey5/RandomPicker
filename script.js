document.addEventListener("DOMContentLoaded", function () {
  // retrieve inputs and push of buttons

  const userInput = document.getElementById("userInput");
  const addItemButton = document.getElementById("addItem");
  const itemList = document.getElementById("itemList");
  const pickRandomButton = document.getElementById("pickRandom");
  const result = document.getElementById("result");

  // array said items
  let items = [];

  // making the addItemButton work
  addItemButton.addEventListener("click", function (event) {
    // prevent website from refreshing
    event.preventDefault();

    // Get the user input, trim any leading/trailing spaces, and split it into an array of values using commas as the separator
    const values = userInput.value.trim().split(",");

    // Loop through each value in the array
    values.forEach((value) => {
      // Remove any leading/trailing spaces and commas from the value
      value = value.trim().replace(/,\s*/, "");

      // If the value is not empty
      if (value) {
        // Add the value to the items array
        items.push(value);

        // Create a new list item element
        const listItem = document.createElement("li");

        // Set the text content of the list item to the value
        listItem.textContent = value;

        // Add the list item to the item list
        itemList.appendChild(listItem);

        // Clear the user input field
        userInput.value = "";

        // Log the updated items array to the console
        console.log(items);
      } else {
        // If the value is empty, set the result text to indicate that there are no items to add
        result.textContent = "No items to add.";
        setTimeout(() => {
          result.textContent = "";
        }, 2000);
      }
    });
  });

  // making the pickRandomButton work
  pickRandomButton.addEventListener("click", function (event) {
    // prevent website from refreshing
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
      // If there are no items, set the result text to indicate that
      setTimeout(() => {
        result.textContent = "";
      }, 2000);
    }
  });

  // This event listener is attached to the clearButton element. When the button is clicked, it will perform the following actions:
  // - Clear the contents of the itemList element (which is a list of items)
  // - Clear the items array
  // - Clear the text content of the result element (which displays the picked item or a message)
  // This effectively clears all the items from the list and resets the state of the application
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
