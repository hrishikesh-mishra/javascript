function facWithVariableReturn(n) {
    var result = 1;
    while (n > 1) {
        result *= n;
        n -= 1;
    }
    return result;
}

function facWithoutVariableReturn(n) {

    return (function(result) {
        while (n > 1) {
            result *= n;
            n -= 1;
        }
        return result;
    }(1));
}
