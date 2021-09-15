
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  userinput = +(prompt("How many Characters should your password contain?  please enter a number between 8 and 128"))
  if (isNaN(userinput) || userinput < 8 || userinput > 128) {
    alert("A number between 8 and 128 is required")
  }
  else if ( userinput < 8 || userinput > 128){
    prompt("number must be between 8 and 128")
    return userinput
  }
  else {
  containsNum = confirm ("Will this password contain number ?")
  containsSym = confirm ("Will this password contain symbols ?")
  containsLoAlpha = confirm ("Will this password contain lower case alphabets ?")
  containsUpAlpha = confirm ("Will this password contain upper case alphabets ?")
  }
  
  
  
  
  

  console.log(userinput);
  console.log(containsNum);
  console.log(containsSym);
  console.log(containsLoAlpha);
  console.log(containsUpAlpha);

  function randloalpha() {
    const loalpha = "abcdefghijklmnopqrstuvwxyz";
    return loalpha[Math.floor(Math.random() * loalpha.length)]
  }
  
  function randupalpha() {
    const upalpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return upalpha[Math.floor(Math.random() * upalpha.length)]
  }
  
  function randsym() {
    const symbols = "!@#$%^&*_-+=";
    return symbols[Math.floor(Math.random() * symbols.length)]
  }
  
  
  function randnum() {
    const numbers = "0123456789";
    return numbers[Math.floor(Math.random() * numbers.length)]
  }

  var pass = [];

  if (!containsNum && !containsSym && !containsLoAlpha && !containsUpAlpha){
    alert("You must select a criteria")
  }


  if (containsNum) pass.push(randnum)
  if (containsSym) pass.push(randsym)
  if (containsUpAlpha) pass.push(randupalpha)
  if (containsLoAlpha) pass.push(randloalpha)

  var password = '';

  for (var i = 0; i < userinput; i++) {
    password += pass[Math.floor(Math.random() * pass.length)]();
    console.log(password);
  }
  return password
}

// Added event listener to generate button
generateBtn.addEventListener("click", writePassword);
