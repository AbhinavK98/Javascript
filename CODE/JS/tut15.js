console.log('This is tut15');


//let cont=document.querySelector('.no')//this will select the first element of no class
//cont=document.querySelector('.container');//this will select element of container class
//console.log(cont);this will print element of cont class
//console.log(cont.childNodes)//This will return all child nodes in container class(including comment text everything)
//console.log(cont.children)//This will return children nodes but excluding text,comment return only element....
let cont = document.querySelector('.no');
cont = document.querySelector('.container');
let nodeName = cont.childNodes[1].nodeName;//This will return node name on 1st element of node list which we got from console.log(childnodes) of container class
let nodeType = cont.childNodes[8].nodeType;//This will return node type(you can refer type of node from list) on 1st element of node list which we got from console.log(childnodes) of container class
console.log(nodeName)//will return nodename
 console.log(nodeType)//will return node type
// Node types
// 1 for Element
// 2 for Attribute
// 3 for Text Node
// 8 for Comment
// 9 for document
//10.for doctype
 

let container = document.querySelector('div.container');

console.log(container.children[1].children[0].children);//we are first accessing container class inside that(children[1]) class="child red good" inside that (children[0] class="this" inside that (children) we are accessing its element )

console.log(container.firstChild);//This will return the first child inside container class (including text comment)
console.log(container.firstElementChild);//this will return first element (not text comment )

console.log(container.lastChild);////This will return the last child inside container class (including text comment)

console.log(container.lastElementChild);//this will return last element (not text comment )
console.log(container.children);// will return all element not text comment unlike child
console.log(container.childElementCount); // Count of child elements (not text comment)

console.log(container.firstElementChild.parentNode);//this will return the parent node which is container
 console.log(container.firstElementChild.nextSibling);//this will return just next sibling but it can include text comment
 console.log(container.firstElementChild.nextElementSibling);//this will return next  element sibling not including text comment
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);