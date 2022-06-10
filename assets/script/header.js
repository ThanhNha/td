const hamburger = $("#hamburger-menu");
const body = $("body");

hamburger.click(() => {
  hamburger.toggleClass("active");
  body.toggleClass("open-menu");
});

let has_sub = $(".has-sub");
let sub = $(".sub-menu-wrapper");
has_sub.click((e) => {
  e.preventDefault();
  sub.toggleClass("open-sub");
});
