let navToggle = document.getElementById("navToggle");
let nav = document.getElementById("nav");
let exit = document.getElementById("exit");

navToggle.addEventListener("click", open);

exit.addEventListener("click", close);

function open() {
    nav.classList.add("active");
}

function close() {
    nav.classList.remove("active")
}
