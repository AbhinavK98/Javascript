console.log("This is tut11");
let a= window;
a=alert('HEY,PRESS OK TO CONTINUE');//This will show alert on the page
b=prompt('This will distroy everything out there');//This will pop up prompt on page
c=confirm('Are you sure you want to exit');//a pop up will appear which will return true(if we press ok) or false(if we press cancel),,boolean value
console.log(a);
console.log(b);
console.log(c);
d=window.innerHeight;//return inner height of window
d=scrollX//return the length how much we have scrolled in x
d=location;//return location of window
d=history;//return history of this window
//we does not need to include windows. we can directly 
// write the property and it will return accordingly also these are windows methods location,history scrollx,y etc.
console.log(d);

//in modern javascript we dont usually use these windows method 