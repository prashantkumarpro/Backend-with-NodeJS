//What is Hexadecimal?

// Hexadecimal is a base-16 number system.
// It uses 16 symbols:

// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F

// A = 10 in decimal

// B = 11

// C = 12

// D = 13

// E = 14

// F = 15

let hexadecimal = 0x843
// console.log(hexadecimal)
// convert hexadecimal to decimal
// 3 * 16^0 = 3
// 4 * 16^1 = 64
// 8 * 16^2 = 32 * 256 = 2048
// 3 + 64 + 2048 = 2115

function hexadecimalToDecimal (digit, redix = 16) {
  return digit.reduce(
    (acc, curr, index) => acc + curr * Math.pow(redix, index),
    0
  )
}
console.log(hexadecimalToDecimal([3, 4, 8]))

// 845A
// A * 16^0 = 10 * 1 = 10
// 5 * 16^1 = 80
// 4 * 16^2 = 4 * 256 = 1024
// 8 * 16^3 = 8 * 256*16 = 32768
// 32768+1024+80+10=33882
console.log(parseInt('0x845A')) // 33882
