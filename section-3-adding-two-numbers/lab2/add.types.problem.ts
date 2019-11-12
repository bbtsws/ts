type Zero = "zero";
type One = { "prev": Zero };

// @TODO: Let's define two.
// Hint: how did we define one?
type Two = undefined;

// @TODO: Let's define Pos
// Hint: how did we define One and Two
type Pos = undefined;

type Num = Zero | Pos;

// @TODO: Let's define plus 1
// Hint: How did we go from One to Two?
type Plus1<T extends Num> = undefined;

// @TODO: Let's define minus 1
// Hint: How do we go from Two to One?
type Minus1<T extends Pos> = undefined;

// @TODO: Let's implement addition of types
// Hint: T1 + T2 = (T1 + 1) + (T2 - 1)
type Add<T1 extends Num, T2 extends Num> = undefined;

type Equals<T1, T2> =
	T1 extends T2 ?
	T2 extends T1 ?
	true :
	false :
	false;

// Check the results.  Play with different numbers.
type Res = Equals<Two, Add<One, One>>; // is it true?
type Res1 = Equals<Plus1<Two>, Add<One, One>>; // is it false?
type Res2 = Equals<Plus1<Two>, Add<One, Two>>; // is it true?
