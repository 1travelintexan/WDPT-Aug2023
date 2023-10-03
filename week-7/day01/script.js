//callback hell example
const eatDessert = () => {
  setTimeout(() => {
    console.log("eat dessert");
  }, 1000);
};
const eatDinner = () => {
  setTimeout(() => {
    eatDessert();
    console.log("eating dinner");
  }, 500);
};
//the callback is invoked before the console.log so the log has to wait for the callback() to finish,
//the callback is eatDinner which invokes eatDessert before its console.log so that console.log has to wait for eatDessert() to finish
//EatDessert is only waiting for one second and then console.logging 'eat dessert' Now the other two can continue
const foldingClothes = (callback) => {
  setTimeout(() => {
    callback();
    console.log("now Im folding clothes");
  }, 1000);
};

// foldingClothes(eatDinner);

//creating a promise
const myPromise1 = new Promise((resolve, reject) => {
  if (2 + 2 === 4) {
    resolve("That does add up, nice work");
  } else {
    reject("That is not good math, 2 plus 2 equals 4");
  }
});
const myPromise2 = new Promise((resolve, reject) => {
  if (2 + 2 === 4) {
    resolve("This is inside the second promise");
  } else {
    reject("That is not good math, 2 plus 2 equals 4");
  }
});
const myPromise3 = new Promise((resolve, reject) => {
  if (2 + 2 === 5) {
    resolve("This is inside the third");
  } else {
    reject("That is not good math, 2 plus 2 equals 4");
  }
});
//<====================== consuming promises =========================>
//this is whats important today
//.then and .catch Example (2015)
myPromise1
  .then((pizza) => {
    console.log("everything was good,", pizza);
    return myPromise2;
  })
  .then((response2) => {
    console.log("response 2", response2);
  })
  .catch((err) => {
    console.log("there was error with your promise", err);
  });

//<========================== async and await ======================>
//Cleaner way to do .then and .catch, but both are valid and common
//this is the function key word version
//async function asyncExample(){}
const asyncExample = async () => {
  try {
    const myPromiseResponse = await myPromise1;
    const myPromiseResponse2 = await myPromise2;
    console.log(
      "Promise was successful ",
      myPromiseResponse,
      myPromiseResponse2
    );
  } catch (err) {
    console.log("Here is the error", err);
  }
};
// asyncExample();

//<========================Promise all example =====================>
const promiseAllFunc = async () => {
  try {
    const promiseAllResponse = await Promise.all([
      myPromise1,
      myPromise2,
      myPromise3,
    ]);
    console.log("Promise all log", promiseAllResponse);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("this is the finally");
  }
};
promiseAllFunc();

//<===================API Fetch Request ================>

const fetchingRickandMortyChars = async () => {
  const rickAndMortyRes = await fetch(
    "https://rickandmortyapi.com/api/character"
  );
  const parsedData = await rickAndMortyRes.json();
  console.log("Here are the chars", parsedData);
};
// fetchingRickandMortyChars();
