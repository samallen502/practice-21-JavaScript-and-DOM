Initially inspired by:
https://teamtreehouse.com/library/a-simple-example

ABOUT THIS REPOSITORY:

There is a lot to unpack here.  This whole repository basically covers hours of Treehouse instruction that started with the above-mentioned link, so bear with me.

index.html works with app.js automatically -- app2.js was just part of a debugging process, see below section for details on that -- to allow the user to input a color value as text and click a button to change the header color.

index2.html is a variation of index.html, except the text input and the button have been stripped and a list of "things that are purple" has been added. index2.html works with app3.js automatically to list all of the items that are purple in real life in purple on the list, as they should be ... and mark all of the list items that are not purple in real life in red on the list ... and, finally, the nth-child property is used to give the list some grey zebra striping, just to make the output more readable to the user.

index3.html is a variation of index2, where the class of "error-not-purple" has been stripped from the list items, an input was added, a button was added next to the input field, and a class of "description" was assigned to p/input/button, a div was used to wrap the entire list, and a neat hide/show list button was added to hide/show list. Within app4, you can see how textContent and innerHTML work and work differently from one another. It also bears mentioning that without a class being specified within Line 6 of app4.js, we'd have a bug: as displayed on the page, "Things that are purple" would be wiped by the show/hide list button.

index4 builds on index3 and works with app5. The big features here are appendChild and removeChild, which allow the user to create any list item the user wants to create and append it to the end of the unordered list (ul) as it shows on the DOM ... or remove it, respectively.

index5 hooks up to temp.js and within temp.js an experiment with different functions, specifically anonymous functions, occured. This was all gleaned from: https://teamtreehouse.com/library/functions-as-parameters.

index6 hooks up to temp2.js and is essentially just a demonstration of how you can use setTimeout to delay execution of a function. Inspired by: https://teamtreehouse.com/library/delaying-execution-with-settimeout

index7 hooks up with app6 and shows how you can listen for events with addEventListener, then have the webpage respond to things like mouseover. This was EXTREMELY useful because it tought me how to make all my nav buttons on my professional portfolio respond to mouseover! Inspired by: https://teamtreehouse.com/library/listening-for-events-with-addeventlistener

index8 was used with app7 to demonstrate how event handlers can be applied to parent elements to control event bubbling, making code taxing on users' system resources. Also, this fixes the bug that index7 had, I believe, where if the user added a new list item within the preview, that list item would not behave as the "real" list items from the HTML did. Inspired by: https://teamtreehouse.com/library/event-bubbling-and-delegation

index9 and app8 combined to put a different spin on the previous step (see above paragraph). Instead of capitalizing elements upon mouseover, elements get deleted upon the click of a button. It's noteworthy that parentNode was used here.  Inspired by: https://teamtreehouse.com/library/using-parentnode-to-traverse-up-the-dom

index10 and app9 combined to add an "up" button to each list item. Click the "up" button will moved the list item up the list. It's noteworthy that previousElementSibling and insertBefore were used here.  Inspired by: https://teamtreehouse.com/library/using-previouselementsibling-and-insertbefore

For index11 and app10, I flew solo and added a fully functioning down button using nextElementSibling. Inspired by: https://teamtreehouse.com/library/challenge-using-nextelementsibling

The last step created a bug, though! If you add new items to the list, the new items don't have up/down/remove buttons, like the other items. Thus, index12 and app11 were created. To deal with the problem, all buttons were deleted from index. Yep, all of them! Instead, app11 was modified so that JS would create buttons, give the buttons appropriate classes and text content, then add the buttons in the right spots. It bears mentioning that firstElementChild and lastElementChild were part of the fix. Inspired by: https://teamtreehouse.com/library/getting-all-children-of-a-node-with-children + https://teamtreehouse.com/library/getting-the-first-and-last-child

As the last video mentioned above pointed out, though, this project can still be built upon. There is no need, for example, for index12/app11 to have an "up" button at the top of the list and a "down" button at the bottom of the list. Maybe I will return to this someday and fix that.

So, the pairings are index.html + app2 ... index2 + app3 ... index3 + app4 ... index4 + app5 ... index5 + temp ... index6 + temp2 ... index7 + app6 ... index8 + app7 ... and index9 + app8 ... index10 + app19 ... index11 + app10 ... and index12 + app 11. See app2 + app3 + app4 + app5 + temp + temp2 + app6 + app7 + app8 + app10 + app11 for JavaScript code with comments, as always!  The index files have already been coded to link to the appropriate app or temp file, so don't worry about hooking anything up manually.

BUGS ENCOUNTERED & LESSONS LEARNED:
- Initially, index & app worked to change header upon click to red, as it should. Upon adding button to change header red upon click, everything broke. I even tried to create a "cleaner" JS under "app2" and hook that up properly within HTML but it changed nothing.  Within index, I had a comment that ended with " -- >" instead of "-->" and, although VSC did not display this as an error, one simple space was completely killing my HTML->JavaScript hookup, breaking everything. That's scary!