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
/**
 * ## Custom Hook
 * Call useForm to handle all state changes for any form. Returns an array.
 * Index 0 is the values from the form. Index 1 is a object containing all
 * the functions to interact with the form inputs.
 *
 * @param onSubmit - `onSubmit` - Callback function to be called once the
 * form is submitted.
 * @param formDefaultValues - `formDefaultValues` - Object containing the
 * default values of the form.
 * @param formValidate - `formValidate` - Callback function for validating
 * the forms values.
 *
 * @return - Form values is a object with key value pairs. Keys being the
 * input names and values being the value of the users input. The
 * HandleFunctions object is a object containing the functions change,
 * submit, and clear.
 */
exports.useForm = function (onSubmit, formDefaultValues, formValidate) {
    var defaultValues = react_1.useState(formDefaultValues)[0];
    var _a = react_1.useState(function () {
        var valuesToBe = {};
        if (Object.keys(formDefaultValues).length > 0) {
            Object.keys(formDefaultValues).map(function (key) {
                valuesToBe[key] = { value: formDefaultValues[key], error: null };
            });
            return valuesToBe;
        }
        return {};
    }), values = _a[0], setValues = _a[1];
    var change = function (e) {
        var _a;
        if (e.target.type === "checkbox") {
            var _b = e.target, name_1 = _b.name, checked = _b.checked;
            var error_1 = validate(name_1, checked);
            setValues(__assign({}, values, (_a = {}, _a[name_1] = { value: checked, error: error_1 }, _a)));
            return;
        }
        var _c = e.target, name = _c.name, value = _c.value;
        var error = validate(name, value);
        setValues(function (prevValues) {
            var _a;
            return (__assign({}, prevValues, (_a = {}, _a[name] = { value: value, error: error }, _a)));
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
    var validate = function (name, value) {
        if (formValidate) {
            var error = formValidate(name, value);
            if (error) {
                if (typeof error !== "string") {
                    throw Error("FormValidate must return a string.");
                }
                return error;
            }
        }
        return '';
    };
    return [values, { change: change, submit: submit, clear: clear }];
};
//# sourceMappingURL=useForm.js.map