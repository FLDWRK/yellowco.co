$(function() {
  $("[data-href]").on("click", function(e) {
    window.location = $(e.currentTarget).data("href");
  });
});
