// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var Pervasives = require("bs-platform/lib/js/pervasives.js");

var match = true;

var discount = match ? 0.05 : 0.10;

var total = 5 * 14.50;

var afterDiscount = total * (1.0 - discount);

console.log("Price before discount: $", total);

console.log("Price after discount: $", afterDiscount);

console.log("Price before discount: $" + (Pervasives.string_of_float(total) + "."));

console.log("Price after discount: $" + (Pervasives.string_of_float(afterDiscount) + "."));

var qty = 5;

var price = 14.50;

var str = "doorbell";

exports.qty = qty;
exports.price = price;
exports.discount = discount;
exports.total = total;
exports.afterDiscount = afterDiscount;
exports.str = str;
/*  Not a pure module */
