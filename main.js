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