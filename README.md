# food-calculator

create an application which helps them calculate which size of 
pizza is best for group bookings.

The application must let the user enter:

● The number of people in the group (1 to 999,999,999)

● How many pieces each person will eat (1 - 10 pieces). 
(This will give a total number of pieces.)

They have 5 sizes of Pizza which their customers can order.

5 inch $3 4 pieces

7 inch $5 6 pieces

10 inch $8 10 pieces

15 inch $12 15 pieces

24 inch $18 24 pieces

Create a program that will calculate how much the cost would be for each size of pizza, and 
therefore which is the lowest cost for the customer

## implementation
React.js web

_dependencies_

```bash
npm install bootstrap
```
**import bootstrap/dist/css/bootstrap.min.css** in index.js

- calculatePizzaCost function to handle the logic of calculating costs and determining the best size.
- Used a state variable result to store the calculated results and displayed them after the form is submitted.
- used forEach
- can use a for loop instead of forEach to achieve the same output.

```const { people, pieces } = value;``` is using destructuring assignment to extract the people and pieces properties from the value object. In your original code, value is a state object that holds the number of people and pieces entered by the user in the form.

By using this statement, you are extracting these values and creating variables people and pieces with the corresponding values. This makes it easier to work with these values later in the function.

If you omit this statement, you would need to access value.people and value.pieces throughout the function instead of using the shorter variables people and pieces. For example:

