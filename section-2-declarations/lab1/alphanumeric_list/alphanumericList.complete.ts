"use strict";

type Alphanumeric = number | string;

export interface IAlphanumericList {
    item: Alphanumeric;
    next: IAlphanumericList;
}

export default class AlphanumericList implements IAlphanumericList {
    public next: IAlphanumericList;

    constructor(public item: Alphanumeric, next?: AlphanumericList) {
        this.next = next;
    }

    static createAlphanumericList(item: Alphanumeric, next: AlphanumericList): AlphanumericList {
        return new AlphanumericList(item, next);
    }

    public hasNext(): boolean {
        return Boolean(this.next);
    }

    public applyToItem(f: (value: Alphanumeric) => void): void {
        f(this.item);
    }
}
