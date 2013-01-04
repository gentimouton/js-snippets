// from JavaScript Patterns by Stefanov
// for closures, see also http://stackoverflow.com/questions/111102/how-do-javascript-closures-work

var setup = function () {
    var count = 0;
    return function () {
        return (count += 1);
    };
};

// usage
var next = setup();
next(); // returns 1
next(); // 2
next(); // 3
