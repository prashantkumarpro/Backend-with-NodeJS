let time = 1

console.log("Hi, I'm your friend Prashant Kumar")
setInterval(() => {
  const displayTime = time < 10 ? '0' + time : time
  console.log(displayTime)
  time++
}, 1000)
