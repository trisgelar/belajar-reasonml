// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var $$String = require("bs-platform/lib/js/string.js");

var bigSize = /* XLarge */[1];

var veryBigSize = /* XLarge */[3];

function price(size) {
  if (typeof size === "number") {
    switch (size) {
      case 0 : 
          return 11.00;
      case 1 : 
          return 12.50;
      case 2 : 
          return 14.00;
      
    }
  } else {
    return 16.00 + (size[0] - 1 | 0) * 0.50;
  }
}

function stringOfShirtSize(size) {
  if (typeof size === "number") {
    switch (size) {
      case 0 : 
          return "S";
      case 1 : 
          return "M";
      case 2 : 
          return "L";
      
    }
  } else {
    return $$String.make(size[0], /* "X" */88) + "L";
  }
}

console.log(price(/* Medium */1));

console.log(price(bigSize));

console.log(price(veryBigSize));

console.log(stringOfShirtSize(veryBigSize));

var mySize = /* Medium */1;

exports.mySize = mySize;
exports.bigSize = bigSize;
exports.veryBigSize = veryBigSize;
exports.price = price;
exports.stringOfShirtSize = stringOfShirtSize;
/*  Not a pure module */
