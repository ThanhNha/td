const hamburger = $("#hamburger-menu");
const body = $("body");

hamburger.click(() => {
  hamburger.toggleClass("active");
  body.toggleClass("open-menu");
});

let has_sub = $(".has-sub");
let sub = $(".sub-menu-wrapper");
console.log(sub);
has_sub.click(() => {
  sub.toggleClass("open-sub");
});
