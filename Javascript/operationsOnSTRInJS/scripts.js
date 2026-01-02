function toCapitalise() {
  // console.log("******clicked****")

  paragraph = document.getElementById("floatingTextarea2").value;

  // console.log(paragraph)

  paraInUpperCase = paragraph.toUpperCase();

  // console.log(paraInUpperCase)

  document.getElementById("result").innerHTML = paraInUpperCase;
}

const inputElmt = document.getElementById("floatingTextarea2");
const resultElmt = document.getElementById("result");

function countVowels() {
  paragraph = inputElmt.value;
    
  count = 0;
  for (i = 0; i < paragraph.length; i++) {
    if (
      paragraph[i] == "a" ||
      paragraph[i] == "e" ||
      paragraph[i] == "i" ||
      paragraph[i] == "o" ||
      paragraph[i] == "u" ||
      paragraph[i] == "A" ||
      paragraph[i] == "E" ||
      paragraph[i] == "I" ||
      paragraph[i] == "O" ||
      paragraph[i] == "U"
    ) {
      count++;
    }
  }

  resultElmt.innerHTML = "Count of vowels : "+ count;

//   vowels = "aeiouAEIOU"
// for(i=0;i<paragraph.length;i++){
//      if(vowels.includes(paragraph[i])){
//          count++
//      }
// }
}


// spaces replace with hyphens//

function replacewithhyphens()
{
    paragraph = document.getElementById("floatingTextarea2").value

        console.log(paragraph)
      Text= paragraph.replaceAll(" ", "-");
      console.log(Text)
    
    document.getElementById("result").innerHTML = Text
}


// Count spaces

function countSpaces() {
    let count = 0;
     paragraph = document.getElementById("floatingTextarea2").value

    for (let i = 0; i < paragraph.length; i++) {
        if (paragraph[i] === " ") {
            count++;
        } else {
            
        }
    }
    document.getElementById("result").innerHTML = "Count of Spaces : "+ count;
}


function countWords() {
     paragraph = document.getElementById("floatingTextarea2").value

    let count = 0
    for (let i = 0; i < paragraph.length; i++) {
        if (paragraph[i] == " ")
            count++
    }
    document.getElementById("result").innerHTML = 'total words are: ' + (count + 1)
}


function convertSmall(){
    paragraph = inputElmt.value;

    paraInSmall = paragraph.toLowerCase();

    resultElmt.innerHTML = paraInSmall;
}

function countNewLines(){
    paragraph = inputElmt.value;

    count = 0;
    for(i = 0; i < paragraph.length; i++){
        if(paragraph[i] == "\n"){
            count++;
        }
    }
    resultElmt.innerHTML = "Count of new lines : " + count;
}

function toTitleCase() {
    paragraph = inputElmt.value;

  let result = "";
  let capitalizeNext = true;

  for (let i = 0; i < paragraph.length; i++) {
    let char = paragraph[i];

    if (capitalizeNext && char !== " ") {
      result = result + char.toUpperCase();
      capitalizeNext = false;
    } else {
      result = result + char.toLowerCase();
    }

    if (char === " ") {
      capitalizeNext = true;
    }
  }

   resultElmt.innerHTML =  result;
}

function convertTitleCase() {
    

      let paragraph = document.getElementById("floatingTextarea2").value;
      let words = paragraph.toLowerCase().split(" ");
      let titleCase = "";

      for (let i = 0; i < words.length; i++) {
        titleCase +=
          words[i].charAt(0).toUpperCase() +
          words[i].slice(1) + " ";
      }

      document.getElementById("result").innerHTML = titleCase.trim();
    }

function countConsonests() {
    var str = document.getElementById("floatingTextarea2").value

    let count = 0;

    let str2 = str.replaceAll(" ", "")
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" || str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U") {
            count++
        }

    }
    let countCon = str2.length - count
    document.getElementById("result").innerHTML = 'total Count of consonests: ' + countCon
}

function extractFirstWord(){


 paragraph = document.getElementById("floatingTextarea2").value

 firstWord = paragraph.split(" ")[0];

document.getElementById("result").innerHTML = firstWord 

}


const  reverseTheChars = () =>{
 str = document.getElementById("floatingTextarea2").value
revStr = ''
for(i=str.length -1; i>=0;i--){
    console.log(i)
    console.log(str[i])
    revStr = revStr+str[i]
    console.log(revStr)
}


document.getElementById("result").innerHTML = revStr 


}


const  palindromCheck = () =>{
 str = document.getElementById("floatingTextarea2").value
revStr = ''
for(i=str.length -1; i>=0;i--){
    console.log(i)
    console.log(str[i])
    revStr = revStr+str[i]
    console.log(revStr)
}

if(str == revStr){
    document.getElementById("result").innerHTML = "palindrom"
}else{
    document.getElementById("result").innerHTML = "Not Palindrom"
}
 
}