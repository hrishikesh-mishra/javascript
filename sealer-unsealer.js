/*
 * Simple sealer unsealer encription 
 */

function make_sealer() { 
    var boxes = [], values = [] ; 
    
    return {
        sealer: function (value) { 
            var box , i = boxes.length; 
            box = {}; 
            boxes[i] = box; 
            values[i]= value; 
            return box; 
        },
        unsealer: function (box) { 
            return values[boxes.indexOf(box)] ; 
        }

    };
}

var sealerunsealer= make_sealer(); 
box = sealerunsealer.sealer(100); 

console.log(sealerunsealer.unsealer(box)); 
