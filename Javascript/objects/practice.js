let suraj = {
    name:"suraj",
    rollNo:111,
    age:20,
    fullName:{
        fname:"Suraj",
        lName:"Sharma"
    },
    message:()=>{
        console.log(`${this.name}******`)
        return `Hello ${suraj.name} college has stared`
    }
}
console.log(typeof(suraj))
console.log(suraj)

console.log(suraj.age)

suraj.age = 21
console.log(suraj.age)

suraj.grade = "B"

console.log(suraj)

console.log(suraj["grade"])

// delete suraj.age 

console.log(suraj)


for(let k in suraj){
    console.log(suraj[k],"value")
    console.log(k, "key")
}

arr = [22,44,66,88]

for(let i in arr){
    console.log(i,"index")
    console.log(arr[i],"element")
}

for(let e of arr){
    console.log(e)
}

suraj.address ={
    houseNo:"12HJ",
    city:"planet",
    state:"galaxy"
}

console.log(suraj.address.city)

suraj.address.houseNo = "13hj"


console.log(suraj)

suraj.greet=function(){}

console.log(suraj.message())

console.log()

console.log("-----------------------------------------------")
// JSON -> javascript object notation 
console.log(suraj)
console.log("-----------------------------------------------")

surajSTR = JSON.stringify(suraj)
console.log(surajSTR)

console.log("-----------------------------------------------")


newSuaraj = JSON.parse(surajSTR)
console.log(newSuaraj)


arrStr = JSON.stringify(arr)
console.log(arrStr)
arrNew = JSON.parse(arrStr)

console.log(arrNew)