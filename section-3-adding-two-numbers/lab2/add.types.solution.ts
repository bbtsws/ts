type Zero = "zero";
type Pos = { prev: Num };
type Num = Zero | Pos;

type One = { prev: Zero };
type Two = { prev: One };
type Plus1<T extends Num> = { prev: T };
type Minus1<T extends Pos> = T["prev"]

type Equals<T1, T2> =
	T1 extends T2 ?
	T2 extends T1 ?
	true :
	false :
	false;

type Add<T1 extends Num, T2 extends Num> = ({
	"recurse": Add<Plus1<T1>, T2 extends Pos ? Minus1<T2> : Zero>,
	"done": T1
})[T2 extends Pos ? "recurse" : "done"];

// Check the results.  Play with different numbers
// True
type Res1 = Equals<Two, Add<One, One>>; // Two = One + One
type Res2 = Equals<Plus1<Two>, Add<One, Two>>; // Two++ = One + Two

// False
type Res3 = Equals<Plus1<Two>, Add<One, One>>; // Two++ = One + One

// let two: Add<One, One> = { prev: { prev: "zero" } };
// two = { prev: "zero" };

// let three: Add<Two, One> = { prev: { prev: { prev: "zero" } } };
// three = "zero";

// const one = two.prev;

// const four: Add<Two, Two> = { prev: three };

// const five: Add<Two, Plus1<Two>> = { prev: four };
