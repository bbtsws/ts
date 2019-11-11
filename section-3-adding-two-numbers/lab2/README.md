# Let's add Types!

This step takes us a bit further along the way towards using TypeScript types to add two numbers.

# Basic concepts:

```ts
type A<B extends C> = {propertyName: B};
```
Define an object A, which property has a value of type B, which extends C.

## Instructions

1. Copy [`add.types.problem.ts`](add.types.problem.ts) into the Playground.
1. Implement the `undefined` types until you get the results. Check the results by hovering of the type definitions using Playground.

