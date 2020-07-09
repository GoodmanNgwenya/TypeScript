"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./customer");
var Helpers = require("./utility");
var salesRap_1 = require("./salesRap");
var customer = new customer_1.Customer();
var sales = new salesRap_1.SalesRap();
document.getElementById('loadInfo').addEventListener('click', function () {
    customer.forename = Helpers.getValue('forename');
    customer.nickname = Helpers.getValue('nickname');
    customer.surname = Helpers.getValue('surname');
    customer.emailAddress = Helpers.getValue('email');
    customer.role = Helpers.getValue('role');
    customer.dateCreated = new Date();
    customer.firstName();
    customer.fullName();
});
document.getElementById('isLocked').addEventListener('click', function () {
    var element = document.getElementById("loadInfo");
    var checkBox = document.getElementById("isLocked");
    element.disabled = !checkBox.checked;
    checkBox.onclick = function () {
        element.disabled = !checkBox.checked;
        customer.locked = true;
    };
    customer.locked = false;
});
//# sourceMappingURL=main.js.map