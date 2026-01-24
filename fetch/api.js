// console.log("hello welcome to hyderabad")

let parentDiv = document.getElementById("cardsContainer")
async function getData(){
    let data = await fetch("https://dummyjson.com/recipes")
    .then((res) => res.json())
    console.log(data)
    for(let i=0;i<data.recipes.length;i++){
        console.log(data.recipes[i].name)


    
    let cDiv = document.createElement("div")

    cDiv.style.height ="380px" 
    cDiv.style.width = "280px"
    cDiv.style.margin = "15px"
    cDiv.style.backgroundColor ="yellow"
    cDiv.innerHTML = ` 
            <img src="${data.recipes[i].image}" width="100%" height="70%"/>
             <center><h2>${data.recipes[i].name}</h2><center>
            <span>${data.recipes[i].rating}</span>
            `
    parentDiv.append(cDiv)
    }



}
getData()