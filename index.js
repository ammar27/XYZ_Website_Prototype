$(document).ready(function() {

  // Setting up colours for all lock/unlock and on/off text in the screens
  var text = document.getElementById("motion-living-text");
  if (text.innerHTML === "ON") {
    //text.style.color = "";
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
    if (lock.innerHTML === "LOCKED") { lock.innerHTML = "UNLOCKED"; lock.style.color = "#e7604a";
    } else { lock.innerHTML = "LOCKED"; lock.style.color = "#2b78c2"; }
  });

  $("#back-door-lock-slider").click(function () {
    var lock = document.getElementById("back-door-lock");
    if (lock.innerHTML === "LOCKED") { lock.innerHTML = "UNLOCKED"; lock.style.color = "#e7604a";
    } else { lock.innerHTML = "LOCKED"; lock.style.color = "#2b78c2"; }
  });

  $("#garage-door-lock-slider").click(function () {
    var lock = document.getElementById("garage-door-lock");
    if (lock.innerHTML === "LOCKED") { lock.innerHTML = "UNLOCKED"; lock.style.color = "#e7604a";
    } else { lock.innerHTML = "LOCKED"; lock.style.color = "#2b78c2"; }
  });

  $("#deck-door-lock-slider").click(function () {
    var lock = document.getElementById("deck-door-lock");
    if (lock.innerHTML === "LOCKED") { lock.innerHTML = "UNLOCKED"; lock.style.color = "#e7604a";
    } else { lock.innerHTML = "LOCKED"; lock.style.color = "#2b78c2"; }
  });

  //Obtains properties for motion sensor switches and changes state based on previous state
  $("#motion-living-slider").click(function () {
    var switchText = document.getElementById("motion-living-text");
    if (switchText.innerHTML === "ON") { switchText.innerHTML = "OFF"; switchText.style.color = "#e7604a";
    } else { switchText.innerHTML = "ON"; switchText.style.color = "#2b78c2"; }
  });

  $("#motion-bed-slider").click(function () {
    var switchText = document.getElementById("motion-bed-text");
    if (switchText.innerHTML === "ON") { switchText.innerHTML = "OFF"; switchText.style.color = "#e7604a";
    } else { switchText.innerHTML = "ON"; switchText.style.color = "#2b78c2"; }
  });

  $("#motion-entrance-slider").click(function () {
    var switchText = document.getElementById("motion-entrance-text");
    if (switchText.innerHTML === "ON") { switchText.innerHTML = "OFF"; switchText.style.color = "#e7604a";
    } else { switchText.innerHTML = "ON"; switchText.style.color = "#2b78c2"; }
  });

  $("#motion-kitchen-slider").click(function () {
    var switchText = document.getElementById("motion-kitchen-text");
    if (switchText.innerHTML === "ON") { switchText.innerHTML = "OFF"; switchText.style.color = "#e7604a";
    } else { switchText.innerHTML = "ON"; switchText.style.color = "#2b78c2"; }
  });

  //Obtains properties for surveillance switches and changes state based on previous state
  $("#surv-living-slider").click(function () {
    var switchText = document.getElementById("surv-living-text");
    if (switchText.innerHTML === "ON") { switchText.innerHTML = "OFF"; switchText.style.color = "#e7604a";
    } else { switchText.innerHTML = "ON"; switchText.style.color = "#2b78c2"; }
  });

  $("#surv-bed-slider").click(function () {
    var switchText = document.getElementById("surv-bed-text");
    if (switchText.innerHTML === "ON") { switchText.innerHTML = "OFF"; switchText.style.color = "#e7604a";
    } else { switchText.innerHTML = "ON"; switchText.style.color = "#2b78c2"; }
  });

  $("#surv-entrance-slider").click(function () {
    var switchText = document.getElementById("surv-entrance-text");
    if (switchText.innerHTML === "ON") { switchText.innerHTML = "OFF"; switchText.style.color = "#e7604a";
    } else { switchText.innerHTML = "ON"; switchText.style.color = "#2b78c2"; }
  });

  $("#surv-kitchen-slider").click(function () {
    var switchText = document.getElementById("surv-kitchen-text");
    if (switchText.innerHTML === "ON") { switchText.innerHTML = "OFF"; switchText.style.color = "#e7604a";
    } else { switchText.innerHTML = "ON"; switchText.style.color = "#2b78c2"; }
  });
});
