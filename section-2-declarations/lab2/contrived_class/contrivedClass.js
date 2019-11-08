"use strict";
exports.__esModule = true;
var ContrivedNode = /** @class */ (function () {
    function ContrivedNode(item, next) {
        this.item = item;
        this.next = next;
    }
    ContrivedNode.createContrivedNode = function (item, next) {
        return new ContrivedNode(item, next);
    };
    ContrivedNode.prototype.hasNext = function () {
        return Boolean(this.next);
    };
    ContrivedNode.prototype.applyToItem = function (f) {
        f(this.item);
    };
    return ContrivedNode;
}());
exports["default"] = ContrivedNode;
