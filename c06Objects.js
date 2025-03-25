// Creating a JavaScript Object

const person1 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log("Deetails of person 1: "  );
console.log(person1);
console.log(typeof person1);

const person2 ={
    firstName:"John2",
    lastName:"Doe2",
    age:69,
    eyeColor:"blue2"
}
console.log("Deetails of person 2: "  );
console.log(person2);
console.log(typeof person2);


const person3 = {} ;

person3.firstName = "John3";
person3.lastName = "Doe3";
person3.age = 70;
person3.eyeColor = "blue3";

console.log("Deetails of person 3: "  );
console.log(person3);
console.log(typeof person3);


const person4 = new Object();
person4.firstName = "John4";
person4.lastName = "Doe4";
person4.age = 80;
person4.eyeColor = "blue4";

console.log("Deetails of person 4: "  );
console.log(person4);
console.log(typeof person4);

person1.wife = "Jane";
console.log("Updated Details of person 1: "  );
console.log(person1);


const personWithFunction = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

console.log("Deetails of person with function: "  );
console.log(personWithFunction.fullName()); // only this will show the full name
console.log(personWithFunction);  // this will not show the full object
console.log(typeof personWithFunction);   

