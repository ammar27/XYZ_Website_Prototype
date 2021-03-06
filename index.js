$(document).ready(function() {

  // Enabling boostrap tool tips
  $('[data-toggle="tooltip"]').tooltip();

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

  // Function for replacing current screen with the dashboard screen
  $("#nav-dashboard-button").click(function () {
    document.getElementById("dashboard-screen").style.display="block";
    document.getElementById("surveillance-screen").style.display="none";
    document.getElementById("motion-sensors-screen").style.display="none";
    document.getElementById("lock-screen").style.display="none";
  });

  $(".unresponsive-button").click(function () {
    // Sweet alert functionality obtained from http://t4t5.github.io/sweetalert/
    sweetAlert("Sorry...", "The functionality for this feature is disabled for the prototype", "error");
  });

  // Function to enlarge the images, source: http://dimsemenov.com/plugins/magnific-popup/documentation.html
  $("#living-enlarge").magnificPopup({
    items: {
      src: "Images/living-room.jpg"
    },
    type: "image",
    image: {
      titleSrc: function (item) {
        return "Living Room Camera";
      }
    }
  });

  $("#entrance-enlarge").magnificPopup({
    items: {
      src: "Images/entrance.jpg"
    },
    type: "image",
    image: {
      titleSrc: function (item) {
        return "Entrance Way Camera";
      }
    }
  });

  $("#kitchen-enlarge").magnificPopup({
    items: {
      src: "Images/kitchen.jpg"
    },
    type: "image",
    image: {
      titleSrc: function (item) {
        return "Kitchen Camera";
      }
    }
  });

  $("#bedroom-enlarge").magnificPopup({
    items: {
      src: "Images/bedroom.jpg"
    },
    type: "image",
    image: {
      titleSrc: function (item) {
        return "Bedroom Camera";
      }
    }
  });

  // Obtains properties for door locks and changes state based on previous state
  $("#front-door-lock-slider").click(function () {
    var lock = document.getElementById("front-door-lock");
    if (lock.innerHTML === "LOCKED") {
      lock.innerHTML = "UNLOCKED"; lock.style.color = "#e7604a";
      document.getElementById("front-lock").src = "Images/unlocked-icon.png";
      document.getElementById("front-door-alert").style.display = "block";
      document.getElementById("bed-motion-alert").style.display = "block";
      document.getElementById("motion-bed-det").innerHTML = "MOTION DETECTED";
      document.getElementById("motion-bed-det").style.color = "#e7604a";
      document.getElementById("num-alert").innerHTML = "3"
    } else {
      lock.innerHTML = "LOCKED"; lock.style.color = "#2b78c2";
      document.getElementById("front-lock").src = "Images/locked-icon.png";
      document.getElementById("front-door-alert").style.display = "none";
      document.getElementById("bed-motion-alert").style.display = "block";
      document.getElementById("num-alert").innerHTML = "2"
    }
  });

  $("#back-door-lock-slider").click(function () {
    var lock = document.getElementById("back-door-lock");
    if (lock.innerHTML === "LOCKED") {
      lock.innerHTML = "UNLOCKED"; lock.style.color = "#e7604a";
      document.getElementById("back-lock").src = "Images/unlocked-icon.png";
    } else {
      lock.innerHTML = "LOCKED"; lock.style.color = "#2b78c2";
      document.getElementById("back-lock").src = "Images/locked-icon.png";
    }
  });

  $("#garage-door-lock-slider").click(function () {
    var lock = document.getElementById("garage-door-lock");
    if (lock.innerHTML === "LOCKED") {
      lock.innerHTML = "UNLOCKED"; lock.style.color = "#e7604a";
      document.getElementById("garage-lock").src = "Images/unlocked-icon.png";
    } else {
      lock.innerHTML = "LOCKED"; lock.style.color = "#2b78c2";
      document.getElementById("garage-lock").src = "Images/locked-icon.png";
    }
  });

  $("#deck-door-lock-slider").click(function () {
    var lock = document.getElementById("deck-door-lock");
    if (lock.innerHTML === "LOCKED") {
      lock.innerHTML = "UNLOCKED"; lock.style.color = "#e7604a";
      document.getElementById("deck-lock").src = "Images/unlocked-icon.png";
    } else {
      lock.innerHTML = "LOCKED"; lock.style.color = "#2b78c2";
      document.getElementById("deck-lock").src = "Images/locked-icon.png";
    }
  });

  //Obtains properties for motion sensor switches and changes state based on previous state
  $("#motion-living-slider").click(function () {
    var switchText = document.getElementById("motion-living-text");
    if (switchText.innerHTML === "ON") {
      switchText.innerHTML = "OFF"; switchText.style.color = "#e7604a";
      document.getElementById("motion-living-img").src = "Images/motion-sensor-icon-off.png";
      document.getElementById("motion-living-det").innerHTML = "SENSOR OFF";
      document.getElementById("motion-living-det").style.color = "#353942";
    } else {
      switchText.innerHTML = "ON"; switchText.style.color = "#2b78c2";
      document.getElementById("motion-living-img").src = "Images/motion-sensor-icon.png";
      document.getElementById("motion-living-det").innerHTML = "NO MOTION";
      document.getElementById("motion-living-det").style.color = "#2b78c2";
    }
  });

  $("#motion-bed-slider").click(function () {
    var switchText = document.getElementById("motion-bed-text");
    if (switchText.innerHTML === "ON") {
      switchText.innerHTML = "OFF"; switchText.style.color = "#e7604a";
      document.getElementById("motion-bed-img").src = "Images/motion-sensor-icon-off.png";
      document.getElementById("motion-bed-det").innerHTML = "SENSOR OFF";
      document.getElementById("motion-bed-det").style.color = "#353942";
    } else {
      switchText.innerHTML = "ON"; switchText.style.color = "#2b78c2";
      document.getElementById("motion-bed-img").src = "Images/motion-sensor-icon.png";
      document.getElementById("motion-bed-det").innerHTML = "NO MOTION";
      document.getElementById("motion-bed-det").style.color = "#2b78c2";
    }
  });

  $("#motion-entrance-slider").click(function () {
    var switchText = document.getElementById("motion-entrance-text");
    if (switchText.innerHTML === "ON") {
      switchText.innerHTML = "OFF"; switchText.style.color = "#e7604a";
      document.getElementById("motion-entrance-img").src = "Images/motion-sensor-icon-off.png";
      document.getElementById("motion-entrance-det").innerHTML = "SENSOR OFF";
      document.getElementById("motion-entrance-det").style.color = "#353942";
    } else {
      switchText.innerHTML = "ON"; switchText.style.color = "#2b78c2";
      document.getElementById("motion-entrance-img").src = "Images/motion-sensor-icon.png";
      document.getElementById("motion-entrance-det").innerHTML = "NO MOTION";
      document.getElementById("motion-entrance-det").style.color = "#2b78c2";
    }
  });

  $("#motion-kitchen-slider").click(function () {
    var switchText = document.getElementById("motion-kitchen-text");
    if (switchText.innerHTML === "ON") {
      switchText.innerHTML = "OFF"; switchText.style.color = "#e7604a";
      document.getElementById("motion-kitchen-img").src = "Images/motion-sensor-icon-off.png";
      document.getElementById("motion-kitchen-det").innerHTML = "SENSOR OFF";
      document.getElementById("motion-kitchen-det").style.color = "#353942";
    } else {
      switchText.innerHTML = "ON"; switchText.style.color = "#2b78c2";
      document.getElementById("motion-kitchen-img").src = "Images/motion-sensor-icon.png";
      document.getElementById("motion-kitchen-det").innerHTML = "NO MOTION";
      document.getElementById("motion-kitchen-det").style.color = "#2b78c2";
    }
  });

  //Obtains properties for surveillance switches and changes state based on previous state
  $("#surv-living-slider").click(function () {
    var switchText = document.getElementById("surv-living-text");
    if (switchText.innerHTML === "ON") {
      switchText.innerHTML = "OFF"; switchText.style.color = "#e7604a";
      document.getElementById("surv-living-img").src = "Images/camera-off-icon.png";
    } else {
      switchText.innerHTML = "ON"; switchText.style.color = "#2b78c2";
      document.getElementById("surv-living-img").src = "Images/living-room.jpg";
    }
  });

  $("#surv-bed-slider").click(function () {
    var switchText = document.getElementById("surv-bed-text");
    if (switchText.innerHTML === "ON") {
      switchText.innerHTML = "OFF"; switchText.style.color = "#e7604a";
      document.getElementById("surv-bed-img").src = "Images/camera-off-icon.png";
    } else {
      switchText.innerHTML = "ON"; switchText.style.color = "#2b78c2";
      document.getElementById("surv-bed-img").src = "Images/bedroom.jpg";
    }
  });

  $("#surv-entrance-slider").click(function () {
    var switchText = document.getElementById("surv-entrance-text");
    if (switchText.innerHTML === "ON") {
      switchText.innerHTML = "OFF"; switchText.style.color = "#e7604a";
      document.getElementById("surv-entrance-img").src = "Images/camera-off-icon.png";
    } else {
      switchText.innerHTML = "ON"; switchText.style.color = "#2b78c2";
      document.getElementById("surv-entrance-img").src = "Images/entrance.jpg";
    }
  });

  $("#surv-kitchen-slider").click(function () {
    var switchText = document.getElementById("surv-kitchen-text");
    if (switchText.innerHTML === "ON") {
      switchText.innerHTML = "OFF"; switchText.style.color = "#e7604a";
      document.getElementById("surv-kitchen-img").src = "Images/camera-off-icon.png";
    } else {
      switchText.innerHTML = "ON"; switchText.style.color = "#2b78c2";
      document.getElementById("surv-kitchen-img").src = "Images/kitchen.jpg";
    }
  });
});
