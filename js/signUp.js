// ==================== NEEDED ELEMENTS ====================
let userNameInput = document.getElementById('userName'); 
let userEmailInput = document.getElementById('userEmail'); 
let userPassInput = document.getElementById('userPass'); 
let displaySignUpMessage = document.getElementById('displaySignUpMessage');
let signUpBtn = document.getElementById('signUpBtn');

let instructionMss = document.getElementById('instructionMss');

// ==================== EMAIL VALIDATION ====================
let emailRegex = /^[A-Z][a-z]+@/;

emailRegex.test(userEmailInput.value); 

userEmailInput.addEventListener('keyup', function() {
    if (emailRegex.test(userEmailInput.value) == true) {
        this.classList.add('is-valid');
        this.classList.remove('is-invalid');
        instructionMss.innerHTML = "";
    }
    else {
        this.classList.add('is-invalid');
        this.classList.remove('is-valid');
        instructionMss.innerHTML = "Email must start with a capital letter";
    }
});

// ==================== AN EMPTY ARRAY TO STORE MY USERS DATA ====================
let myDataArr;

// ==================== CHECKING WHETHER THERE'S DATA IN LOCAL STORAGE OR NOT, IF YES GET IT ====================
if (localStorage.getItem("usersDataInStorage") != null) {
    myDataArr = JSON.parse(localStorage.getItem("usersDataInStorage"));
} else {
    myDataArr = [];
}

// ==================== SIGN UP FUNCTIONALITY ====================
signUpBtn.addEventListener('click', function () {
    let usersData = {
        userName : userNameInput.value,
        userEmail : userEmailInput.value,
        userPass : userPassInput.value
    }

    if (userNameInput.value == "" || userEmailInput.value == "" || userPassInput.value == "") {
        displaySignUpMessage.classList.add("text-white");
        displaySignUpMessage.innerHTML = "Please enter the missing field.";
    }
    else {
        myDataArr.push(usersData);

        localStorage.setItem("usersDataInStorage", JSON.stringify(myDataArr));

        displaySignUpMessage.innerHTML = "Success";
    }

});