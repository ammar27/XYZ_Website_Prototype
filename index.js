$(document).ready(function() {
  // Function for replacing dashboard div with door locks div
  $("#door-tile").click(function () {
    $("#dashboard-screen").replaceWith(document.getElementById("lock-screen"));
    document.getElementById("lock-screen").style.display="block";
    //$("#dashboard-screen").load("doorLockScreen.html");
  });
});
