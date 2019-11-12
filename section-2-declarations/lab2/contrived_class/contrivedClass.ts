"use strict";

export interface IContrivedNode {
}

export default class ContrivedNode implements IContrivedNode {
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
