let details = {
    name :"vazid",
    age  : 23,
    clg  : "MGR",
    city : "Nellore"
};

//access using dot notation
console.log(details.age)

//access using bracket notation
console.log(details["city"])

//update
details.name = "shahul"
details["age"]+=1
console.log(details)

delete details.city

console.log(details)


//nested objects
let person = {
    chintu :{
        followers:{
            indian:{
                telugu: "20M"
            }
        }
    }
} 
console.log(person.chintu.followers.indian.telugu)

//looping in objects

let keys = []
let values = []
for (let key in details){
    console.log(key)
    keys.push(key)
    values.push(details[key])

}
console.log(keys)
console.log(values)