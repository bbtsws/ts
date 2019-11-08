type Zero = "zero";
type Num = Zero | Pos;
type Pos = { prev: Num };

// @TODO: Implement this type
type Plus1<N extends Num> = undefined;

// @TODO: Implement this type
type Minus1<N extends Pos> = undefined;

type One = { prev: Zero };
type Two = { prev: { prev: Zero } };
type Three = { prev: { prev: { prev: Zero } } }; // limited time and space you know, so just see the rest in your mind
