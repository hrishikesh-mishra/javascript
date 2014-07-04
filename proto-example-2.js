function gizmo(id) { 
    return {
        id : id, 
        toString: function () { 
            return "gizmo " + this.id;
        }
    };
}

function hoozit (id) {
    var that = gizmo(id);
    that.test = function (testid) { 
        return testid = this.id;
    };
    return that;
}


var h = new Hoozit(100) ;
console.log("type of = " + (typeof h)); 
console.log("h.id = " + h.id);
console.log("g tostring = " +  h.toString() );
console.log("h true test =  " + h.test(100));
console.log("h false test = " + h.test(999));
