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
  "images/logo/logo8-black.png",
  "images/logo/logo9-black.png",
  "images/logo/logo10-black.png",
  "images/logo/logo11-black.png",
  "images/logo/logo12-black.png",
  "images/logo/logo13-black.png",
  "images/logo/logo14-black.png",
  "images/logo/logo-core-black.png",
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

// hero typing effect

// List of sentences
var _CONTENT = [ "clients." , "causes.", "companies.", "challenges.", ". period."];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Implements typing effect
function Type() { 
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If last sentence then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 400);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);


// generator 100


// const imageCaptionPairs = [
//   { image: 'image1.jpg', caption: 'Caption 1' },
//   { image: 'image2.jpg', caption: 'Caption 2' },
//   { image: 'image3.jpg', caption: 'Caption 3' },
//   // Add more image-caption pairs as needed
// ];

// function generateRandomImage() {
//   const randomIndex = Math.floor(Math.random() * imageCaptionPairs.length);
//   const randomPair = imageCaptionPairs[randomIndex];

//   const imageElement = document.getElementById('random-image');
//   const captionElement = document.getElementById('100caption');

//   imageElement.src = randomPair.image;
//   imageElement.alt = randomPair.caption;
//   captionElement.innerText = randomPair.caption;
// }
