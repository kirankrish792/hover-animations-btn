//---------------------------------//
// Function Jquery for Btn-E15
$("#button-btn-E15").click(function() {
  $(this).toggleClass("clicked");
  $("#button-btn-E15 #p-btn-E15").text(function(i, text) {
    return text === "Sent!" ? "Send" : "Sent!";
  });
});
//---------------------------------//
