/* String */
/* https://reasonml.github.io/api/String.html */

let greeting = "Hello World"
let multilineGreeting = "Hello
    world"

let oneSlash = "\\"
let greeting = "Hello " ++ "world!"

/* Quoted String */
let greetingAndOneSlash = {|Hello
    World
    \
    He
|}

let world = {js|世界|js}; /* Supports Unicode characters */
let helloWorld = {j|你好，$world|j}; /* Supports Unicode and interpolation variables */

let firstLetterOfAlphabet = 'a';