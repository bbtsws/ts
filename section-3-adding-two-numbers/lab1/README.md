# Let's add!

In this lab we will add two numbers with the "value" system in TypeScript.

# Basic concepts:

## Object property value type constraint
```ts
type T = {something: number};
// valid
const validT: T = {something: 1}; 
// invalid
const invalidA: T = {abc: 1}; // "something" not found
const invalidB: T = {something: "abc"}; // "abc" is not a number
```
This defines a type T, which is an object that has a property called `something`, which is of type `number`.

## Union Types

```ts

type AB = number | string;
// valid
let a: AB = 1;
let b: AB = "hello";
// invalid
let c: AB = true; // expecting a number or a string, not a boolean

```

## String Literal Types
```ts
type T = "a text";
const a: T = "a text"; // valid
const b: T = "something else"; // invalid: "something else" doesn't match the string literal type.
```
"A type whose expected value is a string with textual contents equal to that of the string literal type." ~ https://git.io/JerUY


# Our Numbers System

We define our numbers as natural numbers represented as objects:
```ts
const zero = "zero";
const one = {"prev": zero};
const two = {"prev": one};
// or alternatively
const two = {"prev": {"prev": "zero"}};
```

And we want to define these functions that is defined for this universe:
- `add`
- `plus one`
- `minus one` for positive numbers
- `equality`


## Instructions

1. Copy in Playground the contents of [`add.problem.ts`](add.problem.ts).
1. Implement the `undefined` constants and functions.
1. Run the exercise until you get the expected results in the console.
