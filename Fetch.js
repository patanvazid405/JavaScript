// async function data() {
//     await fetch('https://fakestoreapi.com/products/1')
//     .then((res) => res.json())
//     .then((res) => console.log(res))
    
// }

// data()


// async function hi(){
// await fetch('https://fakestoreapi.com/products').then((res) => res.json() )
// }

// hi()
// console.log(fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((res) => console.log(res)))


// // async and await 
// async function Fetch(){
//     let data = await fetch("'https://fakestoreapi.com/products").then((res) => res.json())
//     console.log(data)
// } 
// Fetch()

// async function  getData() { //sync js --> async js
//    let data=await fetch("https://fakestoreapi.com/products")
//    .then(res=>res.json())
//     console.log(data)
// }
// getData()


// let cardsContainer=document.getElementById("cardsContainer")

// async function getData2() {
//   let data =await fetch("https://dummyjson.com/recipes").then((res) =>
//     res.json(),
//   );
//   console.log(data)
//   for ( let i =0;i<data.recipes.length;i++){
//     // console.log(data.products[i])
//     let cardDiv=document.createElement("div")
//     cardDiv.style.backgroundColor="yellow"
//     cardDiv.style.padding="10px"
//     cardDiv.style.margin="10px"
//     cardDiv.style.width="250px"
//     cardDiv.style.height="300px"
//     cardDiv.innerHTML=`
//     <img src="${data.recipes[i].image}" width="100%"/>
//     <h2>${data.recipes[i].name}</h2>
//     <span>${data.recipes[i].rating}</span>
//     `
//     cardsContainer.append(cardDiv)
//   }
// }
// getData2()


async function getData2() {
  let data =await fetch("https://dummyjson.com/recipes").then((res) =>
    res.json());
  console.log(data)
  for(let i=0;i<data.recipes.length;i++){
    console.log(data.recipes[i].name)
  }
}
getData2()