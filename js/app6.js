const toggleList = document.querySelector('#toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li'); /* NEW ... this references all list items but if you just wanted to reference the first list items, just add [0] after ('li') ... or you could add [1] for oranges, [2] for amethyst, and so on.  */

//NEW: this function works with the constant listItems and makes text move to CAPS upon mouseover
//listItems.addEventListener('mouseover', () => {
//    listItems.textContent = listItems.textContent.toUpperCase();
//});

//NEW: this function works with the constant listItems and makes the text move to lowercase upon mouseout (no more hovering over the text)
//listItems.addEventListener('mouseout', () => {
//    listItems.textContent = listItems.textContent.toLowerCase();
//});

//COMMENTING OUT LINES 11-19 BECAUSE THEY DON'T SUFFICE TO TARGET ALL LIST ITEMS. LEAVING LINES 11-19 TO HELP YOU FOLLOW THE LOGIC OF HOW WE GOT TO LINES 23-31, THOUGH.

//NEW: To target all list items, not just grapes, you can surround Lines 12-19 in a FOR LOOP ... just make sure to put an [i] after listItems, like listItems[i], to cycle through all list items ... like so.
for (let i = 0; i < listItems.length; i += 1) {
    listItems[i].addEventListener('mouseover', () => {
        listItems[i].textContent = listItems[i].textContent.toUpperCase();
    });
    listItems[i].addEventListener('mouseout', () => {
        listItems[i].textContent = listItems[i].textContent.toLowerCase();
    });
}

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

addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.querySelector('li:last-child');
    ul.removeChild(li);
});