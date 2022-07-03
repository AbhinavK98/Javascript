console.log('we are in tut7.js')
//ALL ARRAY METHODS----- https://javascript.info/array-methods  (refer this)

//These are the ways we can define our array
const marks=[24,34,77,65,90];
const fruits=['orange','Apple','Pineapple'];
const mixed = ['str',89,[3,5]];
const arr=new Array(23,34,'orange',45,65);


console.log(marks);
console.log(fruits);
console.log(mixed);
console.log(arr);
console.log(fruits[2]);
//This will return element of 2nd position of array

console.log(arr.length);
//This is property which return length of array
console.log(Array.isArray(34))
//This is method which will check whether 34 is present in array or not tna return true and false

//We can also change any element of array
arr[0]='Abhi';//this will replace 0the position of array to abhi
console.log(arr);
let arrelement=arr[0];//here we are assigning arr[0] in arr element
console.log('element :', arrelement);

let val= marks.indexOf(34);
// This will return index of lement of array
console.log(val);

//Mutating modifying

marks.push(3564);//This will push 3564 in array
marks.sort();//This will sort the array
arr.push(...items)// – adds items to the end,
arr.pop() //– extracts an item from the end,
arr.shift() //– extracts an item from the beginning,
arr.unshift(...items)// – adds items to the beginning
console.log(marks);

/*ALL ARRAY METHODS----- https://javascript.info/array-methods  (refer this)
HERE arr IS NAME OF ARRAY

To add/remove elements:

arr.push(...items) – adds items to the end,
arr.pop() – extracts an item from the end,
arr.shift() – extracts an item from the beginning,
arr.unshift(...items) – adds items to the beginning.
arr.splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
arr.slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
arr.concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
To search among elements:

arr.indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
arr.includes(value) – returns true if the array has value, otherwise false.
arr.find/filter(func) – filter elements through the function, return first/all values that make it return true.
findIndex is like find, but returns the index instead of a value.
To iterate over elements:

arr.forEach(func) – calls func for every element, does not return anything.
To transform the array:

arr.map(func) – creates a new array from results of calling func for every element.
arr.sort(func) – sorts the array in-place, then returns it.
arr.reverse() – reverses the array in-place, then returns it.
arr.split/join – convert a string to array and back.
arr.reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
Additionally:

Array.isArray(arr) checks arr for being an array.
*/

//Objects