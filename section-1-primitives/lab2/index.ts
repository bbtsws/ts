
const square = (x: number): number => {
  return x * x;
}

// show return val inference
const square2 = (x: number) => {
  return x * x;
}

const squares = (x: number[]): number[] => {
  return x.map((v: number) => square(v));
}

// show return val inference advanced
const squares2 = (x: number[]) => {
  return x.map((v: number) => square(v));
}

// able to specify return type object shape
const squareObject = (x: {[s: number]: number}): {[s: number]: number} => {
  Object.keys(x).forEach((k: any) => {
    x[k] = square(x[k]);
  });

  return x;
};

const aNumber: number = 3;
console.log(square(aNumber));
console.log(square(4));

const numbers = [1, 2, 3];
console.log(squares(numbers));

const a: {[s: string]: number} = {a: 1, b: 2, c: 3, d: 4};
console.log(squareObject(a));
