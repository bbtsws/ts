import Thing2, {Thing1} from './thing';

const co: Thing1 = {numberField: 2,  stringField: 'field', optionalField: true};

const cc = new Thing2(1, 'str', co);
console.log(`number: ${cc.num}`);
console.log(`string: ${cc.str}`);
console.log(`private: ${cc.getPriv()}`);

// initialize a variable of type Thing2, but do not define it
let val: Thing2 = null;

// can be set to an existing value of type Thing2
val = cc;

// again set val to a brand new Thing2 instance, and displays use of optional ? flag
val = new Thing2(2, '20', {numberField: 10, stringField: ''});
console.log(val);

// static method
val = Thing2.createThing2(3, '30');
console.log(val);

// cannot set val to a non-Thing1
// val = {numberField: 2, stringField: 'field'};

// try to violate interface signature:
//let val3 = new Thing2(2, '20', {numberField: 1});
