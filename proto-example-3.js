
function gizmo(id, secret) {
    var secret = secret || {};
    secret.id = id;
    return {
        toString: function() {
            return "gizmo " + secret.id;
        }
    };
}

function hoozit(id) {
    var secret = {};
    var that = gizmo(id, secret);
    that.test = function(testid) {
        return testid = secret.id;
    };
    return that;
}


var h = new hoozit(100);
console.log("type of = " + (typeof h));
 console.log("g tostring = " + h.toString());
console.log("h true test = " + h.test(100));
console.log("h false test = " + h.test(999));
