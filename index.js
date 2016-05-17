window.onload = function() {
  $(document).ready(function() {
    // Function for replacing dashboard div with door locks div
    $("#door-tile").click(function () {
      alert("trying to redirect");
      //$((document.getElementById("dashboard-screen")).replaceWith(document.getElementById("door-lock-screen"));
      $("#dashboard-screen").load("doorLockScreen.html");
    });
  });



};
