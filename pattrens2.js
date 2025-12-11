//square
for(let i=0; i<5 ;i++){
    stars=""
    for(let j=0; j<5;j++){
        stars +=" *"
    }
    console.log(stars)
}

// right half pyramid
for(let i=0; i<5 ;i++){
    stars=""
    for(let j=0; j<1+i;j++){
        stars +=" *"
    }
    console.log(stars)
}


//left half pyramid
for(let i=0; i<5 ;i++){
    stars=""
    for(let k=0; k<5-i;k++){
        stars+=" "
    }
    for(let j=0; j<1+i;j++){
        stars +=" *"
    }
    console.log(stars)
}


// left half pyramid
for(let i=0; i<5 ;i++){
    stars=""
    for(let k=0; k<5-(i+1);k++){
        stars+="  "
    }
    for(let j=0; j<1+i;j++){
        stars +=" *"
    }
    console.log(stars)
}
// left half pyramid
for (let i = 0; i < 5; i++) {
    let stars = "";

    // add spaces first (decreasing as i increases)
    for (let j = 0; j < 5 - (i + 1); j++) {
        stars += "  ";   // two spaces for alignment
    }

    // then add stars
    for (let k = 0; k < i + 1; k++) {
        stars += " *";
    }

    console.log(stars);
}

//Diamond
for(let i=0; i<5 ;i++){
    stars=""
    for(let k=0; k<5-(i+1);k++){
        stars+=" "
    }
    for(let j=0; j<1+i;j++){
        stars +=" *"
    }
    console.log(stars)
}
for(let i=0; i<5 ;i++){
    stars=""
    for(let k=0; k<0+i;k++){
        stars+=" "
    }
    for(let j=0; j<5-i;j++){
        stars +=" *"
    }
    console.log(stars)
}


// rhombus
for(let i =0;i<5;i++){
    stars = ""
    for(let k =0;k<0+i;k++){
        stars+=" "
    }
    for(let j = 0;j<5;j++){
        stars+=" *"

    }
    console.log(stars)
}

//Hourglass pattern
for(let i=0;i<4;i++){
    stars =""
    for(let k=0;k<1+i;k++){
        stars+=" "
    }
    for(let j=0;j<4-i;j++){
        stars+=" *"

    }
    console.log(stars)
}
for(let i=0;i<4;i++){
    stars =""
    for(let k=0;k<4-i;k++){
        stars+=" "
    }
    for(let j=0;j<1+i;j++){
        stars+=" *"

    }
    console.log(stars)
}

// square with border
for(let i=0;i<5;i++){
    str =""
    for(let j=0;j<5;j++){
        if (i==0||j==0 || i==4 || j==4){
            str+=" *"
        }
        else{
            str+="  "
        }
    }
    console.log(str)
}

// hourglass pattern
n = 5
for(let i=0;i<n;i++){
    strs =""
    for (let k=0;k<n+i;k++){
        strs+=" "
    }
    for(let j =0;j<n-i;j++){
        if(i==0 || j==0 || i==4 ||j==n-i-1){
            strs+= " *"
        }
        else{
            strs+="  "
        }

    }
    console.log(strs)
}
n=4
for(let i=0;i<n;i++){
    strs =""
    for (let k=0;k<3-i;k++){
        strs+=" "
    }
    for(let j =0;j<1+i;j++){
        if (i==0 || j==0 || i==n-1 || j==1+i-1){
            strs+=" *"
        }
        else{
            strs+="  "
        }

    }
    console.log(strs)
}