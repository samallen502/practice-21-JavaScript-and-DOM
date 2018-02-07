const toggleList = document.querySelector('#toggleList');
const listDiv = document.querySelector('.list');
// We have a lot of buttons, so I added "description" to these 3 constants to make them easier to follow.
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
// Below three constants are new.
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');


toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'none') {
        toggleList.textContent = 'Hide list';
        listDiv.style.display = 'block';
    } else {
        toggleList.textContent = 'Show list';
        listDiv.style.display = 'none';
    }
});

descriptionButton.addEventListener('click', () => {
    descriptionP.innerHTML = descriptionInput.value + ':';
});

// NEW: This is an event listener for the addItemButton constant you called at the top.
addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0]; /* "ElementS" means that this method returns a collection. A collection is like an array. Therefore, you need to specify [0] since there is only one ul, which would be at position 0 in an array, so to speak.*/
    let li = document.createElement('li'); /* Within the function, this creates a new list element, then assigns it to the variable, li. */
    li.textContent = addItemInput.value;
    ul.appendChild(li); /* This will allow user to create a new list item, then append it to the end of the DOM! */
    addItemInput.value = '';
});

// NEW: This is a "handler" for the "remove item" button.  It's very similar to the above handler, which lets you add items, except this one is tweaked to help the user remove items.
removeItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.querySelector('li:last-child');
    ul.removeChild(li);
});