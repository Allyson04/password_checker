// // First we create the function responsible for making the input background turn yellow

// function focusButton () {
//     document.getElementById("password_input").className = "backgroundYellow"
// }

// //then we create restorePassword, to get the value on the input and define if the background turns red or green

// function restorePassword () {
//     var numberOfCharacters = document.getElementById("password_input").value.length

//     if (numberOfCharacters <= 8) {
//         document.getElementById("password_input").className = "backgroundRed"
//     } else if (numberOfCharacters > 8) {
//         document.getElementById("password_input").className = "backgroundGreen"
//     }
// }

// document.querySelector('button[onclick="enableCreateSection()"]').style.display = "none"

function enableCheckSection() {
    document.getElementById("password-creator").style.display = "none"
    document.getElementById("password-checker").style.display = "block"
}

function enableCreateSection() {
    document.getElementById("password-checker").style.display = "none"
    document.getElementById("password-creator").style.display = "block"
}
