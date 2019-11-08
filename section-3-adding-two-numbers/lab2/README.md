# Let's add Types!

This step takes us a bit further along the way towards using TypeScript types to add two numbers.

## Step 1:
Open ```add.types.1.basic.ts```

Does this look familiar?

```ts
type Zero = "zero";
type Num = Zero | Pos;
type Pos = { prev: Num };

```

Copy and paste the above snippet into either the TypeScript playground or run `tsc add.types.1.basic.ts` from within this directory.

What is the result?

## Step 2
Next, open ```add.types.2.simple_recursion.ts```.
How can we implement ```Plus1``` and ```Minus1```?


```ts
type Plus1<N extends Num> = undefined;
type Minus1<N extends Pos> = undefined;
```

Again, copy and paste the above snippet into either the TypeScript playground or run `tsc add.types.2.simple_recursion.ts` from within this directory.

## Step 3
Next, let's open ```add.types.3.advanced_recursion.ts```
How can we implement ```Add``` and ```Equals```?

```ts
type Equals<T1, T2> = undefined;

type Add<T1 extends Num, T2 extends Num> = undefined;
```
