function child(){
    console.group("I'm Outside")
}

function parent(a){
    console.log("Where are you ?")
    a()

}

parent(child)