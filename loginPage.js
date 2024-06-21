function login(){ 
    var storedemail = localStorage.getItem('email');
    var storedpassword = localStorage.getItem('pw');

    var enterEmail = document.getElementById("emaill");
    var enterPw = document.getElementById("pww");


if(enterEmail.value == storedemail && enterPw.value == storedpassword){
    document.getElementById("myDropdownn").classList.toggle("show");
        window.onclick = function(event) {
            if (!event.target.matches('.enter')) {
              var dropdowns = document.getElementsByClassName("dropdownn-content");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }
            }
        }
}
else{
    emailCheck.textContent = "Invalid Email or Password"
}
}



//HAMBURGER MOBILE/TAB VIEW
function openNav() {
  document.getElementById("myNav").style.width = "45%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



// CART HAMBURGER
function openNavv() {
  document.getElementById("myNavv").style.width = "25%";
}

function closeNavv() {
  document.getElementById("myNavv").style.width = "0%";
}