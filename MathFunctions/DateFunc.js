const today = new Date()
console.log(today)
console.log(today.getHours())
console.log(today.getFullYear())
console.log(today.getMonth()+1)
console.log(today.getMinutes())
console.log(today.getHours())

//IST time code

const newDate = new Date(today.getTime()+(330*60000))
const Ind = newDate.getHours()+":"+newDate.getMinutes()
console.log(Ind)