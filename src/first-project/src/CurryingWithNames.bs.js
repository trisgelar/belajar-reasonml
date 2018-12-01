// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");

function payment(principal, apr, $staropt$star, param) {
  var years = $staropt$star !== undefined ? $staropt$star : 30;
  var r = apr / 12.0 / 100.0;
  var n = Caml_int32.imul(years, 12);
  var powerTerm = Math.pow(1.0 + r, n);
  return principal * (r * powerTerm) / (powerTerm - 1.0);
}

function usPayment(param) {
  return (function (param$1) {
      var partial_arg = 30;
      return (function (param$2) {
          var param$3 = param$1;
          var param$4 = partial_arg;
          var param$5 = param$2;
          return payment(param, param$3, param$4, param$5);
        });
    });
}

function ukPayment(param) {
  return (function (param$1) {
      var partial_arg = 25;
      return (function (param$2) {
          var param$3 = param$1;
          var param$4 = partial_arg;
          var param$5 = param$2;
          return payment(param, param$3, param$4, param$5);
        });
    });
}

function dePayment(param) {
  return (function (param$1) {
      var partial_arg = 20;
      return (function (param$2) {
          var param$3 = param$1;
          var param$4 = partial_arg;
          var param$5 = param$2;
          return payment(param, param$3, param$4, param$5);
        });
    });
}

function toFixed(prim, prim$1) {
  return prim.toFixed(prim$1);
}

console.log("US: $", Curry._1(usPayment(10000.0)(5.0), /* () */0).toFixed(2));

console.log("UK: p", Curry._1(ukPayment(10000.0)(5.0), /* () */0).toFixed(2));

console.log("DE: d", Curry._1(dePayment(10000.0)(5.0), /* () */0).toFixed(2));

exports.payment = payment;
exports.usPayment = usPayment;
exports.ukPayment = ukPayment;
exports.dePayment = dePayment;
exports.toFixed = toFixed;
/*  Not a pure module */