let a = 10
// for (a;a<=20;a++){
//     console.log(a)
// }

// reverse 10 to 1
for (a=10;a>=0;a--){
    console.log(a)
}

// print even nums
for (a =0; a<10;a+=2){
    console.log(a)
}

//odd nums
for (a=1;a<=10;a+=2){
    console.log(a)
}

//dosa loop

var chalu = 8
let count = 0

for (i=1;i<=10;i++){
    if (i==2 || i==3){
        continue
    }
    if (count == chalu){
        break
    }
    count +=1
    console.log("eating dosa",i)
}


for (let i=0;i<5;i++){
  stars =""
  for (let j =0; j<1;j++){
    stars+=" *"
  }
  console.log(stars)
}

for (let i=0;i<5;i++){
  stars =""
  for (k =0;k<4-i;k++){
    stars +=" "
  }
  for (let j =0; j<1+i;j++){
    stars+=" *"
  }
  console.log(stars)
}

//FOR OF -> VALUES
let arr = [10, 20, 30];
for (let x of arr) {
  console.log(x);
}
// for in -> index
for (let x in arr) {
  console.log(x);
}








