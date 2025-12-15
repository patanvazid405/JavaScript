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

//arrow function

let nme = () =>{
    console.log("hello world")
}
nme()

//IIFE - Immediately Invoked Function Expression
(function (){
    console.log("IIFE executed")
})
()

//genartor function
function* gen(){
    yield 'hello'
    yield 'world'
}

let person = gen()
console.log(person.next().value)
console.log(person.next().value)


function *food(){
    yield "Biriyani"
    yield "Starters"
    yield "Ice Cream"
    yield "Pan"
}

let per = food()
console.log(per.next().value)
console.log(per.next().value)
console.log(per.next().value)
console.log(per.next().value)
console.log(per.next().value)
console.log(per.next().value)

//callback() function   -- higherorderfun parent( )

function child(){
    console.group("I'm Outside")
}

function parent(a){
    console.log("Where are you ?")
    a()

}

parent(child)



