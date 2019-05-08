// Copyright for new (Date().getFullYear())

let newDateYear = new Date().getFullYear();
let copyrightText = document.getElementById("textFooter");

copyrightText.innerHTML =
  "Copyright &copy; 1996-" + newDateYear + " Javier Delgado |";
//---------------------------------

// Test message connected with HTML
let greet = "Hellor world!!";
console.log(greet.toUpperCase());
//---------------------------------

// Function Jquery for Btn-E15
$("#button-btn-E15").click(function() {
  $(this).toggleClass("clicked");
  $("#button-btn-E15 #p-btn-E15").text(function(i, text) {
    return text === "Sent!" ? "Send" : "Sent!";
  });
});
//---------------------------------

// Function Jquery for Btn-A17
var animateButton = function(e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function() {
    e.target.classList.remove("animate");
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}
//---------------------------------

// Function Jquery for Btn-B17
$(window).ready(function() {
  $(".btn-B17").wrapInner("<div class=botontext></div>");

  $(".botontext")
    .clone()
    .appendTo($(".btn-B17"));

  $(".btn-B17").append(
    '<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>'
  );

  $(".twist")
    .css("width", "25%")
    .css("width", "+=3px");
});
//---------------------------------
