import ContrivedClass, {ContrivedObject} from './contrivedClass';

const co: ContrivedObject = {numberField: 2,  stringField: 'field', optionalField: true};

const cc = new ContrivedClass(1, 'str', co);
console.log(`number: ${cc.num}`);
console.log(`string: ${cc.str}`);
console.log(`private: ${cc.getPriv()}`);

let val: ContrivedClass = null;
// ...
val = cc;
// displays use of optional ? flag
val = new ContrivedClass(2, '20', {numberField: 10, stringField: ''});
console.log(val);
val = ContrivedClass.createContrivedClass(3, '30');
console.log(val);

// try to violate interface signature:
//let val3 = new ContrivedClass(2, '20', {numberField: 1});
