import { DoublyLinkedList } from "./DoublyLinkedList";
import { LinkedListNode } from "./LinkedListNode";

/**
 * #Stack
 * Simple stack class made with a doubly linked list instead of an array.
 *
 * @property {push} (value: string) => void
 * @property {push} (value: string) => void
 */
class Stack extends Object {
  private dll: DoublyLinkedList = new DoublyLinkedList()
  private size: number = 0;
  
  constructor() {
    super();
    
  }
  
  /**
   * ## Push
   * @typedef {Function} Push
   * function to add items to the stack.
   * @param value
   */
  push( value: any ) {
    const node = new LinkedListNode( value );
    this.dll.addToTail( node );
  }
  
  /**
   * ## Pop
   * @typedef {Function} Pop
   * function to remove items from the top of the stack;
   * @return any
   */
  pop() {
    return this.dll.removeFromTail();
  }
  
}