console.log('this is tut17');


document.getElementById("heading").addEventListener("click", function(e) {//here first we have fetched the heading with it's id(using document.getElementById) then we have added click event in addEventListener function which listens the event then next argument is function which will run after occurring this click event.
    //(there are many more event we can google it some of them are below 
    let variable;
    console.log("You have clicked the heading");//if user will click the heading then this will be printed

    // location.href = '//codewithharry.com' //now if user will click the event it will redirect to the mentioned web page

    //console.log(e);// this will return all information where user have clicked the event 

    variable = e.target;//it will return the target element after clicking on the event 
    variable = e.target.className;//after clicking on event it will return the class name of target element after clicking the event
   
    variable = Array.from(e.target.classList);// after clicking in event it will return the class list of target element if targeted element have more than one class name 
    variable=e.target.id//this will return the id of targeted element when clicked on event
    variable = e.offsetX;// this will return at how much distance we have clicked in reference to element (heading )in x axis
    variable = e.offsetY;//this will return at how much distance we have clicked in reference to element (heading ) in y axis
    variable = e.clientX;//this will return at how much distance we have clicked in reference to our client page page in x axis
    variable = e.clientY;// this will return at how much distance we have clicked in reference to our client page in x axis
    console.log(variable);
    
  });
  