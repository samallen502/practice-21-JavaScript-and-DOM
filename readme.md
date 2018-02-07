Inspired by:
https://teamtreehouse.com/library/a-simple-example

ABOUT THIS REPOSITORY:

index.html works with app.js automatically -- app2.js was just part of a debugging process, see below section for details on that -- to allow the user to input a color value as text and click a button to change the header color.

index2.html is a variation of index.html, except the text input and the button have been stripped and a list of "things that are purple" has been added. index2.html works with app3.js automatically to list all of the items that are purple in real life in purple on the list, as they should be ... and mark all of the list items that are not purple in real life in red on the list ... and, finally, the nth-child property is used to give the list some grey zebra striping, just to make the output more readable to the user.

So, the pairings are index.html + app2 and index2 + app3. See app2 + app3 for JavaScript code with comments, as always!

BUGS:
- Initially, HTML & JS worked to change header upon click to red, as it should. Upon adding button to change header red upon click, everything broke. I even tried to create a "cleaner" JS under "app2" and hook that up properly within HTML but it changed nothing.

FIXES / LESSONS LEARNED:
- Within HTML, I had a comment that ended with " -- >" instead of "-->" and, although VSC did not display this as an error, one simple space was completely killing my HTML->JavaScript hookup, breaking everything. That's scary!