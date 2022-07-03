console.log('This is tut 20');
let impArray = ['Egg', 'Vegetable', 'Chicken'];

//local storage:Valid even after session is expired or we close the session
//session storage:Valid only for the running session

//  Add a key-value pair inside local Storage by writing localStorage.setItem we are adding key and value in local storage

 localStorage.setItem('Name', 'Abhi');
 localStorage.setItem('Name2', 'Rohan');
 localStorage.setItem('FoodItem', JSON.stringify(impArray));//Json.stringify will convert into string and using json.parse we can change it into array
//json.Stringify take object as argument and return String


// Clears the entire local storage
// localStorage.clear();

// Clear a particular key-value pair
// localStorage.removeItem('Name2');

// Retrieve an item from the local Storage
let name = localStorage.getItem('Name');
name = JSON.parse(localStorage.getItem('Egg'));
console.log(name)//now AS WE converted our string into array so we can use methods which is used for array
//json.parse take string as argument and return array

// sessionStorage.setItem('sessionName', 'sHarry');
// sessionStorage.setItem('sessionName2', 'sRohan');
// sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));