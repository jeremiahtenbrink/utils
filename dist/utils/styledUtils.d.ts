/**
 *## onPropVal
 *
 * Pass in the key of the props values that you want returned once its time
 * for styled to be generated. The return value or function that gets
 * invoked will change with the props of the component.
 * @param {string} key key of the components prop whos value is requested
 * @return {OnPropValReturn}
 */
export declare const onPropVal: (key: string) => OnPropValReturn;
/**
 * ## OnPropValReturn
 * @typedef OnPropValReturn
 * @param {string[]} args
 * @param {any[]} funcs
 */
export declare type OnPropValReturn = (args: string[], ...funcs: any[]) => {};
/**
 * @typedef OnPropValReturnReturn
 * @param {object} props
 * @return {OnPropValReturnReturn}
 */
export declare type OnPropValReturnReturn = (props: {}) => OnPropValReturnReturn;
export declare type OnPropValueReturnReturnReturn = Function | string | number | void;
export declare const onThemeValue: (key: any) => (args: any, ...funcs: any[]) => (props: any) => any;
