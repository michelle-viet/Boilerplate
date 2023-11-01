// ██       ██████   ██████   ██████       ██████ ██   ██  █████  ███    ██  ██████  ███████
// ██      ██    ██ ██       ██    ██     ██      ██   ██ ██   ██ ████   ██ ██       ██
// ██      ██    ██ ██   ███ ██    ██     ██      ███████ ███████ ██ ██  ██ ██   ███ █████
// ██      ██    ██ ██    ██ ██    ██     ██      ██   ██ ██   ██ ██  ██ ██ ██    ██ ██
// ███████  ██████   ██████   ██████       ██████ ██   ██ ██   ██ ██   ████  ██████  ███████ (black)

const logo = document.getElementById("logo");
const logoVariations = [
  "images/logo/logo3-black.png",
  "images/logo/logo4-black.png",
  "images/logo/logo5-black.png",
  "images/logo/logo6-black.png",
];
let currentIndex = 0;

logo.addEventListener("mouseover", () => {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * logoVariations.length);
  } while (randomIndex === currentIndex); // Ensure no repeats

  currentIndex = randomIndex;
  logo.src = logoVariations[currentIndex];
});

// ███    ██  █████  ██    ██     ███    ███ ███████ ███    ██ ██    ██
// ████   ██ ██   ██ ██    ██     ████  ████ ██      ████   ██ ██    ██
// ██ ██  ██ ███████ ██    ██     ██ ████ ██ █████   ██ ██  ██ ██    ██
// ██  ██ ██ ██   ██  ██  ██      ██  ██  ██ ██      ██  ██ ██ ██    ██
// ██   ████ ██   ██   ████       ██      ██ ███████ ██   ████  ██████

function toggleMenu() {
  var nav = document.querySelector(".nav");
  nav.classList.toggle("active");
}

// ███████ ██ ██      ████████ ███████ ██████
// ██      ██ ██         ██    ██      ██   ██
// █████   ██ ██         ██    █████   ██████
// ██      ██ ██         ██    ██      ██   ██
// ██      ██ ███████    ██    ███████ ██   ██

filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("play-filter");
var btns = btnContainer.getElementsByClassName("filter-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
