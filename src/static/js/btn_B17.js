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
