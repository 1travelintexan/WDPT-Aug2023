// here is a comment
// here
// is a
// Multi
// line comment

/*
You can do it this way too
*/

//variables
//const never changes
let myName = "Pizza";
// myName = "Dinah";
let stringTwo = "2";
const myAge = 37;
// console.log(`My fav food is ${myName} and my age is ${myAge}`);
// console.log(2 === +stringTwo);

//undefined
let myClass = "is super fun";
//this will uppercase the first letter of a name and add the rest starting at index 1 with the slice method
let student = "sebastian";
console.log(student[0].toUpperCase() + student.slice(1));

console.log("Here is our and and ex", 2 === 2 && 3 === 4);

console.log("Here is our Or Or ex", 2 === 2 || 3 === 4);

console.log("Here is our not ex", 2 !== "3");

let school = "Ironhack ";
console.log(
  "What is the best school?",
  school.repeat(3).toUpperCase().trim() + "!"
);

console.log("100.50" / 2);

//different types of names
//camel case => myNameIsJosh
//Pascal case => MyNameIsJosh
//kabob case => my-name-is-josh
