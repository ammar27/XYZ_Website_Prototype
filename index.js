$(document).ready(function() {
  // Function for replacing dashboard div with door locks div
  $("#door-tile").click(function () {
    //$("#dashboard-screen").replaceWith(document.getElementById("lock-screen"));
    document.getElementById("lock-screen").style.display="block";
    document.getElementById("dashboard-screen").style.display="none";
    //$("#dashboard-screen").load("doorLockScreen.html");
  });

  // Function for replacing dashboard div with motion sensor div
  $("#motion-sensors-tile").click(function () {
    //$("#dashboard-screen").replaceWith(document.getElementById("motion-sensors-screen"));
    document.getElementById("motion-sensors-screen").style.display="block";
    document.getElementById("dashboard-screen").style.display="none";
    //$("#dashboard-screen").load("doorLockScreen.html");
  });

  // Function for replacing dashboard div with surveillance div
  $("#surveillance-tile").click(function () {
    //$("#dashboard-screen").replaceWith(document.getElementById("surveillance-screen"));
    document.getElementById("surveillance-screen").style.display="block";
    document.getElementById("dashboard-screen").style.display="none";
    //$("#dashboard-screen").load("doorLockScreen.html");
  });

  $(".back-button").click(function () {
    document.getElementById("dashboard-screen").style.display="block";
    document.getElementById("surveillance-screen").style.display="none";
    document.getElementById("motion-sensors-screen").style.display="none";
    document.getElementById("lock-screen").style.display="none";
  });

  $("#front-door-lock-slider").click(function () {
    var lock = document.getElementById("front-door-lock");
    if (lock.innerHTML === "LOCKED") { lock.innerHTML = "UNLOCKED"; } else { lock.innerHTML = "LOCKED"; }
  });

  $("#back-door-lock-slider").click(function () {
    var lock = document.getElementById("back-door-lock");
    if (lock.innerHTML === "LOCKED") { lock.innerHTML = "UNLOCKED"; } else { lock.innerHTML = "LOCKED"; }
  });

  $("#garage-door-lock-slider").click(function () {
    var lock = document.getElementById("garage-door-lock");
    if (lock.innerHTML === "LOCKED") { lock.innerHTML = "UNLOCKED"; } else { lock.innerHTML = "LOCKED"; }
  });

  $("#deck-door-lock-slider").click(function () {
    var lock = document.getElementById("deck-door-lock");
    if (lock.innerHTML === "LOCKED") { lock.innerHTML = "UNLOCKED"; } else { lock.innerHTML = "LOCKED"; }
  });

});
