// //this makes sure that the js file is linked to the html file
// console.log("hey I am linked");
// //syntax ex
// //setTimeout(   ()=>{},  1000) takes two arguments one is a function and the other a time in milliseconds
// //set timeout example runs just once
// setTimeout(() => {
//   let promptResponse = prompt("Enter your name");
//   console.log("you typed this in the prompt", promptResponse);
// }, 3000);

// //setInterval example, this runs forever until stop it
// let counter = 0;
// let intervalId = setInterval(() => {
//   console.log("this is the set interval ex", intervalId);
//   counter++;
//   if (counter > 5) {
//     clearInterval(intervalId);
//   }
// }, 1000);

// keyword for today is anonymous arrow function!!!

//.map( ) example
const students = ["yildiz", "eiad", "dinah", "Chloe", "dinah", "Ian", "Doreen"];
//
// const mappedStudents = students.map((student, index) => {
//   const firstLetter = student[0].toUpperCase();
//   const uppercasedName = firstLetter + student.slice(1);
//   //   console.log(
//   //     "Here is the current element",
//   //     student,
//   //     "and their index is,",
//   //     index
//   //   );
//   return uppercasedName;
// });
// console.log("here is the mapped students variable", mappedStudents);

// //.filter example
// const filteredStudents = students.filter((people, i, theWholeArray, fourth) => {
//   console.log(
//     "current element",
//     people,
//     "index",
//     i,
//     "The whole array",
//     theWholeArray,
//     "here is the fouth",
//     fourth
//   );
//   //in filter you need to give a condition that when its true, you return something
//   if (people !== "dinah") {
//     return true;
//   }
// });

// //oneliner example of a filter
// // const filteredStudents = students.filter(
// //   (currentStudent) => currentStudent !== "eiad"
// // );
// console.log("Here are our filtered students", filteredStudents);

//.reduce method
// .reduce takes two arguments, not just one like the others
// first argument is always called the accumulator, and second is the current element
// const numberOfAllLetters = students.reduce((acc, curr) => {
//   return acc + curr.length;
// }, 0);
// const avgLengthOfNames = numberOfAllLetters / students.length;
// console.log(
//   "here is the number of letters",
//   numberOfAllLetters,
//   "here is the avg length of names",
//   avgLengthOfNames.toFixed(2)
// );

// -Use .map to log only the students first and family name in an array
// -Use .map to console.log `<firstName> <familyName> belongs to house <house>`
// -Use .filter to find all of the Gryffindor students
// -Use .filter to find all students with marks higher than 7
// -Use .reduce to find the average of all wizards marks
// -Use .reduce to make an object with all Slytherin wizards. (We need to keep an eye on them) With the structure of
// {<firstName>-<familyName>: 'Slytherin Student'}
//fun exercise
const wizards = [
  { firstName: "Harry", familyName: "Potter", house: "Gryffindor", marks: 7 },
  { firstName: "Ron", familyName: "Weasley", house: "Gryffindor", marks: 5 },
  { firstName: "Tom", familyName: "Riddle", house: "Slytherin", marks: 9 },
  { firstName: "unknown", familyName: "Crab", house: "Slytherin", marks: 4 },
  {
    firstName: "Hermione",
    familyName: "Granger",
    house: "Gryffindor",
    marks: 10,
  },
  { firstName: "Cedric", familyName: "Diggory", house: "Hufflepuff", marks: 6 },
  {
    firstName: "Rowena",
    familyName: "Ravenclaw",
    house: "Ravenclaw",
    marks: 8,
  },
  { firstName: "Draco", familyName: "Malfoy", house: "Slytherin", marks: 4 },
];
const arrayOfNames = wizards.map((oneWizard) => {
  return `${oneWizard.firstName} ${oneWizard.familyName} belongs to the house ${oneWizard.house}`;
});
// console.log("here are the names", arrayOfNames);

const gryStudents = wizards.filter((aWizard) => {
  if (aWizard.house === "Gryffindor") {
    return true;
  }
});
console.log("gryStudents", gryStudents);

const smartStudents = wizards.filter((wizard) => {
  if (wizard.marks > 7) {
    return true;
  }
});
console.log("Smart Students", smartStudents);

const sumOfMarks = wizards.reduce((acc, curr) => {
  return acc + curr.marks;
}, 0);
const avgMarks = sumOfMarks / wizards.length;
console.log("reduce ex", avgMarks);

const slyStudents = wizards.reduce((acc, curr) => {
  if (curr.house === "Slytherin") {
    const first = curr.firstName;
    return (acc[first] = "Slytherin Student");
  }
}, {});
console.log("sly students", slyStudents);
