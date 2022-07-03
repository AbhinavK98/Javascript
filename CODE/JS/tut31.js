console.log("this is Tutorial31.js");
//class is template
//whenever object is created constructor called
class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }

    //constructor will run only when object is made/called
    
    slogan(){
        return `I am ${this.name} and this company is the best`
    }

    joiningYear(){
        return 2022 - this.experience;
    }

    static add(a, b){
        return a + b;
    }
}
//static method is independent of creating object without creating object we can return this method 

// we can simply write _: console.log(employee.add(34,5)) which will return result of this method we just called static method by classname.methodname(a,b);

//so we can sense the benefit of class as we have created employee class and can use this again as we have used it for Abhi we can use this class for other objects as well.




//now here we are inheriting employee class with programer which will have all property of employee class

class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, language, github){
        super(givenName, givenExperience, givenDivision);
        this.language = language;
        this.github = github;
    }
    favoriteLanguage(){
        if(this.language=='python')
        {
            return 'python';
        }
        else
        return 'javascript';
    }

    static multiply(a,b)
    {
        return a*b ;
    }
}

rohan=new Programmer("Rohan","22","IT","JS","Rohan93")
console.log(rohan);
console.log(rohan.favoriteLanguage());
console.log(Programmer.multiply(4,5));//here we are calling static method without calling object

//super is basically nothing but constructor of last class.

// constructor have all attributes(new attributes +last class attributes) while super has only last class attributes 

// Abhi=new Employee("Abhi","27","IT");//here making object and calling that class

//static method cANNOT BE CREATED USING THIS KEYWORD AS WE ARE GOING TO CALL IT WITHOUT CREATING OBJECT

//     console.log(harry);
