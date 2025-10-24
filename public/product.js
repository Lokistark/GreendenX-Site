// Sidevav Selection , Menuicon //

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
  sidenav.style.right = 0
})

closenav.addEventListener("click", function () {
  sidenav.style.right = "-50%"
})

// Product Search Functionality //

var productContainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function (event) {
  var enteredvalue = event.target.value.toUpperCase()

  for (count = 0; count < productlist.length; count = count + 1) {
    var productname = productlist[count].querySelector("h1").textContent

    if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
      productlist[count].style.display = "none"
    }
    else {
      productlist[count].style.display = "block"
    }
  }
})

// Typewriter placeholder animation
const searchInput = document.getElementById("search");
const placeholderText = "Search for the Products...";
let index = 0;

function typeWriter() {
  if (index <= placeholderText.length) {
    searchInput.setAttribute("placeholder", placeholderText.slice(0, index));
    index++;
    setTimeout(typeWriter, 100); // Speed of typing
  }
}

typeWriter();