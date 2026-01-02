arr1 = []

console.log(typeof(arr1))     // object

console.log(arr1)         // []

fruits = ["Apple"]

console.log(fruits.length)    // 1

console.log(fruits)           // ["Apple"]

fruits[1] = "Cherry"
 
console.log(fruits)           // ["Apple", "Cherry"]

// fruits[6] = 'Mango' 
// console.log(fruits)           
// console.log(fruits.length)    

fruits.push("Mango")

console.log(fruits)           
console.log(fruits.length)  

fruits.unshift("Banana")
console.log(fruits)     

fruits.pop()
console.log(fruits)     

fruits.shift()
console.log(fruits)     

// slice    return subarray 
//splice    
fruits.push("Mango")
fruits.unshift("Banana")
console.log(fruits)     


console.log("slice", fruits.slice(2,3))

console.log(fruits)     

fruits.splice(2,1,"Chickoo", "Pinnaple")

console.log(fruits)     
//includes indexOf   for   for of


console.log(fruits.includes("mango"))
console.log(fruits.indexOf("mango"))

index = fruits.indexOf("Mango")


if(index == -1){
    console.log("Fruit not available")
}else{
    console.log("Add to cart")
}

suraj = [46,75,68,36]
sum = 0
for(i=0; i<suraj.length; i++){
    sum = sum + suraj[i]     //    sum +=suraj[i]
}

console.log(sum)

avg = sum / suraj.length 

console.log(avg)

for(let fruit of fruits){
    console.log("I like to eat" , fruit)
}
