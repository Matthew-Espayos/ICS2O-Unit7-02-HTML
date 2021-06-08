// Variables to store the users input
let userinput = 0
// Connect "Positive?" button to "random" function
document.getElementById('mybutton').addEventListener('click', comparison)
// Get user input and convert it to an integer
function comparison () {
  userinput = document.getElementById('myinput').value
  userinput = parseInt(userinput)
  // Check if the user input is less than 0 (negative)
  if (userinput < 0) {
    document.getElementById('myanswer').innerHTML = 'Negative'
  } else {
    document.getElementById('myanswer').innerHTML = 'Positive'
  }
}
