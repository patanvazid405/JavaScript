//function
function hello(){
    console.log("welcome to JavaScript")
}

hello()

var a = hello()
console.log(a)

function juice(name,ingred = "sugar"){
    console.log(`making ${name} juice with ${ingred}`)
}
juice("watermelon","honey")