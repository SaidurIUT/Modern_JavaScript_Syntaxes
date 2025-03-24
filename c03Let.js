// Block Scope with Let

{
  let x = 6;
  console.log(x);
}

//console.log(x); // ReferenceError: x is not defined

// Global Scope with Let

let x = 5;
console.log(x);

// Global Scope with var
// Variables declared with varinside a { } block can be accessed from outside the block:

{
  var y = 2;
  console.log(y);
}

console.log(y);

// Cannot be Redeclared

let aVariable = 5;
// let aVariable = 6; // SyntaxError: Identifier 'aVariable' has already been declared

// But .....

var bVariable = 5;
var bVariable = 6; // no error

// Redeclaring Variables

let cVariable = 5;
cVariable = 6; // no error
// here the value of cVariable is changed to 6
{
  let cVariable = 7;
  console.log(cVariable); // here the value of cVariable is 7
}
// here the value of cVariable is 6
//
//
//

var dVariable = 5;
// here the value of dVariable is  6
{
  var dVariable = 9;
  console.log(dVariable); // here the value of dVariable is 9
}
// here the value of dVariable is 9
//
//
//

