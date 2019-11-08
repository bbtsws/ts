// Let's implement addition using the type system

type Zero = "zero";
type Pos = { prev: Num };
type Num = Zero | Pos;

type One = { prev: Zero };
type Two = { prev: One };
type Plus1<T extends Num> = { prev: T };
type Minus1<T extends Pos> = T["prev"];

type AddZero<T1> = T1;

// @TODO: How can we implement this add?
type Add<T1 extends Num, T2 extends Num> = undefined;

// @TODO: How can we check that the types are equal?
type Equals<T1, T2> = undefined;

// Check the results.  Play with different numbers.
type Res = Equals<Two, Add<One, One>>; // is it true?
type Res1 = Equals<Plus1<Two>, Add<One, One>>; // is it false?
type Res2 = Equals<Plus1<Two>, Add<One, Two>>; // is it true?
