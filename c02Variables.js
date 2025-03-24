// The var keyword was used in all JavaScript code from 1995 to 2015.

// The let and const keywords were added to JavaScript in 2015.

// The var keyword should only be used in code written for older browsers.

// 1. Always declare variables
// 2. Always use const if the value should not be changed
// 3. Always use const if the type should not be changed (Arrays and Objects)
// 4. Only use let if you can't use const
// 5. Only use var if you MUST support old browsers.



let x = 5 , y = 6, z = x + y;
console.log(z);
z = z + 1 ;
console.log(z);
z++;
console.log(z);

// let x = 50 ; //  SyntaxError: Identifier 'x' has already been declared

x= 50; // no error

console.log(x);

x= 2+3+"5"; // it beacomes string:  55 
console.log(x);
x = x+1; 
console.log(x); // 551





