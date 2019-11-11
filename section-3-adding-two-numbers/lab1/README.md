# Let's add!

In this lab we will add two numbers with the "value" system in TypeScript.

# Basic concepts:

```ts
type T = {something: number};
const validT: T = {something: 1}; // valid
const invalidA: T = {abc: 1}; // invalid: the "something" property is not found
const invalidB: T = {something: "abc"}; // invalid: the property value is not a number
```
This defines a type T, which is an object that has a property called `something`, which is of type `number`.

```ts
type AB = A | B;
```
This defines a type `AB` that can be either an `A` or a `B`.

```ts
type T = "a text";
const a: T = "a text"; // valid
const b: T = "something else"; // invalid: "something else" doesn't match the string literal type.
```
"A string literal type is a type whose expected value is a string with textual contents equal to that of the string literal type."



## Instructions

1. Copy in Playground the contents of [`add.problem.ts`](add.problem.ts).
1. Implement the `undefined` constants and functions.
1. Run the exercise until you get the expected results in the console.
