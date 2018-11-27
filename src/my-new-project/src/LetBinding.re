/* Let Binding atau Deklarasi Variabel */

let greeting = "Wilujeung Tepang";
let nilai = 45;
let nilaiRemed = 60;

/* Block Scope */
if(nilai < 60){
    let pesan = "Di Remedial biar Lumayan"
    print_endline(pesan)
};

/* Let is immutable */
let pesan = "Hayu kita Remedial"
print_endline(pesan)

let pesan = "Mending kalau Nilainya Bagus "
print_endline(pesan)

/* Anonymous Scope */
let pesan = {
    let part1 = "Pagi-pagi"
    let part2 = "Malas Mandi"
    part1 ++ " " ++ part2
};

print_endline(pesan)

