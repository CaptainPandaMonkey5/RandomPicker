document.addEventListener('DOMContentLoaded', function(){

    // retrieve inputs and push of buttons

    const userInput = document.getElementById('userInput');
    const addItemButton = document.getElementById('addItem');
    const itemList = document.getElementById('itemList');
    const pickRandomButton = document.getElementById('pickRandom');
    const result = document.getElementById('result');

    // array said items
    let items = [];

    // making the addItemButton work
    addItemButton.addEventListener('click', function(event){
        // prevent website from refreshing
        event.preventDefault();

        const value = userInput.value.trim();

        // algo
        if (value) {
            items.push(value);
            // creating the user input items
            const listItem = document.createElement('li');
            listItem.textContent = value;

            // list the user input items
            itemList.appendChild(listItem);
            userInput.value = '';
        }
    });

    pickRandomButton.addEventListener('click', function(event){
        event.preventDefault();

        if (item.length > 0) {
            const randomIndex = Math.floor(Math.random() * items.length);
            result.textContent = `Random pick: ${items [randomIndex]}`;
        }
    });


});