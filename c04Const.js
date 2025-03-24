const PI = 3.14159;
console.log(PI);

// PI = 3.14; // TypeError: Assignment to constant variable.

// const lamda; // SyntaxError: Missing initializer in const declaration
// lamda = 1.618; 


// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
// You can change an element:
cars[0] = "Toyota";
console.log(cars);
// You can add an element:
cars.push("Audi");
console.log(cars);

// But you can NOT reassign the array:
// cars = ["Toyota", "Volvo", "Audi"];    // ERROR

// You can create a constant object:
const car = {type:"Fiat", model:"500", color:"white"};
console.log(car);
// You can change a property:
car.color = "red";
console.log(car);
// You can add a property:
car.owner = "Johnson";
console.log(car);
// But you can NOT reassign the object:
// car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

// Block Scope with const

const x = 10 ; 
{
  const x = 20;
  console.log(x); // 20
}
console.log(x); // 10
