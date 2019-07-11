"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.useForm = function (onSubmit, initialValues) {
    var _a = react_1.useState(__assign({}, initialValues)), values = _a[0], setValues = _a[1];
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setValues(function (prevValues) {
            var _a;
            return (__assign({}, prevValues, (_a = {}, _a[name] = value, _a)));
        });
    };
    var handleSubmit = function (e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        onSubmit(values);
        setValues(__assign({}, initialValues));
    };
    var handleClear = function () {
        setValues(__assign({}, initialValues));
    };
    return [values, handleChange, handleSubmit, handleClear];
};
//# sourceMappingURL=useForm.js.map