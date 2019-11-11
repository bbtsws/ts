# Let's add Types!

This step takes us a bit further along the way towards using TypeScript types to add two numbers.

# Basic concepts:

## Generic constraints
```ts
type A<B extends number> = {propertyName: B};
type N = A<number>;  // valid
type P = A<string> = // invalid
```
Define an object A, which property has a value of type B, which extends number.


## Conditional type checks

```ts
type T<A> = A extends boolean? number : string;
type NN = T<boolean>; // this results in "number"
type SS = T<Object>; // this results in "string";
const nn1: NN = 1; // valid
const nn2: NN = "x"; // invalid
const ss1: SS = "a"; // valid
const ss2: SS = 2; // invalid
```
With the ```A extends B ? X : Y``` syntax, we can define conditional types that depend on Type parameters.

## Type resolution

```ts
type A = {"something": boolean};
type B = A["something"]; // this results in "boolean"
const B: B = true; // valid
const V: B = 1; // invalid
```

## Instructions

1. Copy [`add.types.problem.ts`](add.types.problem.ts) into the Playground.
1. Implement the `undefined` types until you get the results. Check the results by hovering of the type definitions using Playground.

