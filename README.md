# food-calculator

create an application which calculate which size of 
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

```const { people, pieces } = value;``` is using destructuring assignment to extract the people and pieces properties from the value object. 
By using this statement, we are extracting these values and creating variables people and pieces with the corresponding values. This makes it easier to work with these values later in the function.
If you omit this statement, you would need to access value.people and value.pieces throughout the function instead of using the shorter variables people and pieces.
example ```value.people > 0 && value.pieces > 0```

```{result && (<div className='mt-4'>``` is short circuit. one of conditional rendering in React. It utilizes the logical AND (&&) operator for conditional rendering.
expression before && is evaluated, and if it is true, then the expression after && is rendered. If the expression before && is falsy, React does not render the component after &&.

minCost with Number.MAX_VALUE is to set an initial value that is guaranteed to be larger than any potential calculated cost. This value acts as a starting point for the comparison within the loop.
If you didn't initialize minCost to Number.MAX_VALUE, you would need to choose some other initial value for minCost that is guaranteed to be larger than any valid cost.
By setting minCost to Number.MAX_VALUE, you ensure that the first comparison in the loop will always result in the current cost being smaller than minCost

let is used because minCost and bestSize are updated inside the loop based on certain conditions. use for variables that can be reassigned. If you use const here, you will encounter an error when trying to reassign value. const is used for variables that should not be reassigned after initialization. const would be appropriate for minCost and bestSize if you never plan to reassign these variables.
