console.log("This is library");


//constructor
function Book(name,author,type)
{
    this.name=name;
    this.author=author;
    this.type=type;
}


//Display constructor

function Display(){


}

//Add method to display prototype
Display.prototype.add=function(){
    console.log("Woirking")

}
//Function for clearing Display
Display.prototype.clear=function(){
    libraryForm.reset();//this will reset the whole form
}


//Add event listener to submit event whenever user clicks on submit button this event will occur
let libraryForm=document.getElementById("libraryForm")//here we are grabbing form with its ID
libraryForm.addEventListener('submit',libraryFormSubmit)//now here we have added event listener which will listen when submit button will be clicked then we will get into libraryFormSubmit function

function libraryFormSubmit(e){
    
    console.log("Bro you've submitted the form");
    let name=document.getElementById('bookName').value;
    let author=document.getElementById('author').value;

    let type;

    let fiction=document.getElementById('fiction');
    let programming=document.getElementById('programming');
    let cooking=document.getElementById('cooking');

    if(fiction.checked){
        type=fiction.value;
    }
    else if(programming.checked)
    {
        type=programming.value;

    }
    else if(cooking.checked)
    {
        type=cooking.value;

    }

    let book= new Book(name, author, type);
    console.log(book)
    e.preventDefault();//as we know default behavior of form is after submitting it it will reload so we are preventing it \

    let display=new Display();
    display.add(book);//this will add book to display
    display.clear();//this will clear the text area
}