"use strict";

export interface IAlphanumericList {
}

export default class AlphanumericList implements IAlphanumericList {
    constructor(item, next) {
        this.item = item;
        this.next = next;
    }

    static createAlphanumericList(item, next) {
        return new AlphanumericList(item, next);
    }

    hasNext() {
        return Boolean(this.next);
    }

    applyToItem(f) {
        f(this.item);
    }
}
