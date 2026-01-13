for (let i=0;i<5;i++){
    let a = setTimeout(function(){
        console.log(i)
        if (i==3){
            clearTimeout(a)
        }
    },2000)
    
}