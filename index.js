const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j",
"k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
"%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



const password1 = document.getElementById("password-1")
const password2 = document.getElementById("password-2")
const input = document.querySelector('input');
const log = document.getElementById('values');
let passwordLength = input.value - 2
let genPass = document.getElementById('genPass-btn')



password1.textContent = "* * * * * * * *"
password2.textContent = "* * * * * * * *"



input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
  passwordLength = e.target.value
}



function generateRandomChar(){
    let randomChar = Math.floor(Math.random()*characters.length)
    return characters[randomChar]
}


function generatePassword(){
    let randomPassword = ''
    for (let i = 0; i < passwordLength; i++){
        randomPassword += generateRandomChar()
    }
    return randomPassword
}

genPass.addEventListener('click', function(){
    password1.textContent = generatePassword()
    password2.textContent = generatePassword()
}) 

password1.addEventListener('click', function() {
    copy(this.id)
})
password2.addEventListener('click', function() {
    copy(this.id)
})

function copy(id) {
    const content = document.getElementById(id).textContent
    if (content === "* * * * * * * *") {
    } else {
        navigator.clipboard.writeText(content)
        copyMessage()
    }
}

function copyMessage() {
    document.getElementById("copy-message").style.display = "block";
    
    setTimeout( function() {
        document.getElementById("copy-message").style.display = "none";
    }, 500); document.getElementById("copy-message").style.transition = "250ms ease-in-out";
}