"use strict";
exports.__esModule = true;
var customer_1 = require("./customer");
var Helpers = require("./utility");
document.getElementById('loadInfo').addEventListener('click', function () {
    var customer = new customer_1.Customer();
    customer.forename = Helpers.getValue('firstName');
    customer.nickname = Helpers.getValue('nickname');
    customer.surname = Helpers.getValue('surname');
});
