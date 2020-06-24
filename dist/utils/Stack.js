"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DoublyLinkedList_1 = require("./DoublyLinkedList");
var LinkedListNode_1 = require("./LinkedListNode");
/**
 * #Stack
 * Simple stack class made with a doubly linked list instead of an array.
 *
 * @property {push} (value: string) => void
 * @property {push} (value: string) => void
 */
var Stack = /** @class */ (function (_super) {
    __extends(Stack, _super);
    function Stack() {
        var _this = _super.call(this) || this;
        _this.dll = new DoublyLinkedList_1.DoublyLinkedList();
        _this.size = 0;
        return _this;
    }
    /**
     * ## Push
     * @typedef {Function} Push
     * function to add items to the stack.
     * @param value
     */
    Stack.prototype.push = function (value) {
        var node = new LinkedListNode_1.LinkedListNode(value);
        this.dll.addToTail(node);
    };
    /**
     * ## Pop
     * @typedef {Function} Pop
     * function to remove items from the top of the stack;
     * @return any
     */
    Stack.prototype.pop = function () {
        return this.dll.removeFromTail();
    };
    return Stack;
}(Object));
//# sourceMappingURL=Stack.js.map