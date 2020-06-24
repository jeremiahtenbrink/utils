"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onThemeValue = exports.onPropVal = void 0;
/**
 *## onPropVal
 *
 * Pass in the key of the props values that you want returned once its time
 * for styled to be generated. The return value or function that gets
 * invoked will change with the props of the component.
 * @param {string} key key of the components prop whos value is requested
 * @return {OnPropValReturn}
 */
exports.onPropVal = function (key) {
    /**
     * @typedef OnPropValReturn
     * @param {string[]} args
     * @param {any[]} funcs
     * @return {OnPropValReturnReturn}
     */
    return function (args) {
        var funcs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            funcs[_i - 1] = arguments[_i];
        }
        var values = { key: key };
        mapKeyValuePairs(args, funcs, values);
        /**
         * ##OnPropValReturnReturn
         * Return function of onPropVal, styled components should invoke this
         * function passing in the components props.
         *
         * @typedef OnPropValReturnReturn
         * @param {object} props
         * @return {OnPropValueReturnReturnReturn}
         */
        return function (props) {
            if (key in props) {
                var propsValue = props[key];
                if (propsValue in values) {
                    propsValue = values[propsValue];
                    if (typeof propsValue === "function") {
                        return propsValue(props);
                    }
                    else {
                        return propsValue;
                    }
                }
            }
            else {
                console.warn("The theme props doesn't seem to have your desired key");
                console.warn("key: ", key);
            }
        };
    };
};
exports.onThemeValue = function (key) { return function (args) {
    var funcs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        funcs[_i - 1] = arguments[_i];
    }
    var values = { key: key };
    mapKeyValuePairs(args, funcs, values);
    return function (props) {
        var theme = props.theme;
        if (theme) {
            if (key in theme) {
                var themeVal = theme[key];
                if (themeVal in values) {
                    if (typeof values[themeVal] === "function") {
                        return values[themeVal](props);
                    }
                    else {
                        return values[themeVal];
                    }
                }
            }
            else {
                console.warn("Theme doesn't seem to have your key");
                console.warn("key: ", key);
            }
        }
    };
}; };
/**
 * ## MapKeyValuePairs
 *
 * attempts to map the key to the value or to a function that was asigned to
 * that key in the template literal.
 *
 *
 * @param {string[]} args
 * @param  {Function[]} funcs
 * @param storage
 */
var mapKeyValuePairs = function (args, funcs, storage) {
    // loop through each string array
    args.forEach(function (key) {
        // split the string up by the colun; Always seperates the key from the
        // value in css.
        var split = key.split(":");
        // check if there are two two values after splitting.
        if (split.length !== 2) {
            return;
        }
        // array to hold all the components styles.
        var keyValuePairs = [];
        // loop over each plit apart word. Checking for none alpha numeric
        // characters and remove them if found.
        split.some(function (word) {
            var returnedString = stripChar(word);
            if (returnedString !== "") {
                keyValuePairs.push(returnedString);
            }
        });
        if (keyValuePairs.length === 2) {
            storage[keyValuePairs[0]] = keyValuePairs[1];
        }
        else if (keyValuePairs.length === 1) {
            storage[keyValuePairs[0]] = funcs.shift();
        }
    });
};
/**
 * $$ StripChar
 *
 * Takes in a string and removes all characters except for the ones
 * associated with string values;
 *
 * @param {string} str
 * @return {string} strippedString
 */
var stripChar = function (str) {
    var strArray = str.split("");
    var strippedString = "";
    var started = false;
    strArray.some(function (letter) {
        if (letter.match(/^[A-Za-z_]+$/)) {
            if (!started) {
                started = true;
            }
            strippedString += letter;
        }
        else {
            if (started) {
                return true;
            }
        }
    });
    return strippedString;
};
//# sourceMappingURL=styledUtils.js.map