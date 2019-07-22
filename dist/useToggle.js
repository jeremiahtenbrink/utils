"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.useToggle = function (initialState) {
    if (initialState === void 0) { initialState = false; }
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    var toggleState = function () {
        setState(function (prev) { return !prev; });
    };
    return [state, toggleState];
};
//# sourceMappingURL=useToggle.js.map