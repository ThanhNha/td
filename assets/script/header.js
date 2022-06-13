const hamburger = $("#hamburger-menu");
const body = $("body");
const overlay = $("#overlay");

hamburger.click(() => {
  body.toggleClass("open-menu");
});

let has_sub = $(".has-sub");
let sub = $(".sub-menu-wrapper");
has_sub.click((e) => {
  e.preventDefault();
  sub.toggleClass("open-sub");
});
overlay.click(() => {
  body.removeClass("open-menu");
});
$(document).on("click", function (e) {
  if ($(e.target).closest("#sidebar").length === 0) {
    $("#sidebar .sub-menu-wrapper").removeClass("open-sub");
  }
});
