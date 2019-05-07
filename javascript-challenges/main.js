// Reverse String

function reverseString(str) {
  return str.split("").reverse().join("")
  let splitString = str.split("")
  let revArray = splitString.reverse()
  let joinArray = revArray.join("")
  return joinArray
}

// FizzBuzz Exercise

for (x=1; x <= 100; x++){
    if (x % 3 == 0 && x % 5 == 0){
      console.log("FizzBuzz")
    } else if (x % 5 == 0){
        console.log("Buzz")
      } else if  (x % 3 == 0){
        console.log("Fizz")
      } else {
        console.log(x)
    }
}

// Pig Latin Exercise

function pigLatin(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let wordStart = 0;
  if (vowels.includes(str[0])) {
    return str + "yay";
  } else {
    for (let char of str) {
      if (vowels.includes(char)) {
        wordStart = str.indexOf(char);
        break;
      }
    }
    return str.slice(wordStart) + str.slice(0, wordStart) + "ay";
  }
}
