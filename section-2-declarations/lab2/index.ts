import ContrivedNode, {IContrivedNode} from './contrived_class';

const head = new ContrivedNode<number>(1);
const headPlusOne = new ContrivedNode<number>(2);
head.next = headPlusOne;
console.log(head.hasNext());

// const start = new ContrivedNode<string>('start');
// headPlusOne.next = start;

const first: IContrivedNode<number> = new ContrivedNode(1);
console.log(first.item);
