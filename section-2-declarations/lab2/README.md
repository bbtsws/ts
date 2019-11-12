# Lab 2

This lab demonstrates generic types and gives experience with reading typescript errors and writing interfaces and type definitions.

# New concepts

## Generics
```ts
type A<B> = B;
type S = A<string>;
const s: S = "abc"; // valid
const x: S = 123; // invalid: x should be a string.
```

## Instructions

1. Install dependencies `npm install`, __or__ skip if TypeScript is installed globally
2. Build project `npm run build`
3. Read any TypeScript errors from build
4. Update <contrived_class/contrivedClass.ts> to fix type errors
5. Return to step 2. and continue until all 

The file <contrived_class/contrivedClass.complete.ts> is provided as a sample of what a completed definition looks like.
