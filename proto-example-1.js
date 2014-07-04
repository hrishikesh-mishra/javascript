function Gizmo (id) { 
    this.id = id; 
}

Gizmo.prototype.toString = function () { 
    return "gizmo" + this.id;
};

function Hoozit (id)  { 
    this.id = id; 
}

Hoozit.prototype = new Gizmo();
Hoozit.prototype.test = function(id) { 
    return this.id == id;
};


var h = new Hoozit(100) ;
console.log("type of = " + (typeof h)); 
console.log("h.id = " + h.id);
console.log("g tostring = " +  h.toString() );
console.log("h true test =  " + h.test(100));
console.log("h false test = " + h.test(999)); 
