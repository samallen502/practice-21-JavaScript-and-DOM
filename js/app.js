/* The command below creates a CONSTant that I've defined as "myHeading" ... then the document.getElementById method is used to reference the ID, "MyHeading", from html. */
const myHeading = document.getElementById('myHeading'); /* document = global variable, representing entire webpage ... getElementById method belongs to document object, getElementById looks through entire document for MyHeading and returns it if it exists. */
/* Another way you could write the above code is below. I TESTED THIS AND IT WORKS JUST THE SAME! There is only h1, though, so there's not much point. If you had a bunch of list items, though, this would be handy, as it could reference them all, with the 0 referencing the first list item, just like 0 references the first list item in an array.*/
//const myHeading = document.getElementsByTagName('h1')[0];

/* The command above references myHeading and stores it in the constant, MyHeading. This sets you up for easier manipulation, using the commands below. */

const myButton = document.getElementById('myButton'); /* This sets me up to call addEventListenter on a button that I just created in html. */
const myTextInput = document.getElementById('myTextInput');

/* The command below tells the browser to start listening for mouse events -- keystrokes, clicks, etc. Lots of events. Commenting out the code, though, as I added a button to turn the heading red versus the user possibly clicking on the title -- better UX. :-) */
//myHeading.addEventListener(); <-- This is just the basic structure of the argument, not actual code I wanted to pass.
//myHeading.addEventListener('click', () => {
//    myHeading.style.color = 'red';
//});
/* Above, you've told the browser to LISTEN for clicks to the heading, then MANIPULATING THE EVENT by executing a function to turn the heading red upon click. Tested and it works! */

myButton.addEventListener('click', () => {
    myHeading.style.color = myTextInput.value;
});