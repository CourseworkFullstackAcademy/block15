# block15
Objects JavaScript Guided Practice and Froyo Workshop 
---------------------------------
Lesson Overview:
In this lesson, we will learn about Objects, properties, and methods within JavaScript.

Learning Objectives
Create an object.
Modify objects with dot/bracket access/assignment, delete.

Presentation Slides: https://docs.google.com/presentation/d/1CbcSHxUQX3sElkag6gMFsSg21AInqUXYD0q2oB11Hps/edit?usp=sharing
---------------------------------
Guided Practice:
Guided Practice - Dinner Party
You and your friends go out to eat for dinner at the new JavaScript Pub. You talk, laugh, and reminisce about the old days. As you are in the middle of talking about your high school prom, the waiter brings you the check. Unfortunately, the check is smeared with an array of sauces, making it unreadable. Instead of asking for a reprint, you decide to problem-solve and discover the total for yourself.

You ask your friends what they ate and you received the following information.

You ate a cheeseburger for $12.
Jonah had the $20 steak.
Amy's soup cost $8.
Mateo did not like his mac and cheese for $14.
Cheyenne was impressed by the unlimited soup and salad combo for $16.
 Using what we know about objects and their properties, complete the following problems. Remember to pseudocode your approach and manually test your solutions.

1. Declare an object named dinner that uses the purchased food as the keys and the price of the food for the values.

Show Answer
 

2. Using the dinner object, create an array of the different foods that were eaten during the dinner.

Show Answer
 

3. Using the dinner object, create an array of the prices of the meals eaten during the dinner.

Show Answer
 

4. Using what we know about objects, add the values of the dinner object to calculate the total cost of the meal. 

Possible Answer 1
Possible Answer 2

---------------------------------
Instructions to workshop link https://fullstack.instructure.com/courses/636/assignments/20519

Overview
As you are picking out your froyo flavor at your favorite local frozen yogurt shop, you overhear the management team discussing how they want to gather data to improve customer retention. You make small-talk and offer your services to help them to build a survey. 

Note: Be sure to console.log and console.table throughout the workshop to check your work.

Directions
Open VS Code and create a file named: index.js.
After an initial meeting, the management team has decided they want to collect the following information. As a test case, you have your friend Jake complete the survey. Using what we know about JavaScript objects, create an object labeled customer and add the following key:value pairs:

keys	        values
firstName	    "jake"
lastName	    "smith"
email	        "jaekSmih!aol.com"
phone	         undefined
zipCode	         "631"
favoriteFlavors	 32
cupSize	         "medium"
favoriteStore	 "Target"
firstVisit	     false

You notice that Jake made some mistakes when filling out the survey. You talk to Jake and gather the correct information. Modify the following properties in the customer object using bracket notation: 
email to "Jak3Smith1992@email.com"
phone to 3195551234
zipCode to "63132"
favoriteFlavors to "coffee", "strawberry", and "matcha"

As you review the survey draft with the management team, they have decided to remove a couple of items from the survey. Delete the following properties in the customer object using the delete keyword.
zipCode
favoriteStore

The management team also wants to add the following items to the survey: toppings, future flavors, and today's purchase cost. You check with Jake, and he provides the other bits of information you need to add these keys. Add the following key:values to the customer object using dot notation:
toppings: "chocolate sprinkles", "wafer straws", and "gummy bears"
futureFlavors: "mango"
todaysPurchaseCost: 5.32

Before you finalize the survey, you decide to check your survey one last time. In an array, print the keys in your survey. You should have the following:
firstName
lastName
email
phone
favoriteFlavors
cupSize
firstVisit
toppings
futureFlavors
todaysPurchaseCost
-------------------------------------------