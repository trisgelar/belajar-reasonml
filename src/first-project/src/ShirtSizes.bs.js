// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';


function price(size) {
  switch (size) {
    case 0 : 
        return 11.00;
    case 1 : 
        return 12.50;
    case 2 : 
        return 14.00;
    case 3 : 
        return 16.00;
    
  }
}

console.log(price(/* Medium */1));

console.log(price(/* Large */2));

function stringOfShirtSize(size) {
  switch (size) {
    case 0 : 
        return "S";
    case 1 : 
        return "M";
    case 2 : 
        return "L";
    case 3 : 
        return "XL";
    
  }
}

console.log(stringOfShirtSize(/* Medium */1));

console.log("Size is", /* Medium */1);

var mySize = /* Medium */1;

var otherSize = /* Large */2;

var badSize = /* Medium */1;

exports.mySize = mySize;
exports.otherSize = otherSize;
exports.badSize = badSize;
exports.price = price;
exports.stringOfShirtSize = stringOfShirtSize;
/*  Not a pure module */
