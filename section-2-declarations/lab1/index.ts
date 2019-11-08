import AlphanumericList, {IAlphanumericList} from './alphanumeric_list';

const head = AlphanumericList.createAlphanumericList(1, new AlphanumericList('a'));

console.log(head.hasNext());
