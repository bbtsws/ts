"use strict";

export interface IContrivedNode<T = string> {
    public item: T;
    public next: IContrivedNode<T>;
}

export default class ContrivedNode<T = any> implements IContrivedNode<T> {
    public next: IContrivedNode<T>;

    constructor(public item: T, next?: ContrivedNode<T>) {
    	this.next = next;
    }

    static createContrivedNode<ST>(item: ST, next: ContrivedNode<ST>): ContrivedNode<ST> {
    	return new ContrivedNode<ST>(item, next);
    }

    public hasNext(): boolean {
    	return Boolean(this.next);
    }

    public applyToItem(f: (T: any) => void): void {
    	f(this.item);
    }
}
