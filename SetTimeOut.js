console.log("hello")

//setTimeout only one time executes
setTimeout(function hello(){
    console.log("welcome to india")
},6000)

//SetInterval used to break or to stop
let num = 30
a = setInterval(()=>{
    console.log(num)
    num-=1
    if(num==0){
        clearInterval(a)
    }
},2000)

//set Timeout
let a = setTimeout(()=>{ 
    console.log("bomb blast")
},5000)
let inp =prompt("answer 3-2")
if (inp==1){
    clearTimeout(a)
}

let timer = setTimeout(() => {
  console.log("This will not run");
}, 3000);

clearTimeout(timer);


//var is an function scope and let a block scope
for (let i=0;i<5;i++){
    let a = setTimeout(function(){
        console.log(i)
        if (i==3){
            clearTimeout(a)
        }
    },2000)
    
}

