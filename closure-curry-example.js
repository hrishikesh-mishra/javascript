function curry(func) {
    var args = Array.prototype.slice.apply(arguments, [1]);
    console.log(args);
    return function() {
        console.log(args.concat(Array.prototype.slice.apply(arguments)));
        return func.apply(null, args.concat(Array.prototype.slice.apply(arguments)));
    };
}

var inc = curry(function add(a, b) {
    return a + b;
}, 1);

console.log(inc(6));
