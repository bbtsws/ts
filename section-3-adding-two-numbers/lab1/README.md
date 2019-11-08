# Let's add!

In this lab we will add two numbers with the "value" system in TypeScript.


## Step 1

* Use the playground to define a few types, see what is rendered into Javascript, and answer for yourself "what are types""?

For example, define a type:

```ts
type Zero = "zero";
```

What javascript is producted?

Then define a type based on it:

```ts
type Num = Zero;
```

Anything yet?

How can we enhance ```Num``` to make to cover positive integers?

## Step 2
Open ```add.ts``` and implement the undefined functions to add two numbers.
In this exercise we won't use yet types.

## Step 3

Let's implement types and type guards and see how that helps.
Use ```Num```, ```Pos```, and ```Zero``` to tighten your function definitions. 
