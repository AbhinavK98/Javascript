console.log('this is tut 16');
let element = document.createElement('li');//This will create element named li
let text = document.createTextNode('I am text node')//This will create text node
element.appendChild(text)//this will append textNode in element (same as we did in element.innerText/element.innerHtml)




//Add a class name to li element
element.className='childul';//we have added class name 'childul' to our created element
element.id='createdli';//we have assigned id to element
element.setAttribute('title','mycustomtitle');//we have setaAttribute(assigned title name as my custom title)
//element.innerText='Hello this is inserted dynamically';//This will insert text in element if we want to bold it we have to use innerHtml
//element.innerHTML='<b>this will bold the innerText</b>'



let ul=document.querySelector('ul.this');//It will select first ul whose class is this
console.log(ul);
ul.appendChild(element);//appendChild will insert/append 'element' in ul whose class is this
console.log(element)//

let elem2 = document.createElement('h3');// this will create element h3 that will be heading
elem2.id = 'elem2';//id of elem2 will be assigned
elem2.className = 'elem2';//classname of elem2 will be assigned
let tnode = document.createTextNode('This is a created node for elem2');//created TextNode for elem2
elem2.appendChild(tnode);//this will append text node in elem2
element.replaceWith(elem2);//Now here we will replace element with elem2

//we can also replace child of any element like in our case ul has 5 child 
let myul = document.getElementById('myul');//We fetched the element ul which has id myul using querySelector
myul.replaceChild(element, document.getElementById('fui'));//this will replace child of ul(whose id fui) with element 
//NOTE :
//JISPE BHI HUMLOG REPLACE CHILD RUN KR RHE H H WO CHILD HONA CHAHIYE myul KA

 myul.removeChild(document.getElementById('lui'));//This will remove lui child element

let pr = elem2.hasAttribute('href');//This will check whether attribute is present in that element or not and return true/false
elem2.removeAttribute('id');//this will remove id from elem2
elem2.setAttribute('title', 'myelem2title');// this will set tittle to elem2 as myelem2title
console.log(elem2, pr);



// quick quiz
// create a heading element with text as "Go to CodeWithHarry" and create an a tag outside it with href = "https://www.codewithharry.com"