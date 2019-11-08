// Typeless solution

const zero = "zero";
const isPositive = (x: any) => x != zero;
const plus1 = (x: any) => ({ "prev": x });
const minus1 = (x: any) => x.prev;

const add = (x: any, y: any): any =>
  isPositive(y) ? add(plus1(x), minus1(y)) : x;

const eq = (x: any, y: any): any =>
  x == zero && y == zero ? true :
    x == zero || y == zero ? false :
      eq(minus1(x), minus1(y));

const one = plus1(zero);
const two = { prev: one };

const isOneEqualsOnePlusZero = eq(one, add(one, zero));
const isTwoEqualsOnePlusOne = eq(two, add(one, one));

console.log("isOneEqualsOnePlusZero", isOneEqualsOnePlusZero)
console.log("isTwoEqualsOnePlusOne", isTwoEqualsOnePlusOne);
