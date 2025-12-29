let user = "Harsh"
console.log(user)
city = 'Pune'

description = `dfg rtyui ghjk yui ghjkl
yuio hjkl; yuikolp
hjkl;   
`

sentGreet = "Happy New Year "+ user+ " ." +city

console.log(sentGreet)

sentgreet1 = `Tommarow is not holiday come on time ; will celebrate 
                Christmas ${user}`

console.log(sentgreet1)

console.log(typeof(sentgreet1),"**** typeOf *****")

fName = "radhey"
lName = "Patil"

fullName = fName+" "+lName
console.log(fullName)
console.log(fName.concat(" ",lName))

console.log(fName.toUpperCase(), "In upper case")

console.log(fName.concat(" ", lName).toUpperCase())

// toLowerCase() 

console.log(fName.charAt(0))
console.log(fName.charAt(1))

console.log(fName.length)
// Question 

// console.log((fName.concat(" ", lName)).toUpperCase())

// fullName1 = fName.charAt(0).toUpperCase()+

// .indexOf(), .lastIndexOf(), .includes(), .startsWith(), .endsWith().
const companyName = "Wisdom Sprouts"
console.log(companyName)



index = companyName.indexOf("sprouts")

if(index == -1){
console.log("NOT INCLUIDED")
}else{
    console.log("INCLUDED")
}


str = 'The only way to do great work is to love what you do. — Steve Jobs'

console.log(str.lastIndexOf('Jobs'),"*******")

console.log(str.includes("Only"))

if(!str.includes('Jobs')){
    console.log("No")
}


console.log(str.startsWith("The"))

// endsWith()
// .replace() and .replaceAll().

str1 = "Hello HTML HTML HtML HTML"
console.log(str1,"before")
str2 = str1.replace("HTML", "JAVASCRIPT")
console.log(str2,"after replace")

str3 = str1.replaceAll("HTML","JAVASCRIPT")
console.log(str3,"after replaceALL")

// .trim(), .trimStart(), .trimEnd().

str5 = "             Hello Batch69            "

console.log(str5.length, 'length')
console.log(str5.trimStart(), str5.trimStart().length, "trim start ")
console.log(str5.trim().length)