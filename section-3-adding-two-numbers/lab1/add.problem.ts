const zero = "zero";

// @TODO: define function
const isPositive = (x: any) => undefined;

// @TODO: define function
const plus1 = (x: any) => undefined;

// @TODO: define function
const minus1 = (x: any) => undefined;

// @TODO: define function
const add = (x: any, y: any): any =>
	undefined;

const eq = (x: any, y: any): any =>
	x == zero && y == zero ? true :
		x == zero || y == zero ? false :
			eq(minus1(x), minus1(y));

// Different ways of building the numbers
const one = plus1(zero);
const two = { prev: one };


const isOneEqualsOnePlusZero = eq(one, add(one, zero));
const isTwoEqualsOnePlusOne = eq(two, add(one, one));

console.log("isOneEqualsOnePlusZero", isOneEqualsOnePlusZero); // do we get true?
console.log("isTwoEqualsOnePlusOne", isTwoEqualsOnePlusOne); // do we get true?

