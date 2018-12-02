type shirtSize =
    | Small
    | Medium
    | Large
    | XLarge;

let mySize : shirtSize = Medium;
let otherSize = Large;
let badSize : shirtSize = Medium;

/* let badSize : shirtSize = M; */

let priceIf = (size: shirtSize) : float => {
    if(size === Small){
        11.00
    }else if (size === Medium){
        12.50
    }else if (size === Large){
        14.00
    }else{
        16.00
    }
};

Js.log(priceIf(mySize));
Js.log(priceIf(otherSize));




