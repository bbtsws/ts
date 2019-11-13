// Let's do types now.
type Zero = "zero";

// Hint: look at the definition of "one" in line 14.
type Pos = {prev: Num};

// Hint: how did we define Numbers in the previous lab?
type Num = Pos | Zero;

const zero: Zero = "zero";

// One is the number after zero
const one: Pos = {prev: zero };
const two: Pos = {prev: one};

const isZero = (x: Num): x is Zero => x === zero;

const plus1 = (x: Num): Pos => ({prev: x});
const minus1 = (x: Pos): Num => x.prev;

// "a + b = (a + 1) + (b - 1)"
// "c + 0 = c"
const add = (x: Num, y: Num): Num =>
	isZero(y)? x : add(plus1(x), minus1(y));

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

