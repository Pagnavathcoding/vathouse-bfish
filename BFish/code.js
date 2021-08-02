var bars = document.getElementById("bars");
var close = document.getElementById("close");
var menu = document.getElementById("menu");
var body = document.querySelector("body");


bars.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
    body.classList.toggle("stuck-scroll");
});

close.addEventListener("click", () => {
    menu.classList.remove("show-menu");
    body.classList.remove("stuck-scroll");
})