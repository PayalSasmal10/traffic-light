const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

function changeLight() {
  red.classList.remove("redlight");
  yellow.classList.remove("yellowlight");
  green.classList.remove("greenlight");

  // Red light for 5 sec
  setTimeout(function () {
    red.classList.add("redlight");

    // Yellow light for 2s
    setTimeout(function () {
      red.classList.remove("redlight");
      yellow.classList.add("yellowlight");

      //green light for 5s
      setTimeout(function () {
        yellow.classList.remove("yellowlight");
        green.classList.add("greenlight");

        // repeate the traffic light
        setTimeout(function () {
          green.classList.remove("greenlight");
          changeLight(); // recursively call
        },5000);
      }, 5000);
    }, 2000);
  }, 0);
}

changeLight();
