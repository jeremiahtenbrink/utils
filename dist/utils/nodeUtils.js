"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNodesByType = exports.getChildNodes = exports.callForEveryNode = void 0;
var Queue_1 = require("./Queue");
/**
 * ## callForEveryNode
 *
 * Calls the callback function for every child node in the element.
 * Implements Queue not recursive function calls.
 *
 * @param {HTMLElement} el
 * @param {(el: HTMLElement | ChildNode ) => void} cb
 */
function callForEveryNode(el, cb) {
    var queue = new Queue_1.Queue();
    queue.enqueue(el);
    while (!queue.isEmpty()) {
        var currentEl = queue.dequeue();
        cb(currentEl);
        if (currentEl.hasChildNodes()) {
            currentEl.childNodes.forEach(function (child) {
                queue.enqueue(child);
            });
        }
    }
}
exports.callForEveryNode = callForEveryNode;
/**
 * Get Child Nodes
 * @category Utilities
 *
 * @description Gets all the child nodes from a HtmlElment for react testing
 * library.
 *
 * @param {HTMLElement} c
 * @return {HTMLElement[]}
 */
exports.getChildNodes = function (c) {
    console.log("inside of get next node.");
    var childNodes = [];
    if (c.hasChildNodes()) {
        c.childNodes.forEach(function (child) {
            childNodes.push(child);
        });
    }
    return childNodes;
};
/**
 * Get Nodes By Node Type
 * @category Utilities
 *
 * @description Returns all the child HtmlElements that are of the requested
 * type.
 *
 * @param {HTMLElement} c
 * @param {string} type
 * @return {HTMLElement[]}
 */
exports.getNodesByType = function (c, type) {
    var stack = [];
    var toReturn = [];
    stack.push(c);
    while (stack.length > 0) {
        var node = stack.pop();
        if (node.hasChildNodes()) {
            node.childNodes.forEach(function (child) {
                stack.push(child);
            });
        }
        if (node.nodeName === type.toUpperCase()) {
            toReturn.push(node);
        }
    }
    return toReturn;
};
//# sourceMappingURL=nodeUtils.js.map