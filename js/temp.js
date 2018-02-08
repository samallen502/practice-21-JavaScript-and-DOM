// Lines 3-11 were tested to work and they work together. Lines 7-11 especially work together, passing a function into a function. Yep, you read that correctly. Weird but common in JavaSCript and actually how you unleash JavaScript's true power. BTW, exec = execute ... func = function ... arg = acceptable argument. This will print "Hi, there" to the console if you inspect the preview using Chrome Dev Tools.
// Commenting out Lines 2-11, even though they work well enough, because there's a way to refactor it all as an EXPRESSION, not just a STATEMENT.
//function say(something) {
//    console.log(something);
//}

//function exec(func, arg) {
//    func (arg);
//}

//exec (say, 'Hi, there');

function exec(func, arg) {
    func (arg);
}

//exec (function say(something) {
//    console.log(something);
//}, 'Hi, there');

/* Actually, Lines 17-19, although they work, can further be refactored into an ANONYMOUS FUNCTION, like this. */

exec((something) => {
    console.log(something);
}, 'Hi');