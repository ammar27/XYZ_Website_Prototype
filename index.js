$(document).ready(function() {
  // Function for replacing dashboard div with door locks div
  $("#door-tile").click(function () {
    var dashBoardScreen = $("#dashBoardScreen").clone(true);
    $("#dashboard-screen").replaceWith(document.getElementById("lock-screen"));
    document.getElementById("lock-screen").style.display="block";
    //$("#dashboard-screen").load("doorLockScreen.html");
  });
});

/* Navbar collapse function source:http://www.w3schools.com/howto/howto_js_navbar-top.asp */
function navbarCollapse() {
    document.getElementsByClassName("navbar-top")[0].classList.toggle("responsive");
}
