function walkthedom(node,func) { 
    func(node);
    node = node.firstChild;
    while(node) { 
        walkthedom(node,func); 
        node = node.nextSibling;
    }
}

function getElementsByClassName(className) { 
    var results = [];
    walkthedom(document.body, function (node) { 
       var a, c = node.className, i; 
       if(c) { 
           a = c.split(' ');
           for(i=0; i<a.length; i +=1) {
               if(a[i] === className) {
                   results.push(node); 
                   break;
               }
            }
       } 
    });
    return results;
}

var nodes = getElementsByClassName("hrishi");
console.log(nodes);
