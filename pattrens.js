//1. no of rows and col
//2. no of stars in first row
//3. stars increasing or decreasing
//4.no of spaces in first row
//5. spaces increasing or decreasing

for(let i=0;i<5;i++){
    str=""
    for(let j=0;j<5;j++){
        str+=" *"
    }
    console.log(str)
}

//right triangle

ZS

//reverse right triangle
for(let i =0;i<6;i++){
    stars = ""
    for(let j = 0;j<6-i;j++){
        stars +=" *"
    }
    console.log(stars)
}




//Triangle using js
for(let i=0;i<5;i++){
    st = ""
    for(let k=0;k<4-i;k++){
        st+=" "
    }
    for(let j=0;j<1+i;j++){
        st +=" *"
    }
    console.log(st)
}

//triangle diamond

for(let i=0;i<5;i++){
    st = ""
    for(let k=0;k<0+i;k++){
        st+=" "
    }
    for(let j=0;j<5-i;j++){
        st +=" *"
    }
    console.log(st)
}




//recap pattern
for(let i =0;i<5;i++){
    strs =""
    for(let k=0;k<4-i;k++){
        strs+=" "
    }
    for(let j=0;j<1+i;j++){
        strs+=" *"
    }
    console.log(strs)
}