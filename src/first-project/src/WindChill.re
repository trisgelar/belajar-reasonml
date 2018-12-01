let t = 5.0;
let v = 20.0;
let windChill = 13.12 +. (0.6215 *. t) -. (11.37 *. v ** 0.16) +. (0.3965 *. t *. v ** 0.16);


Js.log({j|At temperature $t degrees C and wind speed $v km/hr, \n the wind chill temperature is $windChill|j})