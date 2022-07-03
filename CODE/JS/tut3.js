console.log('tut3.js')

//REFER THIS FOR CLARITY -- https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
//VAR 

var name=`Abc`;//here we have used `` as it allow us to use " ",' ' use inside it while using quotation we cannot do it
var channel;//here defined
channel='Abc'//initialized
var city='Delhi'
var marks=345;
marks=45;//here we c an change marks
console.log(channel,name,marks);

/*Rules for creating variable

1.Cannot start with numbers
2.Can start with letters, _  or $.
3.Are case sensitive

*/

//CONST

const ownersName="ram";
//we can not change when we are declaring variable with const ----ownersName="shy"
/* const does not allow to overwrite,so the value
which has been assigned cannot be changed */
console.log("ownersName");

//LET
//Let has block level scope unlike var

{
    let city='AGRA'
    city='Ara'
    console.log(city);// As here let has limited scope
}
 console.log(city);/*here var city will
  be printed as var is declared in global */


  
  //const az;// it throw error as const cannot be declared without initialization
  let av;
  var ap;
  console.log(av,ap);