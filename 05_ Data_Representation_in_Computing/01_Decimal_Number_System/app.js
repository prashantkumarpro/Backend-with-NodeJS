const digitList = [2, 4, 6, 5]
// 5 Thousand 6 Hundred 4 tens 2 ones
// 2 * 1 + 4 * 10 + 6 * 100 + 5 * 1000

// const obj = { unit: 1, tens: 10, hundred: 100, thousand: 1000 }
// const { unit, tens, hundred, thousand } = obj

// const [thousandth, hundredth, tenth, oneth] = [
//   digitList[3] * thousand,
//   digitList[2] * hundred,
//   digitList[1] * tens,
//   [0] * unit
// ]

// console.log(thousandth + hundredth + tenth + oneth)

// function digitsToNumber (digits) {
//   return digits
//     .map((num, i) => {
//       return num * Math.pow(10, i)
//     })
//     .reduce((initialVal, currentVal) => {
//       return initialVal + currentVal
//     }, 0)
// }
// // let total = 0
// // for (let i = 0; i < digitList.length; i++) {
// //   //   console.log(digitList[i] * Math.pow(10, i))
// //   total += digitList[i] * Math.pow(10, i)
// // }

// console.log(digitsToNumber([2, 6, 4, 2]))

let x, y

