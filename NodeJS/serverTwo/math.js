function addition(a,b){
    return a+b
}
function substraction(a,b){
    return a-b
}
function multiplication(a,b){
    return a*b
}
function division(a,b){
    if(b==0){
        return "can't deivided by ZERO"
    }
    return a/b
}

module.exports ={
    addition,substraction,multiplication,division
}