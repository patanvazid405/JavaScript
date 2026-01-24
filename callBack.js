//callBack functions -> setTimeout,setInterval

// setTimeout(function hi(){
//     console.log("hello world")
// },2000)    // -> This is an an callBack function


function one(callback) {
    setTimeout(() => {
        console.log("payment done")
        callback()
    }, 1000)
}

function two() {
    console.log("second")
}
one(two)
