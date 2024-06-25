document.addEventListener('DOMContentLoaded', function() {
    // retrieving user input
    const userInput = document.getElementById('userInput');
    const addItemButton = document.getElementById('addItem');
    const itemList = document.getElementById('itemList');
    const pickRandomButton = document.getElementById('pickRandom');
    const result = document.getElementById('result');
    // array
    let items = [];

    // function of the add item button
    addItemButton.addEventListener('click', function(event) {
        event.preventDefault();
        const value = userInput.value.trim();
        if (value) {
            items.push(value);
            const listItem = document.createElement('li');
            listItem.textContent = value;
            itemList.appendChild(listItem);
            userInput.value = '';
            console.log(items); // Debugging line
        }
    });

    // function of picking button
    pickRandomButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (items.length > 0) {
            const randomIndex = Math.floor(Math.random() * items.length);
            result.textContent = `Random pick: ${items[randomIndex]}`;
            console.log(`Picked item: ${items[randomIndex]}`); // Debugging line
        } else {
            result.textContent = 'No items to pick from.';
        }
    });
});
