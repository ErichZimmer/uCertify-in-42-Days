let firstName = "Andrea";
let lastName = "Wallace";
let fullName = firstName + ' ' + lastName;

console.log("Name: " + fullName);

let tip = "8.50";
let total = 40;
let tax = 0;

let orderTotal = tip + tax + total;

console.log("Order Total: " + orderTotal);

let value1 = BigInt(999999999999);

console.log("Data type of value1: " + (typeof(value1)));

let symbol1 = Symbol("mysymbol");
let symbol2 = Symbol("mysymbol");

console.log("Is symbol1 === symbol2?: " + (symbol1 === symbol2));

let var1;

console.log("Data type of var1: " + (typeof(var1)));

console.log("Square root of -1: " + (Math.sqrt(-1)));