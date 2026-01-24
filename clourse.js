// closures - >is a function binding lexical scope and function 

function x(){
    var a = 10
    function y(){
        console.log(a)
    }
    a= 14
    return y()
}

x()

