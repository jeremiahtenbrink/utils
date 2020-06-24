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
exports.DoublyLinkedList = void 0;
var LinkedListNode_1 = require("./LinkedListNode");
var DoublyLinkedList = /** @class */ (function (_super) {
    __extends(DoublyLinkedList, _super);
    function DoublyLinkedList() {
        var _this = _super.call(this) || this;
        _this.head = null;
        _this.tail = null;
        return _this;
    }
    DoublyLinkedList.prototype.addToHead = function (value) {
        var node = new LinkedListNode_1.LinkedListNode(value);
        node.prev = this.head;
        this.head = node;
    };
    DoublyLinkedList.prototype.addToTail = function (value) {
        var node = new LinkedListNode_1.LinkedListNode(value);
        node.next = this.tail;
        if (this.tail) {
            this.tail.prev = node;
        }
        this.tail = node;
    };
    DoublyLinkedList.prototype.removeFromHead = function () {
        // check for head
        if (!this.head) {
            return false;
        }
        else {
            //get value of head
            var value = this.head.value;
            // check for next in line
            if (this.head.prev) {
                // set next in line to the head
                this.head = this.head.prev;
                // remove ref to current head
                this.head.next = null;
            }
            else {
                //if there is nothing behind the head
                this.head = null;
                this.tail = null;
            }
            // return value of head
            return value;
        }
    };
    DoublyLinkedList.prototype.removeFromTail = function () {
        if (!this.tail) {
            return false;
        }
        var value = this.tail.value;
        //check for stuff in front of tail
        if (this.tail.next) {
            // set next in line to the new tail
            var oldTail = this.tail;
            this.tail = oldTail.next;
            // remove link to old tail
            this.tail.prev = null;
            oldTail.next = null;
        }
        else {
            // there is no next
            this.tail = null;
            this.head = null;
        }
        return value;
    };
    return DoublyLinkedList;
}(Object));
exports.DoublyLinkedList = DoublyLinkedList;
//# sourceMappingURL=DoublyLinkedList.js.map