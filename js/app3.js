/* The below two rules work in combination to change all of the list items to purple ... no ID necessary!  First, you capture all of the list items in a constant named myList ... second, you iterate over the listem items with a for loop. */
const myList = document.getElementsByTagName('li');
/* NOTE: "getElementsByTagName" returns a collection of elements. It's not like "getElementById", which only returns one element, hence the singular "Element"... */
for (let i = 0; i <myList.length; i +=1) {
    myList[i].style.color = 'purple';
}

/* The below two rules work in combination to identify all of the list items from html that are not purple and turn them red, although you could also hide the non-purple list items in a more practical application. How does the browser know some list items are not purple? I gave them a class of "error-not-purple"! */
/* After figuring out a different way to write first rule below, I commented it out and left the refactored version NOT commented-out. */
// const errorNotPurple = document.getElementsByClassName('error-not-purple');
const errorNotPurple = document.querySelectorAll('.error-not-purple');

for (let i = 0; i <errorNotPurple.length; i +=1) {
    errorNotPurple[i].style.color = 'red';
}

/* This just shows how you can easily stripe the list items with light grey, just to make the list more human-readable, using nth-child. */
const odds = document.querySelectorAll('li:nth-child(odd)');
  
for (let i = 0; i < odds.length; i +=1) {
    odds[i].style.backgroundColor = 'lightgrey';
}