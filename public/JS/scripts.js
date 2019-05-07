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
