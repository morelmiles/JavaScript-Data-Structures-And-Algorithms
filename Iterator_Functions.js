//Iterator functions are those that return a new array after looping through the data

const curve = grade => (grade += 5);

const grades = [56, 77, 89, 42, 65, 76];

const newGrades = grades.map(curve);

// console.log(newGrades);

//An example that uses strings

const first = word => word[0];

const words = ["You ", "Only", "Live", "Once"];

const abbreviation = words.map(first).join("");
console.log(abbreviation);

//Differencce between the filter() and every()
//The filter() works similarly to every() , but instead of returning true if all the elements in an array
//satsify a Boolean, the function returns a new array consisting of the elements that satsify the Boolean function

const isEven = num => num % 2 == 0;

const isOdd = num => num % 2 != 0;

const nums = [];
for (let i = 0; i < 20; ++i) {
  nums[i] = i + 1;
}

const evens = nums.filter(isEven);
console.log("Even nubers");
console.log(evens);

const odds = nums.filter(isOdd);
console.log("Odd numbers");
console.log(odds);
