type shirtSize = 
    | Small
    | Medium
    | Large
    | XLarge;

let mySize : shirtSize = Medium;
let otherSize = Large;
let badSize : shirtSize = Medium;

let price = (size: shirtSize): float => {
    switch (size) {
    | Small => 11.00
    | Medium => 12.50
    | Large => 14.00
    | XLarge => 16.00
    };
}

Js.log(price(mySize));
Js.log(price(otherSize));

let stringOfShirtSize = (size: shirtSize): string => {
    switch(size){
        | Small => "S"
        | Medium => "M"
        | Large => "L"
        | XLarge => "XL"
        | _ => "M"
    }
}

Js.log(stringOfShirtSize(mySize));
Js.log2("Size is", mySize);
