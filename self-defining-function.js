// from JavaScript Patterns by Stefanov
// useful when your function has some initial preparatory work to do and it needs to do it only once

var scareMe = function () {
    // do setup
    alert("Boo!"); 
    scareMe = function () {
        alert("Double boo!");
    };
};

// using the self-defining function
scareMe(); // Boo!
scareMe(); // Double boo!


// A drawback of the pattern is that any properties you’ve previously added to the original function 
// will be lost when it redefines itself. 
// Also if the function is used with a different name, for example, 
// assigned to a different variable or used as a method of an object, 
// then the redefinition part will never happen and the original function body will be executed.
// Let’s see an example where the scareMe() function is used in a way that a first-class object would be used:
// 1    A new property is added.
// 2    The function object is assigned to a new variable.
// 3    The function is also used as a method.

// 1. adding a new property
scareMe.property = "properly";

// 2. assigning to a different name
var prank = scareMe;

// 3. using as a method
var spooky = {
    boo: scareMe
};

// calling with a new name
prank(); // "Boo!"
prank(); // "Boo!"
console.log(prank.property); // "properly"

// calling as a method
spooky.boo(); // "Boo!"
spooky.boo(); // "Boo!"
console.log(spooky.boo.property);  // "properly"

// using the self-defined function
scareMe(); // Double boo!
scareMe(); // Double boo!
console.log(scareMe.property); // undefined

// As you can see, the self-definition didn’t happen as you probably expected 
// when the function was assigned to a new variable. 
// Every time prank() was called, it alerted “Boo!” 
// At the same time it overwrote the global scareMe() function, 
// but prank() itself kept seeing the old definition including the property property. 
// The same happened when the function was used as the boo() method of the spooky object. 
// All these invocations kept rewriting the global scareMe() pointer so that when it was eventually called, 
// it had the updated body alerting “Double boo” right from the first time. 
// It was also no longer able to see scareMe.property.
