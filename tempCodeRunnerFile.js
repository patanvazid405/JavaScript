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