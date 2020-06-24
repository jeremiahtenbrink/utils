import { Queue } from "./Queue";


/**
 * ## callForEveryNode
 *
 * Calls the callback function for every child node in the element.
 * Implements Queue not recursive function calls.
 *
 * @param {HTMLElement} el
 * @param {(el: HTMLElement | ChildNode ) => void} cb
 */
export function callForEveryNode( el: HTMLElement,
                                  cb: ( el: HTMLElement | ChildNode ) => {} ) {
  
  const queue = new Queue();
  queue.enqueue( el );
  
  while ( !queue.isEmpty() ) {
    const currentEl = queue.dequeue();
    cb( currentEl );
    if ( currentEl.hasChildNodes() ) {
      currentEl.childNodes.forEach( ( child: ChildNode ) => {
        queue.enqueue( child )
      } )
    }
  }
  
}

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
export const getChildNodes = c => {
  console.log( "inside of get next node." );
  const childNodes = [];
  if( c.hasChildNodes() ){
    c.childNodes.forEach( child => {
      childNodes.push( child );
    } );
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
export const getNodesByType = ( c, type ) => {
  const stack = [];
  const toReturn = [];
  stack.push( c );
  while( stack.length > 0 ){
    let node = stack.pop();
    if( node.hasChildNodes() ){
      node.childNodes.forEach( child => {
        stack.push( child );
      } );
    }
    if( node.nodeName === type.toUpperCase() ){
      toReturn.push( node );
    }
  }
  
  return toReturn;
};