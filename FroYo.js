///create prompt asking user to enter froyo flavors separated by comma
//enter ice cream flavors

const userInput = prompt(
  "Please enter FrYo flavors separated by a comma",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

//turn array into object

const flavorArray = userInput.split(",");
console.log(flavorArray);

const count = {};

for (const key of flavorArray) {
  flavorArray[key] = 0;
  if (count[key]) {
    count[key] += 1;
  } else {
    count[key] = 1;
  }
}
console.log(count);

//create a loop of flavors
//if array's value is = to key, add 1 to key's value
