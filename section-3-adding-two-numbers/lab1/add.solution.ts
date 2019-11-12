// Let's guarantee the results

type Zero = "zero";
type Pos = { prev: Num };
type Num = Zero | Pos;

const zero: Zero = "zero";

// notice now that we have a two user-defined type guards
const isPositive = (x: Num): x is Pos => x != zero;
const isZero = (x: Num): x is Zero => x == zero;

const plus1 = (x: Num) => ({ prev: x });
const minus1 = (x: Pos) => x.prev;

// and we're using the type guard here
const add = (x: Num, y: Num): Num =>
  isPositive(y) ? add(plus1(x), minus1(y)) : x;

// also usimh type guards here (hover over minus1 parameters)
const eq = (x: Num, y: Num): boolean =>
  isZero(x) && isZero(y) ? true :
    isZero(x) || isZero(y) ? false :
      eq(minus1(x), minus1(y));
      
const one = plus1(zero);
const two = { prev: one };

const isOneEqualsOnePlusZero: boolean = eq(one, add(one, zero));
const isTwoEqualsOnePlusOne: boolean = eq(two, add(one, one));

console.log("isOneEqualsOnePlusZero", isOneEqualsOnePlusZero);
console.log("isTwoEqualsOnePlusOne", isTwoEqualsOnePlusOne);
