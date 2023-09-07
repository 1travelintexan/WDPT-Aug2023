console.log("connected");

// try / catch
try {
  const username = prompt("enter you name");
  if (username.length < 3) {
    throw new Error("Your name isnt long enough");
  } else {
    alert("Hooray! Great job");
  }
} catch (err) {
  alert(err);
  console.log("there was an error", err);
}

const labEx = [
  { name: "my cool movie", rating: 9.5 },
  { name: "my not cool movie", rating: 5 },
  { name: "my movie", rating: 5 },
];
//.sort()
//takes one callback function
const numbers = [2, 1, 70, 70, 4, 15];
const sortedAsc = numbers.sort((a, b) => {
  if (a > b) {
    return 3;
  } else if (a < b) {
    return -3;
  } else {
    return 0;
  }
});
console.log("sorted Asc", sortedAsc);

//To sort descending, just switch the positive and negative numbers being returned
const sortedDesc = numbers.sort((a, b) => {
  if (a > b) {
    return -5;
  } else if (a < b) {
    return 7;
  } else {
    return 0;
  }
});

//one-liner version of sort
const sortedOneLine = numbers.sort((a, b) => a - b);
console.log("sorted dec ", sortedOneLine);

const reversed = sortedOneLine.reverse();
console.log("super easy to reverse", reversed);
let ourStr = "this is super fun";
const revStr = ourStr.split("").reverse();
console.log("here is our rev str", revStr.join("----"));

//Eiad's question about comparing strings with > or <.
//It checks the character code of a letter and does the math to check
const aaa = "Aaa";
const bbb = "bbb";
console.log("Eiad question", aaa < bbb);
