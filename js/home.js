let getCurrentName = localStorage.getItem("currentName");
let showUserName = document.getElementById('showUserName');
let logOutBtn = document.getElementById('logOutBtn');


showUserName.innerHTML = getCurrentName;

logOutBtn.addEventListener('click', function() {
    localStorage.removeItem("currentName");
});
