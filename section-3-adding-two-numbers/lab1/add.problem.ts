// Let's do types now.
type Zero = "zero";

// @TODO: How can we define positive numbers?
// Hint: look at the definition of "one" in line 14.
type Pos = undefined;

// @TODO: How can we define "numbers" as the union of Zero and all Positives?
// Hint: how did we define Numbers in the previous lab?
type Num = undefined;

const zero: undefined = "zero";

// One is the number after zero
const one: undefined = { "prev": zero };

// @TODO: How do we define two?
const two: undefined = undefined;

// @TODO: How do we define the positive numbers?
// Hint: zero us not a positive number
const isZero = (x: Num): boolean => undefined;

// @TODO: How do we define plus 1?
// Hint: how did we define "one" based on "zero"?
const plus1 = (x: Num): Pos => undefined;

// @TODO: How do we define minus 1? 
// Hint: how can we get "one" from "two"?
const minus1 = (x: Pos): Num => undefined;

// @TODO: Finally, how can we add two arbitrary numbers?
// Hint: 
// "a + b = (a + 1) + (b - 1)"
// "c + 0 = c"
const add = (x: Num, y: Num): undefined =>
	undefined;

const eq = (x: Num, y: Num): boolean =>
	isZero(x) && isZero(y) ? true :
		isZero(x) || isZero(y) ? false :
			eq(minus1(x), minus1(y));


const isOneEqualsOnePlusZero = eq(one, add(one, zero));
console.log("one = one + zero", isOneEqualsOnePlusZero); // true?

const isTwoEqualsOnePlusOne = eq(two, add(one, one));
console.log("two = one + one", isTwoEqualsOnePlusOne); // true?

const isThreeEqualsOnePlusOne = eq(add(one, two), add(one, one));
console.log("three = one + one", isThreeEqualsOnePlusOne); // false?

