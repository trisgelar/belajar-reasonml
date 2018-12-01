/* https://bucklescript.github.io/bucklescript/api/Js.String.html */
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String */
let qty = 5;
let price = 14.50;

/* let discount = 
    if (qty < 10){
        0.05;
    } else {
        0.10;
    }; */

let discount = (qty < 10) ? 0.05 : 0.10;

let total = float_of_int(qty) *. price;
let afterDiscount = total *. (1.0 -. discount);

Js.log2("Price before discount: $", total);
Js.log2("Price after discount: $", afterDiscount);

let str = "door" ++ "bell";
Js.log("Price before discount: $" ++ string_of_float(total) ++ ".");
Js.log("Price after discount: $" ++ string_of_float(afterDiscount) ++ ".");

