const toggleList = document.querySelector('#toggleList');
const listDiv = document.querySelector('.list'); /* This pre-existing code from earlier iterations of the projectalready has a reference to the html's div's "list" class, so I assume that's partly why the event handler wasn't put on html's ul, for example. */
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
//const listItems = document.getElementsByTagName('li');

/* COMMENTING OUT THIS OBSOLETE CODE. HAD TO BE DONE PER GUIL. SAME WITH CONSTANT (ABOVE).
for (let i = 0; i < listItems.length; i += 1) {
    listItems[i].addEventListener('mouseover', () => {
        listItems[i].textContent = listItems[i].textContent.toUpperCase();
    });
    listItems[i].addEventListener('mouseout', () => {
        listItems[i].textContent = listItems[i].textContent.toLowerCase();
    });
} */

//Lines 13-18 got C&P'd below. listItems got changed to listDiv for the quick and easy fix. No need to re-invent the wheel! However, some modification was needed ... so I am commenting out what was originally C&Pd, just so you can compare that to what we changed.
// listDiv.addEventListener('mouseover', () => {
//     listItems[i].textContent = listItems[i].textContent.toUpperCase();
// });
// listDiv.addEventListener('mouseout', () => {
//     listItems[i].textContent = listItems[i].textContent.toLowerCase();
// });
listDiv.addEventListener('mouseover', (event) => {
    if (event.target.tagName == 'LI') {
        event.target.textContent = event.target.textContent.toUpperCase();
    }    
});
listDiv.addEventListener('mouseout', (event) => {
    if (event.target.tagName == 'LI') {
        event.target.textContent = event.target.textContent.toLowerCase();
    }    
});

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