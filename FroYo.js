const userInput = prompt(
  "Please enter FrYo flavors separated by a comma",
  "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);

const flavorArray = userInput.split(",");
console.log(flavorArray);

const froYoFlavors = {};

for (const key of flavorArray) {
  froYoFlavors[key] = 0;
}
console.log(froYoFlavors);
