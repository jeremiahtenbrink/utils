import { DoublyLinkedList } from "./DoublyLinkedList";

export class Queue extends Object {
  private dll = new DoublyLinkedList();
  private length = 0;
  
  constructor() {
    super();
  }
  
  getLength() {
    return ( this.length );
  }

  isEmpty() {
    return ( this.length == 0 );
  }

  enqueue( item: any ) {
    this.dll.addToTail( item );
    this.length += 1;
  }

  dequeue() {
    
    if ( this.length === 0 ) {
      return undefined;
    }
    const value = this.dll.removeFromHead();
    
    this.length -= 1;
    
    return value;
    
  }
  
}
