let n = 5
for(let i=0;i<=n;i++){
    console.log(i)
}

let newArray = [2,5,7,9]
let maj = newArray.length/2
for(let i = 0; i < newArray.length; i++){
    if (i >= maj){
        console.log(newArray[i])
    }
    
}

let neww = [2,5,2,1,1,2]
let sett = {}

for ( let i of neww){
  if (sett[i]){
      sett[i]+=1
  }
  else{
    sett[i] =1
  }
}

for ( let key in sett){
  if(sett[key] > 1){
    console.log(key,sett[key])
  }
}



//Plaindrome
let nam = "racear"

let ne = ""

for (let i = nam.length -1 ; i>=0 ;i--){
    ne+=nam[i]
}

if (nam == ne){
  console.log("Its a palindrome")
}
else{
  console.log("Its not a Palindrome")
}

//Prime Num



function PrimeNum(n) {
  if (n <= 1) {
    console.log("Not a Prime Number");
    return;
  }

  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      console.log("Not a Prime Number");
      return; // exit early
    }
  }

  console.log("Prime Number");
}

PrimeNum(5);