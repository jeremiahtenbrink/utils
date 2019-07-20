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
exports.useForm = function (onSubmit, formDefaultValues) {
    if (formDefaultValues === void 0) { formDefaultValues = {}; }
    var _a = react_1.useState(formDefaultValues), defaultValues = _a[0], setDefaultValues = _a[1];
    var _b = react_1.useState(formDefaultValues), values = _b[0], setValues = _b[1];
    var change = function (e) {
        var _a, _b;
        if (e.target.type === "checkbox") {
            var _c = e.target, name_1 = _c.name, checked = _c.checked;
            if (!defaultValues[name_1]) {
                setDefaultValues(__assign({}, defaultValues, (_a = {}, _a[name_1] = false, _a)));
            }
            setValues(__assign({}, values, (_b = {}, _b[name_1] = checked, _b)));
            return;
        }
        var _d = e.target, name = _d.name, value = _d.value;
        setValues(function (prevValues) {
            var _a;
            return (__assign({}, prevValues, (_a = {}, _a[name] = value, _a)));
        });
    };
    var submit = function (e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        onSubmit(values);
        setValues(defaultValues);
    };
    var clear = function () {
        setValues(defaultValues);
    };
    return [values, { change: change, submit: submit, clear: clear }];
};
//# sourceMappingURL=useForm.js.map