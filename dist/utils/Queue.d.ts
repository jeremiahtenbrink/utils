export declare class Queue extends Object {
    private dll;
    private length;
    constructor();
    getLength(): number;
    isEmpty(): boolean;
    enqueue(item: any): void;
    dequeue(): any;
}
