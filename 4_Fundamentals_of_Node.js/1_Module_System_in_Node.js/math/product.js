function product (...nums) {
  return nums.reduce((curr, acc) => curr * acc)
}

module.exports = product