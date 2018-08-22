function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

var mixedCase = "I can\'t hear you!"
var lovestring = "I love you, Grandma."
var loveBackString = "I love you, too."

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string){
    return mixedCase
  } else if (string.toUpperCase() === string()){
    return "YES INDEED!"
  } else (string === lovestring){
    return loveBackString
  }
}

  
