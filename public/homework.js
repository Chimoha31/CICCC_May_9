// a).Create an arrow function named “mySum”. 
// 1. Your function should accept an arbitrary number of arguments using the REST operator.
// 2. Your function should return the sum of all of its inputs.
const mySum = (...numbers) => {
  return numbers.reduce((preNum, curNum) => {
    return preNum + curNum;
  }, 0);
};

console.log(mySum(10, 23, 40));

// c). Create an array of numbers named “myArr”. Your array may have any length (try different lengths to test it).
// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100];
// const myArr = [26, 5, 11, 99, 83, 67];
const myArr = [2, 4, 6, 8, 9];

// d). Call your function passing as arguments the members of myArr array using the SPREAD operator. Assign the result to a “result” variable and console log it.
const insideOfmyArr = (...num) => {
  const result = myArr;
  return result;
};

console.log(insideOfmyArr(myArr));

// e). Create a new array named “mySecondArr”. Map the contents of your myArr array to mySecondArr array using an anonymous function that multiplies each member of myArr by 2.

let mySecondArr = [];
function double() {
  myArr.map((num) => {
    const doubleNum = num * 2;
    mySecondArr.push(doubleNum);
  });
  return mySecondArr;
}

console.log(double());

// f). Filter the contents of your mySecondArr using an anonymous function that console logs the numbers above average number (you’ll need to find the average first).
const avr = ([...mySecondArr]) => {
  const total = mySecondArr.reduce((preN, curN) => {
    return preN + curN;
  }, 0);
  return total / mySecondArr.length;
};
console.log(avr(mySecondArr));


function aboveNum() {
  const number = mySecondArr.filter((num) => {
    return num >= avr(mySecondArr)
  });
  return number
}
console.log(aboveNum());

// g). Use setTimeout() function. Pass it a callback function as a parameter that console logs “Goodbye” after 3 seconds.
const callback = () => {
  console.log("GoodBye")
}
setTimeout(callback, 3000);


// h). Create an “Employee” object that has the following key-value pairs: “name”, “email”, “department” and “startDate”.
class Employee {
  constructor(name, email, department, startDate) {
    this.name = name,
    this.email = email,
    this.department = department,
    this.startDate = startDate
  }
  
}
// i). Destructure your object to create a new object, called “Person”, that only has name and email keys (and the corresponding values).
const Person = new Employee("Teddy", "teddy@kawaii.com");
console.log(Person);