console.log('This is tut14')

//we can select html element with
//1.Single element order
//2.Multiple element selector

//1.Single element selector
let element=document.getElementById('my First')//it will access div which has id myFirst
//element=element.className;//it will return class name of that element 
//element=element.childNodes;//will return all child nodes
//element=element.parentNode;//it will return parent node
element.style.color='red'//it will change color of element but note only of the first element
element.innerText='Abhinav is learning Javascript'//it will change text of first element
element.innerHTML='<b>Abhinav is learning Javascript</b>'//this will change inner html
//these are properties from which we can make changes to our html element,we have many more properties(Google it) 
//like this which we can use
//console.log(element);


let sel=document.querySelector('#my First');//here we are accessing element using ID ('#' is used to denote ID)
sel=document.querySelector('.child');//here we are accessing element using class name ('.' is used to denote class name)
sel=document.querySelector('h1')//this will return h1 tag element and also only the first h1 tag element
sel=document.querySelector('div')
//for all div//h1 or other to be return4ed we need to use multi line selector
sel.style.color='green'//this will change color of first div
//console.log(sel);

//2.Multi Element selector
let elems = document.getElementsByClassName('child');//this will return all elements whose class name is child
elems=document.getElementsByClassName('container');//this will return return all element in container class
//console.log(elems[0].getElementsByClassName('child'));
elems=document.getElementsByTagName('div');//this will return all element which has tag name div 
console.log(elems)


Array.from(elems).forEach(element =>
{
    console.log(elems);//this will change color of each element
    element.style.color='blue';
});
