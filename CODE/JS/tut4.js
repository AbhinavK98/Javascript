console.log('tut4')
//Primitive Data Types

//String

let name="abhi";
console.log("My string is " + name);
console.log("Data type is " +(typeof name));

//numbers

let marks=34;
console.log("Data type is " +(typeof marks));

//Boolean

let isValue=true;
console.log("Data type is " +(typeof isValue));

//Undefined

let abc;
console.log("Data type is " +(typeof abc));

//NULL

let Nullvar=null;
console.log("Data type is " +(typeof Nullvar));
//here return type of null is bogus that's why it is returning 
//type of data as object which is in reference data type but null is primitive

//Referenced Data Type
//in reference type ,data type will be object also JS is dynamically typed means we do not need to assign type of data like int string boolean etc...

//array

let array =[2 , 4, 5, 6];
console.log("Data type is " +(typeof array));

//Object literals

let stMarks ={
    abhi : 23,
    rohan :25,
    sohan :29
        
}
console.log(typeof stMarks);
//function

function findname(){

}
console.log(typeof findname);

//date

let date= new Date();
console.log(typeof date);





