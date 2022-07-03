console.log('This is tut18');
let btn = document.getElementById('btn'); 
btn.addEventListener('click', func1);//this is click event will trigger when we do single click(left click)
btn.addEventListener('dblclick', func2);//this is dblclick event and will trigger when we do double click
btn.addEventListener('mousedown', func3);//this is mousedown event and will trigger when we click on wheel of mouse,right click,left click...



function func1(e) {
    console.log("Thanks", e);
   e.preventDefault();//default behaviors of form is it will get submitted, Thanks will be printed but as we know default behaviors of the form, so it will be submitted but we can prevent that behavior of form using prevent.default()
   
}

function func2(e) {
console.log("Thanks its a double click", e);
   e.preventDefault();//default behaviors of form is it will get submitted, Thanks will be printed but as we know default behaviors of the form, so it will be submitted but we can prevent that behavior of form using prevent.default()
   //this will be printed after double click
   
}

function func3(e) {
    console.log("Thanks its Mouse down", e);
       e.preventDefault();
       
    }


    document.querySelector('.no').addEventListener  ('mouseenter', function(){


            console.log('You entered no')
        })//here we have added event Listener which will trigger on mouseenter function whenever we enter near no class
        


        document.querySelector('.no').addEventListener('mouseleave', function(){
            console.log('You exited no')
        })//here we have added event Listener which will trigger on mouseleave function whenever we leave from no class

        document.querySelector('.container').addEventListener('mousemove', function(e){
         console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},54)`;
            console.log('Your mousemove function ')
        })//here we have added event Listener which will trigger on mousemove function whenever we moveMouse in container
        //here we have added background color whenever mousemove function will trigger color will get changes in container accordingly also we are dynamically changing color which is very helpful in games