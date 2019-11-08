export interface IContrivedNode<T = string> {
    item: T;
    next: IContrivedNode<T>;
}
declare class ContrivedNode<T = any> implements IContrivedNode<T> {
    static createContrivedNode<ST>(item: ST, next: ContrivedNode<ST>): ContrivedNode<ST>;
    item: T;
    next: ContrivedNode<T>;
    constructor(item: T, next?: ContrivedNode<T>);
    hasNext(): boolean;
    applyToItem(f: (T: any) => void): void;
}
export default ContrivedNode;
