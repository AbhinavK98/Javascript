console.log('tut6.js')
const name= 'abhi';
const greeting ='good Morning';
console.log(greeting+' '+name);


let html;
html="<h1>This is html </h1>"+
"<p1> this is para 1 </p1>";

html=html.concat('this',' ','str2');//this will concatenate the string
console.log(html)
console.log(html.length)//return the length of string
console.log(html.toLowerCase())//convert string in lowercase
console.log(html.toUpperCase())//convert in uppercase

console.log(html[1]);//return element at 1st position
console.log(html.indexOf('<'));//return index of required character occurring at first position
console.log(html.lastIndexOf('<'));//return index of required character occurring at last position
console.log(html.charAt(3));//return character at 3rd position
console.log(html.endsWith('str2'));//checks whether ends with asked string or not and return true and false

console.log(html.includes('str2'));//checks whether contain str2 or not and return true and false
console.log(html.substring(1,6));//returns substring from position 1 to 6
console.log(html.slice(0,4));//will return char from position from 0 to 4
console.log(html.split(' '));//will split from wherever space comes
console.log(html.replace('this','it'));//it will replace this string with it

//Template Literals

 let fruit1='Apple';
 let fruit2='orange';
 let myHTML=`hello ${name}
 <h1>This is heading<\h1>
 <p>you like ${fruit1} and ${fruit2}`;
 document.body.innerHTML=myHTML;





