"use strict";

export interface IContrivedNode<T = any> {
}

export default class ContrivedNode<T> implements IContrivedNode<T> {
    constructor(item, next) {
        this.item;
        this.next;
    }

    static createContrivedNode(item, next) {
        return new ContrivedNode(item, next);
    }

    hasNext() {
        return Boolean(this.next);
    }

    applyToItem(f) {
        f(this.item);
    }
}
