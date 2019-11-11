// Let's do types now.
type Zero = "zero";

// @TODO: How can we define positive numbers?
// Hint: look at the definition of "one" in line 14.
type Pos = undefined;
// @TODO: How can we define "numbers" as the union of Zero and all Positives?
// Hint: how did we define Numbers in the previous lab?
type Num = undefined;

const zero = "zero";

// One is the number after zero
const one = { prev: zero };

// @TODO: How do we define two?
const two = undefined;

// @TODO: How do we define the positive numbers?
// Hint: zero us not a positive number
const isPositive = (x: any) => undefined;

// @TODO: How do we define plus 1?
// Hint: how did we define "one" based on "zero"?
const plus1 = (x: any) => undefined;

// @TODO: How do we define minus 1? 
// Hint: how can we get "one" from "two"?
const minus1 = (x: any) => undefined;

// @TODO: Finally, how can we add two arbitrary numbers?
// Hint: "a + b = (a + 1) + (b - 1)"
const add = (x: any, y: any): any =>
	undefined;

const eq = (x: any, y: any): any =>
	x == zero && y == zero ? true :
		x == zero || y == zero ? false :
			eq(minus1(x), minus1(y));

const isOneEqualsOnePlusZero = eq(one, add(one, zero));
const isTwoEqualsOnePlusOne = eq(two, add(one, one));

console.log("isOneEqualsOnePlusZero", isOneEqualsOnePlusZero); // do we get true?
console.log("isTwoEqualsOnePlusOne", isTwoEqualsOnePlusOne); // do we get true?

