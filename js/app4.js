// Always declare your constants at the top of JS but also sort them in order of where they appear in HTML.
const toggleList = document.querySelector('#toggleList');
const listDiv = document.querySelector('.list');
const input = document.querySelector('input.description');
const p = document.querySelector('p.description'); /* Since there's more than one paragraph element on the page, we are using the class "description" to select the specific p we want. Also, because you declared this variable, you can go into Chrome Dev Tools, call p.style, open up what shows, and call any of those variables to play with different ways of styling p from the console! Example ... p.style.color = 'darkblue' changes text color.*/
const button = document.querySelector('button.description'); /* The event listener and function below would fire at the same time as the button beneath that if you didn't have the class specified here. Better specificity reduces bugs! */

//This is an event listener that listens for a click, then runs a function that either shows or hide the list. The function checks for the display set to none ... if so, it sets the display to block ... otherwise, it sets it to none ...?
toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'none') {
        toggleList.textContent = 'Hide list';
        listDiv.style.display = 'block';
    } else {
        toggleList.textContent = 'Show list';
        listDiv.style.display = 'none';
    }
});

button.addEventListener('click', () => {
    p.textContent = input.value + ':';    
})
// The above code will now allow you to enter content into the input field, click the button, and change the list description on the page!
// If you swap "textContent" with "innerHTML" the functionality on the page will appear to be the same. However, innerHTML works differently than textContent "under the hood" because innerHTML will actual manipulate the HTML.