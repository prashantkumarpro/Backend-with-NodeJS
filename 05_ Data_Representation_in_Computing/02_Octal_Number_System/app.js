const octalNum = 0o237
// console.log(octalNum) //159

/*
 0o4529 // Octal Number system [0,1,2,3,4,5,6,7]

 7*Math.pow(8,0) = 7
 3*Math.pow(8,1) = 24
 2*Math.pow(8,2) = 128
7+24+128 = 159

*/
// console.log(9+16+320+2048); // 2393

// convet octal to desimal

let octalToDecimal = parseInt('237', 8)
// console.log(octalToDecimal) // 159

const decimalToOctal = 159
// console.log(decimalToOctal.toString(8)) // 237

/*
 | Number System   | Base (Radix) | Digits Used | Example                       |
| --------------- | ------------ | ----------- | ----------------------------- |
| **Decimal**     | 10           | 0–9         | 153, 45.7                     |
| **Binary**      | 2            | 0, 1        | 1011 (which is 11 in decimal) |
| **Octal**       | 8            | 0–7         | 57 (which is 47 in decimal)   |
| **Hexadecimal** | 16           | 0–9, A–F    | 3F (which is 63 in decimal)   |

 
 */

let arr = [7, 3, 2] // 237

function digitsToNum (digits, redix = 10) {
  return digits.reduce(
    (previousValue, currentValue, currentIndex) =>
      previousValue + currentValue * Math.pow(redix, currentIndex),
    0
  )
}
console.log(digitsToNum(arr, 8)) // 159
console.log(digitsToNum(arr)) // 237
