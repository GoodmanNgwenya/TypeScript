"use strict";
exports.__esModule = true;
exports.logger = exports.getValue = void 0;
function getInputValue(elementID) {
    var inputElement = document.getElementById(elementID);
    return inputElement.value;
}
exports.getValue = getInputValue;
function logger(message) {
    console.log(message);
}
exports.logger = logger;
