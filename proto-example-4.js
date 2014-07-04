/**
 * functional inheritance with 
 * super method  
 */

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
    var super_toString = that.toString; 
    
    that.test = function(testid) {
        return testid = secret.id;
    };
    
    that.toString = function () { 
        return " supper called >> " + super_toString.apply(that);
        
    } ;
    return that;
}


var h = new hoozit(100);
console.log("type of = " + (typeof h));
console.log("h tostring = " + h.toString());
console.log("h true test =  " + h.test(100));
console.log("h false test = " + h.test(999));
