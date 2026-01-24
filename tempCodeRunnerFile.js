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