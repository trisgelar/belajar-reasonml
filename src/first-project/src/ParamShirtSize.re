type shirtSize = 
    | Small
    | Medium
    | Large
    | XLarge(int);

let mySize : shirtSize = Medium;
let bigSize = XLarge(1);
let veryBigSize = XLarge(3);

let price = (size: shirtSize): float => {
    switch(size){
        | Small => 11.00
        | Medium => 12.50
        | Large => 14.00
        | XLarge(n) => 16.00 +. (float_of_int(n-1) *. 0.50)
    }
}

let stringOfShirtSize = (size: shirtSize): string => {
    switch (size) {
    | Small => "S"
    | Medium => "M"
    | Large => "L"
    | XLarge(n) => String.make(n, 'X') ++ "L"
    };
}
Js.log(price(mySize));
Js.log(price(bigSize));
Js.log(price(veryBigSize));

Js.log(stringOfShirtSize(veryBigSize));

