/*You ate a cheeseburger for $12.
Jonah had the $20 steak.
Amy's soup cost $8.
Mateo did not like his mac and cheese for $14.
Cheyenne was impressed by the unlimited soup and salad combo for $16.
 Using what we know about objects and their properties, complete the following problems. Remember to pseudocode your approach and manually test your solutions.

1. Declare an object named dinner that uses the purchased food as the keys and the price of the food for the values.
*/
const dinner = {
	 hamburger: 12,
	 steak: 20,
	 soup: 8,
	 macNCheese: 14,
	 soupAndSalad: 16
};
/*
2. Using the dinner object, create an array of the different foods that were eaten during the dinner.*/
console.log(Object.keys(dinner));
/*
3. Using the dinner object, create an array of the prices of the meals eaten during the dinner.*/
console.log(Object.values(dinner));
/*4. Using what we know about objects, add the values of the dinner object to calculate the total cost of the meal. I am going to loop through the array with the for ... in loop but I do not know how to add the values */
let totalCost = 0;
for (const property in dinner) {
	totalCost += dinner[property];
}
console.log(totalCost)

// or

let prices = Object.values(dinner);
let anotherTotalCost = 0;

for(let i = 0; i < prices.length; i++) {
	anotherTotalCost += prices[i];
}
console.log(anotherTotalCost)
