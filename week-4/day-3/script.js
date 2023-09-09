console.log("connected");
//example of a global variable
let globalVariable = "this is a global variable";
//inside if statements or functions, this variable is accessible

//example of a block level variable
{
  const blockVariable = "this is a block variable";
}

//functional scope
function testingScopes() {
  var testFuncVariable = "Function variable";
}
//this is just testing our scopes
if (true) {
  console.log("here is our global,", globalVariable);
  console.log("var declared after", iansquestion);
  //   console.log("const declared after", testForConst);
  //   console.log("function variable", testFuncVariable);
  //   console.log("block, ", blockVariable);
}

//var declared before console.logging
var iansquestion = "var globally scoped";
const testForConst = "this a const declared after";
var notConstExample = "This is weird";
console.log("will it work", notConstExample);
console.log(window);

//<==================Hoisting ======================>
//function being hoisted
const sum = add(2, 3);

function add(a, b) {
  console.log("add function", a + b);
  return a + b;
}

console.log("this is after the function is run", sum);

//<=============variable shadowing =============>
let name = "Ruben";
if (true) {
  const name = "Dinah";
  console.log("inside the if", name);
}
console.log("outside the if", name);

//<===============value vs Ref ================>
console.log("ref ex", "Chloe" === "Chloe");
console.log(2 === 2);
console.log(2 == "2");

console.log([1, 2, 3] === [1, 2, 3]);
//reference of an array
const array1 = [1, 2, 3];
//not recommended
const array2 = array1;
console.log(
  "ref ex of two arrays pointing to the same spot",
  array1 === array2
);
array2.push("Ruben");
console.log("after push", "array 2", array2, "array 1", array1);

//spread operator ex
const array3 = [4, 5, 6, { name: "Doreen" }];
const array4 = [...array3];
// console.log("spread operator ex", array3, array4);
// array4.push("Yildiz");
// console.log("after push", array3, array4);
array4[3].student = true;
console.log("after nested ex with spread", array3, array4);

//<==================Deep Copy==================>
//true deep copy is with JSON.parse and JSON.stringify
const array5 = [1, 2, 3, [4, 5, 6], { name: "Ian" }];
const deepCopyArray = JSON.parse(JSON.stringify(array5));
deepCopyArray[4].name = "Zeynep";
console.log("deep copy ex", array5, deepCopyArray);
console.log(array5 === deepCopyArray);

//<===========setinterval example ===============>
let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log("this is the interval", counter);
  if (counter > 5) {
    clearInterval(intervalId);
    console.log("hopefully the timer has stopped");
  }
}, 1000);
