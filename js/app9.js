const toggleList = document.querySelector('#toggleList');
const listDiv = document.querySelector('.list')
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul')
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

listUl.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') { /* Just wrapped some existing code in a new if statement to reference the remove button. */
        if (event.target.className == 'remove') {
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        } /* Adding new if statement below to reference the up buttons. C&P'd Lines 12-14, just changing Line 18 to "up" instead of "remove" to reference the "up" button. */
        if (event.target.className == 'up') {
            let li = event.target.parentNode;
            let prevLi = li.previousElementSibling; /* Since you want to move the target element up, you'll need to it's previous sibling as a reference. */
            let ul = li.parentNode;
            if (prevLi) {
                ul.insertBefore(li, prevLi); /* This requires 3 nodes to reference. This is what actually moves the targeted element up. BTW, no search thing as insertAfter method. :-) */
            }            
        } 
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