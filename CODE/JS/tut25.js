console.log("This is tutorial 25");

/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/

let divElem= document.createElement('div');//first we have created div element according to problem statement
//--Add text to that created element
//--to save in local storage if val!=null if val is null showThis is my element. click to edit it');
let val = localStorage.getItem('text');
let txt;
if (val==null){
 text = document.createTextNode('This is my element. click to edit it');
}

else{
    text = document.createTextNode(val);
}

//  let text=document.createTextNode('This is text area ')
divElem.setAttribute('id','elem');//giving id and class
divElem.setAttribute('class','elem');//giving id and class
divElem.appendChild(text);//we have appended text to our div element
divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding:23px;');
//we are setting attribute for div which we have created like id color margin etc


let container=document.querySelector('.container')//now we have grabbed the container class with the help of query selector from website.html;
let first= document.getElementById('my First')//inside container we have div in website.html and we have to inject our div before 'my first' div


//Inserting the element before id first
//here we are using insertBefore which will help us inserting our div before id first
container.insertBefore(divElem,first)//it will insert divElem before first
console.log(divElem,container,first);


//we are adding click eventListener to divElem such that if user clicks in that div some event occur(it should be converted into an editable item) for that we will add html element which will be text area so that if user clicks on that div it will get converted into text area
divElem.addEventListener('click',function(){
    let noTextAreas = document.getElementsByClassName('Textarea').length;//here we are counting the length of text area if user has not clicked on text area its length will be zero so if noTextarea will be zero then inner html will be converted into editable text area
    if(noTextAreas==0){
    let html=elem.innerHTML;
    divElem.innerHTML=`<textarea  placeholder="Leave a comment here" id="floatingTextarea2" class="Textarea" style="height: 100px">${html}</textarea>`;//in text area we are trying to insert text box which is editable
    }
    //now adding blur event in text area such that  whenever user clicks away (blur). save the note into the local storage.

let textarea= document.getElementById('floatingTextarea2');
textarea.addEventListener('blur', function(){
elem.innerHTML=textarea.value;//we are equating inner html with value of text area so whenever the blur event fired innerHtml will be equal to text area

//to save it in local storaGE
localStorage.setItem('text', textarea.value);
});

});

