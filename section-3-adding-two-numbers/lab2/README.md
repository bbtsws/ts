# Let's add Types!

This step takes us a bit further along the way towards using TypeScript types to add two numbers.

# Basic concepts:

## Generics
```ts
type A<B> = B;
type S = A<string>;
const s: S = "abc"; // valid
const x: S = 123; // invalid: x should be a string.
```

## Generic constraints
```ts
type A<B extends string> = B;
type S = A<string>;  // valid
type P = A<number>; // invalid
```

## Conditional type checks

```ts
type T<A> = A extends number? number : string;
type NN = T<number>; // this results in "number"
type SS = T<Object>; // this results in "string";
const nn1: NN = 1; // valid
const nn2: NN = "x"; // invalid
const ss1: SS = "a"; // valid
const ss2: SS = 2; // invalid
```
With the ```A extends B ? X : Y``` syntax, we can define conditional types that depend on Type parameters.

## Type lookups

```ts
type A = {"something": boolean, "else": string};
type B = A["something"]; // this results in "boolean"
const c: B = true; // valid
const d: B = 1; // invalid: d is a boolean
```

## Instructions

1. Copy [`add.types.problem.ts`](add.types.problem.ts) into the Playground.
1. Implement the `undefined` types until you get the results. Check the results by hovering of the type definitions using Playground.

