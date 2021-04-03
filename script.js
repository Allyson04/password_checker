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

// check password

function focusButton () {
    console.log("focused")
}

function restorePassword() {
    let passwordValue = document.getElementById("password_input").value

    // if (passwordValue.length > 8) {
    //     // document.getElementById("password_input").className = "backgroundGreen"
    //     console.log("good")
    // } else {
    //     console.log("bad")
    // }

    // if (numberOfCharacters.match(/[A-Z]/g)) {
    //     // document.getElementById("password_input").className = "backgroundGreen"
    //     console.log("good")
    // } else {
    //     console.log("bad")
    // }

    good = "Aproved!"
    bad = "Forgot it"

    passwordLengthAval = passwordValue.length >= 8 ? good : bad

    passwordUpperCaseAval = passwordValue.match(/[A-Z]/g) ? good : bad

    passwordLowerCaseAval = passwordValue.match(/[a-z]/g) ? good : bad

    requirements = [
        passwordLengthAval,
        passwordUpperCaseAval,
        passwordLowerCaseAval
    ]

    console.log("///")
    for (i=0; i<3; i++) {
        console.log(requirements[i])
    }
    console.log("///")

    // if (numberOfCharacters.length <= 8) {
    //     document.getElementById("password_input").className = "backgroundRed"
    // }

    // if (numberOfCharacters.match(/[A-Z]/g)) {
    //     console.log("nice")
    // } else {
    //     console.log("not")
    // }
}