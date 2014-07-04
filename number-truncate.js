/**
 * Number truncate 
 */



if (!Number.prototype.truncateme) {
    console.log("hello");
    Number.prototype.truncateme = function(number) {
        return Math [number >= 0 ? 'floor' : 'ceil'](number);
    };
} else {
    console.log(Number.prototype);
}

var p = -1229.0999;
console.log(p.truncateme(p));
