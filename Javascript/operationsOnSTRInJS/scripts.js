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
