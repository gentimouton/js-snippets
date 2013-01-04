// from JavaScript Patterns by Stefanov

// bad
var Person = function (name) {
    this.name = name;
    this.say = function () {
        return "I am " + this.name;
    };
};

// When you invoke the constructor function with new, the following happens inside the function:
// An empty object is created and referenced by this variable, inheriting the prototype of the function.
// Properties and methods are added to the object referenced by this.
// The newly created object referenced by this is returned at the end implicitly (if no other object was returned explicitly).
//
// the say() method was added to this. 
// The result is that any time you call new Person() a new function is created in memory.

// good
var Person = function (name) {
    this.name = name;
};
Person.prototype.say = function () {
    return "I am " + this.name;
};
