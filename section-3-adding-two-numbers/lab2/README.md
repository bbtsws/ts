# Let's add Types!

This step takes us a bit further along the way towards using TypeScript types to add two numbers.

# Basic concepts:

## Generics
```ts
type A<B> = B;
type S = A<string>;
// valid
const s: S = "abc";

// invalid
const x: S = 123; // x should be a string.
```

## Generic constraints
```ts
type A<B extends string> = B;
// valid
type S = A<string>; 

// invalid
type P = A<number>; // number doesn't extend string
```

## Conditional type checks

```ts
type T<A> = A extends number? number : string;
type NN = T<number>; // this results in "number"
type SS = T<Object>; // this results in "string";
// valid
const nn1: NN = 1; 
const ss1: SS = "a";

// invalid
const nn2: NN = "x";
const ss2: SS = 2;
```
With the ```A extends B ? X : Y``` syntax, we can define conditional types that depend on Type parameters.

## Type lookups

```ts
type A = {"something": boolean, "else": string};
type B = A["something"]; // B is "boolean"
// valid
const c: B = true; 

// invalid
const d: B = 1; // expecting a Boolean
```

## Numbers Universe

Previously, we defined numbers as ```"zero" | Pos```.  Now, each number will have its own unique type.  So, one, two, three, four, etc will have have its own unique type.  We will use a function to generate these types.

## Instructions

1. Copy [`add.types.problem.ts`](add.types.problem.ts) into the Playground.
1. Implement the `undefined` types until you get the results. Check the results by hovering of the type definitions using Playground.

