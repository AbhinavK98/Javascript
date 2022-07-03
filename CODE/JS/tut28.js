 console.log("This is tut 28");

 //object literal :object.prototype
 let obj={
     name: "abhi",
     company: "ITC",
     college: "ST THOMAS"
 }

 //using constructor:constructor has in its own prototype
 function info(givenName,givenCompany){
     this.name=givenName;
     this.company=givenCompany;
 }
 //we can change prototype of constructor but not object literal

 //never change prototype of javascript engine object here we are changing prototype of object that we have created


 info.prototype.setName = function (newName){
     this.name= newName;
 }


 let obj2= new info("Abhi","ITC");
 console.log(obj2);