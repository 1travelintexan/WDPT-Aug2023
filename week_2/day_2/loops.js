const ta = "Elisa";

//standard for loop counting to ten
for (let i = 1; i <= 10; i += 1) {
  //   console.log(i, ta);
}

//for loop counting by 3s
for (let i = 0; i <= 21; i++) {
  if (i % 3 === 0) {
    // console.log("here is our 3s ex:", i);
  }
}

//count backwards from 30
for (let i = 30; i >= 0; i--) {
  //   console.log("counting backwards", i);
}

//fizz buzz challenge
for (let i = 1; i <= 100; i++) {
  // if(i % 3 === 0 && i % 5 === 0){
  //     console.log('FizzBuzz')
  //   // }
  //   if (i % 3 === 0 && i % 5 === 0) {
  //     console.log("Fizz Buzz");
  //   } else if (i % 3 === 0) {
  //     console.log("Fizz");
  //   } else if (i % 5 === 0) {
  //     console.log("Buzz");
  //   } else {
  //     console.log(i);
  //   }
}

//while loop ex
let ourNumber = 0;

while (ourNumber <= 25) {
  //   console.log("Here is our number", ourNumber);
  ourNumber += 5;
}

//do while is the same but always runs at least once
let pizzaNumber = 100;
do {
  //   console.log("this runs once bc its false to begin with");
  pizzaNumber += 3;
} while (pizzaNumber < 250);

//object ex for the projects
const user = {
  username: "Eiad",
  password: 1234,
  email: "myEmail.com",
};
//square brackets to access keys inside of an object
console.log(user["username"]);

// //for in loop (just for objects)
for (let userInfo in user) {
  //   console.log("here is a key in the object", userInfo);
  console.log(
    `here is the key ${userInfo} and here is the value ${user[userInfo]}`
  );

  //This is only to show the password
  //   if (userInfo === "password") {
  //     console.log(
  //       `here is the key ${userInfo} and here is the value ${user[userInfo]}`
  //     );
  //   }
}
