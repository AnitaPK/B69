// 3. Create a function checkNumber that checks whether a number is: 
//         Positive
//         Negetive
//         Zero


function checkNumber(num){
    if(num > 0){
        return "Positive"
    }else if(num < 0){
        return "Negetive"
    }else{
        return "Zero"
    }
}

console.log(checkNumber(5))
console.log(checkNumber(-5))
console.log(checkNumber(0))

// Create a function findLargest that takes two numbers and return largest number

function findLargest(n1,n2){
    if(n1>n2){
        return "Largest Number " + n1
    }else{
    return "Largest Number " + n2
    }
}

console.log(findLargest(9,5))

userName = "Aditya"

uName = ''

console.log(userName == null ,"______")
console.log(uName == null, "*****") 


// 5. Create a function loginCheck(userName, password) 
//           If username is not empty
//               If password is not empty
//                            Return "Login successful"
//               Else return "Password required"
//          Else return "Username required"

function loginCheck(userName, password){
    if(userName.length > 0){
        return "Login successful"
    }else{
        return "Username required"
    }
}
console.log(loginCheck("","ad123"))

function loginCheck(userName, password){
    if(userName != null){
        if(password != null){
            return "Login successful"
        }else{
            return "Password required"
        }
    }else{
        return "Username required"
    }
}

// Traffic Light System

// Create a function trafficLight(color)
// "red" → "Stop"
// "yellow" → "Get Ready"
// "green" → "Go"
// Default → "Invalid color"

function trafficLight(color){
    switch(color){
        case "red":
            return "stop"
        case "yellow":
            return "Get Ready"
        case "green":
            return "Go"
        default:
            return "Invalid color"
    }
}

console.log(trafficLight("blue"))
console.log(trafficLight("red"))

// User Role Access
// Create a function checkAccess(role)
// "admin" → "Full Access"
// "editor" → "Edit Access"
// "viewer" → "View Only"
// Default → "No Access"
