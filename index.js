$(document).ready(function() {

  // Setting up colours for all lock/unlock and on/off text in the screens
  var text = document.getElementById("motion-living-text");
  if (text.innerHTML === "ON") {
    text.style.color = "blue";
  }


  // Function for replacing dashboard div with door locks div
  $("#door-tile").click(function () {
    document.getElementById("lock-screen").style.display="block";
    document.getElementById("dashboard-screen").style.display="none";
  });

  // Function for replacing dashboard div with motion sensor div
  $("#motion-sensors-tile").click(function () {
    document.getElementById("motion-sensors-screen").style.display="block";
    document.getElementById("dashboard-screen").style.display="none";
  });

  // Function for replacing dashboard div with surveillance div
  $("#surveillance-tile").click(function () {
    document.getElementById("surveillance-screen").style.display="block";
    document.getElementById("dashboard-screen").style.display="none";
  });

  // Function for replacing current screen with the dashboard screen
  $(".back-button").click(function () {
    document.getElementById("dashboard-screen").style.display="block";
    document.getElementById("surveillance-screen").style.display="none";
    document.getElementById("motion-sensors-screen").style.display="none";
    document.getElementById("lock-screen").style.display="none";
  });

  // Obtains properties for door locks and changes state based on previous state
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

  //Obtains properties for motion sensor switches and changes state based on previous state
  $("#motion-living-slider").click(function () {
    var switchText = document.getElementById("motion-living-text");
    if (switchText.innerHTML === "ON") { switchText.innerHTML = "OFF"; } else { switchText.innerHTML = "ON"; }
  });

  $("#motion-bed-slider").click(function () {
    var switchText = document.getElementById("motion-bed-text");
    if (switchText.innerHTML === "ON") { switchText.innerHTML = "OFF"; } else { switchText.innerHTML = "ON"; }
  });

  $("#motion-entrance-slider").click(function () {
    var switchText = document.getElementById("motion-entrance-text");
    if (switchText.innerHTML === "ON") { switchText.innerHTML = "OFF"; } else { switchText.innerHTML = "ON"; }
  });

  $("#motion-kitchen-slider").click(function () {
    var switchText = document.getElementById("motion-kitchen-text");
    if (switchText.innerHTML === "ON") { switchText.innerHTML = "OFF"; } else { switchText.innerHTML = "ON"; }
  });

  //Obtains properties for surveillance switches and changes state based on previous state
  $("#surv-living-slider").click(function () {
    var switchText = document.getElementById("surv-living-text");
    if (switchText.innerHTML === "ON") { switchText.innerHTML = "OFF"; } else { switchText.innerHTML = "ON"; }
  });

  $("#surv-bed-slider").click(function () {
    var switchText = document.getElementById("surv-bed-text");
    if (switchText.innerHTML === "ON") { switchText.innerHTML = "OFF"; } else { switchText.innerHTML = "ON"; }
  });

  $("#surv-entrance-slider").click(function () {
    var switchText = document.getElementById("surv-entrance-text");
    if (switchText.innerHTML === "ON") { switchText.innerHTML = "OFF"; } else { switchText.innerHTML = "ON"; }
  });

  $("#surv-kitchen-slider").click(function () {
    var switchText = document.getElementById("surv-kitchen-text");
    if (switchText.innerHTML === "ON") { switchText.innerHTML = "OFF"; } else { switchText.innerHTML = "ON"; }
  });
});
