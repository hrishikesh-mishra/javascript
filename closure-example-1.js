var digit_name = (function() {
    var digit_name = [
        'zero', 'one', 'three',
        'four', 'five', 'six', 'seven', 'eight', 'nine'
    ];
    
    return function (n) { 
        return name[n];
    };
    
}())

console.log(digit_name(3));
