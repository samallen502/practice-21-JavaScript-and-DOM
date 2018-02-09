const toggleList = document.querySelector('#toggleList');
const listDiv = document.querySelector('.list')
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul') /* NEW. Added this to fix a bug. See Line 11 for more. */
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
// const removeItemButton = document.querySelector('button.removeItemButton');
/* No need for this since the "Remove Item" button was removed in HTML. */

/* Changed from listDiv.addEventListener to listUl.addEventListener to fix a bug where certain buttons would delete all li, which was not what we wanted. */
listUl.addEventListener('click', (event) => { /* Changed trigger from mouseover to click. */
    if (event.target.tagName == 'BUTTON') { /* Changed click handler to respond to 'BUTTON' elements instead of 'LI' elements. */
        // event.target.textContent = event.target.textContent.toUpperCase();
        // Removing the line of code in the mouseover handler's if block since we are no longer changing text to uppercase in this exercise.
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
    }    
});
// listDiv.addEventListener('mouseout', (event) => {
//     if (event.target.tagName == 'LI') {
//         event.target.textContent = event.target.textContent.toLowerCase();
//     }    
// });
// Removing the mouseout handler from code because the element will be gone from the DOM before the mouse can leave the element's area

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

/* No need for this since the "Remove Item" button was removed in HTML. */
// removeItemButton.addEventListener('click', () => {
//     let ul = document.getElementsByTagName('ul')[0];
//     let li = document.querySelector('li:last-child');
//     ul.removeChild(li);
// });