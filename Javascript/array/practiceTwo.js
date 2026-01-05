numArray = [10,20,30,40]

console.log(numArray.length)  //lenght of array

indexCount = numArray.length

for (i=0; i<indexCount; i++){
    console.log("index number", i)
    console.log(numArray[i])
}

numArray.forEach((elmt,i)=>console.log(elmt, i))

numArray.forEach((e,index)=>{
    console.log(index)
    console.log(e)
})


// const fName = ()=>{}

numArray.map((e)=>console.log(e*e))

numArray2 = [25,625,1024]

// find sqaureroot of each number 
numArray2.map((num,i)=>console.log(Math.sqrt(num)))

// add 10 in every number 

for(i=0;i<numArray2.length;i++){
    console.log(numArray2[i]+10)
}

numArray2.map((v,i)=>console.log(v+10))

// double every number 
numArray3 = [34,87,53,19]

numArray3.map((v,i)=>console.log(v*2))

doubleArray3 = []
console.log(doubleArray3)

for(i=0;i<numArray3.length;i++){
    doubleArray3.push(numArray3[i]*2)
}

console.log(doubleArray3)

doubleArray33 = numArray3.map((v)=>v*2)
console.log(doubleArray33)

doubleArray333 = numArray3.map((v)=>{
   return v*2
})
console.log(doubleArray333)

strArray = ["prasad", 'ramesh','kiran']

strArrayUpperCase = strArray.map((v)=>v.toUpperCase())

console.log(strArrayUpperCase)

str = 'Rahul'
console.log(str)

strArray.map((v)=>{
    console.log("Happy new year ", v)
})

// find reduce some 
console.log(numArray3,"numArray3")
greater50 =  numArray3.find((v)=> v==50)

console.log(greater50,"greater50")


grater5050 = numArray3.filter((v)=> v>50)
console.log(grater5050)



numArray4 = [2,4,6,8]
console.log(numArray4.reduce((fV,cV)=>fV+cV))


// indexOf  includes find filter reduce map 

console.log(numArray4.some((v)=> v<0))


