// ==================== NEEDED ELEMENTS ====================
let loginBtn = document.getElementById('loginBtn');
let loginEmailInput = document.getElementById('loginEmailInput');
let loginPassInput = document.getElementById('loginPassInput');
let displayErrorMessage = document.getElementById('displayErrorMessage');

let currentUserName = "";

let myDataFromStorageAsArr = JSON.parse(localStorage.getItem("usersDataInStorage"));


let testFlag = false;    // <====

// ==================== LOG IN FUNCTIONALITY ====================
loginBtn.addEventListener('click', function () {
    for (let i = 0; i < myDataFromStorageAsArr.length; i++) {
        if (loginEmailInput.value == myDataFromStorageAsArr[i].userEmail && loginPassInput.value == myDataFromStorageAsArr[i].userPass) {
            testFlag = true;  // <======
            currentUserName = myDataFromStorageAsArr[i].userName;
            localStorage.setItem("currentName", currentUserName)
            loginBtn.setAttribute("href", "home.html");
        }
    }
    if (testFlag == false) {
        displayErrorMessage.innerHTML = "Email or password is worng";
        clearData();
    }
})

// ==================== CLEAR DATA FUNCTION ====================
function clearData() {
    loginEmailInput.value = "";
    loginPassInput.value = "";
}


