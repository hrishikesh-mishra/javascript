if (typeof Object.prototype.laterexe != 'function'){
    Object.prototype.laterexe  = function (msec, method) { 
        var that = this, 
        args = Array.prototype.slice.apply(arguments,[2]);
        
        if(typeof method === 'string') { 
            method = that[method]; 
        }
        
        setTimeout(function(){ 
            method.apply(that,args);
        }, msec);
    };
    
}
