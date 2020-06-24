/**
 * ## callForEveryNode
 *
 * Calls the callback function for every child node in the element.
 * Implements Queue not recursive function calls.
 *
 * @param {HTMLElement} el
 * @param {(el: HTMLElement | ChildNode ) => void} cb
 */
export declare function callForEveryNode(el: HTMLElement, cb: (el: HTMLElement | ChildNode) => {}): void;
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
export declare const getChildNodes: (c: any) => any[];
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
export declare const getNodesByType: (c: any, type: any) => any[];
