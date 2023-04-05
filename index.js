const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d",
    "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}",
    "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
];

let passwordLength = 15
let passwordEl = document.getElementById("password")
let generateGlobal = "";

let copyText = passwordEl.innerHTML
let copyComment = document.getElementById("comment")

// picking random characters from the array
function randomNumber() {
    let randomPick = Math.floor(Math.random() * characters.length)
    return characters[randomPick]
}

// making it 15 digits
function generatePassword() {
    let passwordEl = ""
    for (let i = 0; i < passwordLength; i++) {
        passwordEl += randomNumber()
    }
    return passwordEl
}

// showing it in the box
function showPasswords(){
    generateGlobal = generatePassword()
    passwordEl.textContent = generateGlobal
}

//copy password
function copyPassword() {
    navigator.clipboard.writeText( generateGlobal.value);
    // copyText.textContent = copyDefault;
    alert("Copied the text: " + passwordEl.value);
}