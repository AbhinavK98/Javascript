console.log("This is tut27");
//hERE WE ARE using OBJECT LITERAL TO DEFINE CAR OBJECT which we did earlier
let car={
    name :'Maruti 800',
    topSpeed:80,
   run: function (){
        console.log("Car is running");

    }
}


//Creating constructor for making object
//as we have made constructor once and we can use it multiple times we have made once and we can call it with car 1 and car 2 ... and so on we dont have tow rite functions again and again.

function GeneralCar(givenName,givenSpeed){
this.name=givenName;
this.speed=givenSpeed;
this.run=function(){
    console.log(`${this.name} is running`);
}
this.analyze= function(){
    console.log(`This car is slower by ${200 - this.speed}km/h than Mercedes`)
}
}
car1=new GeneralCar('Hyundai i20',120);
car2=new GeneralCar('Hyundai i10',100);
car3=new GeneralCar('Mercedes',200);

console.log(car2);