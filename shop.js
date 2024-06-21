$(document).ready(function(){
    $("#div1").hover(function(){
        $("#hov").html("$499");
    },
    function(){
        $("#hov").html("."); 
    })
});

$(document).ready(function(){
    $("#div2").hover(function(){
        $("#hov1").html("$216");
    },
    function(){
        $("#hov1").html("."); 
    })
});

$(document).ready(function(){
    $("#div3").hover(function(){
        $("#hov2").html("$910");
    },
    function(){
        $("#hov2").html(""); 
    })
});

$(document).ready(function(){
    $("#div4").hover(function(){
        $("#hov3").html("$126");
    },
    function(){
        $("#hov3").html(""); 
    })
})


// RECENTLY VIEWED
$(document).ready(function(){
    $("#div10").hover(function(){
        $("#hov10").html("$499");
    },
    function(){
        $("#hov10").html("."); 
    })
})

$(document).ready(function(){
    $("#div11").hover(function(){
        $("#hov11").html("$216");
    },
    function(){
        $("#hov11").html("."); 
    })
})

$(document).ready(function(){
    $("#div12").hover(function(){
        $("#hov12").html("$910");
    },
    function(){
        $("#hov12").html(""); 
    })
})

$(document).ready(function(){
    $("#div13").hover(function(){
        $("#hov13").html("$126");
    },
    function(){
        $("#hov13").html(""); 
    })
})



//CLICKABLE DROPDOWN MENU
function myFunction() {
    document.getElementById("myDropdownn").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtnn')) {
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


// HAMBURGER MOBILE/TAB VIEW
function openNav() {
    document.getElementById("myNav").style.width = "45%";
}
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


// CLICKABLE DROPDOWN MOBILE
function myFunnction() {
    document.getElementById("myDropdownnn").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtnnn')) {
      var dropdownns = document.getElementsByClassName("dropdownnn-content");
      var i;
      for (i = 0; i < dropdownns.length; i++) {
        var openDropdownn = dropdownns[i];
        if (openDropdownn.classList.contains('show')) {
          openDropdownn.classList.remove('show');
        }
      }
    }
}


// CART HAMBURGER
function openNavv() {
    document.getElementById("myNavv").style.width = "25%";
}
  
function closeNavv() {
    document.getElementById("myNavv").style.width = "0%";
}



  

// GET PRODUCTS
// $.ajax({
//     url: 'http://159.65.21.42:9000/products',
//     method: 'get',
//     success: function (data) {
//         for (let i = 0; i < data.length; i++) {
//             if(data[i].category === "sirjaey1"){
//                 let usersData =
            
//                 `<div class="banner3-img1 img-1" id="div1">
//                     <a href="productPage.html"> ${data[i].image}</a>
//                     <p>${data[i].name}</p>
//                     <p id="hov" class="price">${data[i].price}</p>
//                 </div>`                    
            

//                 $('#myProducts').append(usersData)
//                 console.log(data[i]);
            

//         }
//     }},

//     error: function () {
//         alert('request failed')
//     }
// })
