function walkthedom(node) { 
    console.log(node);
    node = node.firstChild;
    while(node) { 
        walkthedom(node); 
        node = node.nextSibling;
    }
}

walkthedom(document.body)
