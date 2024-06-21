function signUp(){
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("email");
    var password = document.getElementById("pw");
    
    let jaey = email.value
    let sir = password.value

    if(firstname.value !== "" && lastname.value !== "" && jaey !== "" && sir !== ""){
        localStorage.setItem('firstname', firstname.value);
        localStorage.setItem('lastname', lastname.value);
        localStorage.setItem('email', jaey);
        localStorage.setItem('pw', sir);
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
        emailCheck.textContent = "*please fill all inputs correctly"
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