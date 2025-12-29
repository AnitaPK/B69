function displayName(){
    console.log("Happy New Year HARSH")
}

displayName()

function displayNamePara(name){
    console.log("Happy New Year", name)
}
displayNamePara("Harsh")

function displayNameAndWithAge(name,age){
    // return "Hello "+name+". your age is "+age
    return `Hello ${name}. 
    your age is ${age}`
}

console.log(displayNameAndWithAge("Harsh", 23))

strOne = displayNameAndWithAge("Radha",65)

console.log(strOne)