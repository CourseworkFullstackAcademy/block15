/*After an initial meeting, the management team has decided they want to collect the following information. As a test case, you have your friend Jake complete the survey. Using what we know about JavaScript objects, create an object labeled customer and add the following key:value pairs:
keys	values
firstName	      "jake"
lastName	      "smith"
email	          "jaekSmih!aol.com"
phone	          undefined
zipCode	          "631"
favoriteFlavors	  32
cupSize	          "medium"
favoriteStore	  "Target"
firstVisit	      false

2.  declare an object to be named custoemr then assign values and keys*/
const customer = {
	firstName: "jake",
	lastName: "smith",
	email: "jaeksmih!aol.com",
	phone: undefined,
	zipCode: "631",
	favoriteFlavors: 32,
	cupSize: "medium",
	favoriteStore: "Target",
	firstVisit: false
}

/*3.  correct the following using bracket notation:
email to "Jak3Smith1992@email.com"
phone to 3195551234
zipCode to "63132"
favoriteFlavors which will be an array to "coffee", "strawberry", and "matcha"*/
customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"];
console.log(customer) 

//4. Delete zipCode and favoriteStore
delete customer["zipCode"];
delete customer["favoriteStore"];
console.log(customer)

//4. cont, Add the following key:values to the customer object using dot notation: toppings which will be an array itself: "chocolate sprinkles", "wafer straws", and "gummy bears" futureFlavors: "mango" todaysPurchaseCost: 5.32

customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;
//4. cont
console.log(customer)
//5. print the keys
console.log(Object.keys(customer))

const oldBooks = {
	don_quixote: true,
  	a_tale_of_two_cities: true,
  	the_little_price: true,
 } ;
  
 const newBooks = {
  	the_lord_of_the_rings: true,
  	harry_potter_and_the_sorcerers_stone: true,
 };

const myBookCollection = Object.assign( {}, oldBooks, newBooks);
console.log(myBookCollection)

