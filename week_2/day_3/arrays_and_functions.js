//basic array variable
const students = ["Ian", "Abdul", `Doreen`, "Chloe"];
const ourString = `Here are some cool students, Chloe, Dinah and Ian`;

//.split will 'split' a string to create an array, .join() does the opposite, it takes an array and makes a string
let ourArray = ourString.split(",");
ourArray.shift();
ourArray = ourArray.join("");
console.log("Here is our new array: ", ourArray);

console.log("All of the students", students);

//<===========================Array Methods =========================>
//.pop removes the last element from an array
students.pop();
console.log("after the .pop()", students);

//shift removes the first element from an array
students.shift();
console.log("after the .shift()", students);

//.push adds an element to back of an array
students.push(true, "Dinah", 37);
console.log("After .push", students);

//accessing the index of an array
console.log("second index", students[2]);
//adding element to the front of an array
students.unshift("Eiad");
console.log("this after the unshift method", students);

//using the indexOf to find a specific person to remove
const indexOfDoreen = students.indexOf("Doreen");
console.log("Index of Doreen", indexOfDoreen);

//using the index that we found of Doreen, removing with splice
students.splice(indexOfDoreen, 1, "Marcelo");
console.log("After the splice removes Doreen", students);

//add not something simple to the array
students.push(["blah", "bluh", "bloh"]);
console.log("After pushing another array to our students array", students);
console.log(
  "the sixth element, and the second inside the sixth",
  students[6][1]
);
console.log("length of an array", students.length);
console.log(
  "the sixth element with the .length method",
  students[students.length - 1][2]
);
//storing an index in another variable
const thirdStudent = students[3];
console.log(
  "storing in another variable",
  thirdStudent,
  "here is the array still with the third student",
  students
);

//exercise example
//create a variable that is an array
const pizzaToppings = ["Pep", "bacon", "cheese"];
console.log("first variable", pizzaToppings);
pizzaToppings.push("pinapple");
pizzaToppings.unshift("mushrooms");
console.log("Added toppings", pizzaToppings);
pizzaToppings.pop();
pizzaToppings.shift();
pizzaToppings.splice(1, 1);
console.log("removed toppings", pizzaToppings);
const str = "Elisa is, the best TA!";
const arr = str.split(",");
console.log("our array after split", arr);

//<===================== functions ==============================>
//es-5 syntax (older way)
//variable example outside a function (accessible inside functions bc it is globally scoped)
//variables inside a function are only accessible in said function
const TA = "Elisa";
function addFunction(number1, number2) {
  console.log("add function", number1 + number2);
}
//es-6 syntax (newer way)
const subtractFunction = (num1, num2, num3) => {
  console.log("subtract function", num1 - num2 + num3);
};
addFunction(2223, 44463);
subtractFunction(10, 5, 3);

//string function
function firstUpperLetter(firstName, lastName, someNumber) {
  let firstNameUpperCased = firstName[0].toUpperCase() + firstName.slice(1);
  let lastNameUpperCased = lastName[0].toUpperCase() + lastName.slice(1);
  //with backticks or template literals
  //   let fullName = `${firstNameUpperCased} ${lastNameUpperCased}`;
  //without backticks
  let fullName = firstNameUpperCased + " " + lastNameUpperCased;
  //   console.log("Ian's function", fullName);
  console.log("here is the third argument that we are not using", someNumber);
  return fullName;
}
const iansFullName = firstUpperLetter("ian", "goodstudent", 123);
const doreensFullName = firstUpperLetter("doreen", "is having fun");
console.log(
  `Ians full name is ${iansFullName} and Doreens full name is ${doreensFullName}`
);
