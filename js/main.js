let links = [...document.querySelectorAll(".nav-link")];
let home = document.getElementById("home");
let about = document.getElementById("about");
let services = document.getElementById("services");
let portfolio = document.getElementById("portfolio");
let team = document.getElementById("team");
let contact = document.getElementById("contact");
//Function to active link on list nav when i arrive to the section selecte
function changeLinkOfList() {
    if (window.scrollY >= home.offsetTop) {
        links.forEach((ele) => {
            ele.classList.remove("active");
        });
        links[0].classList.add("active");
    }
    if (window.scrollY >= about.offsetTop - 100) {
        links.forEach((ele) => {
            ele.classList.remove("active");
        });
        links[1].classList.add("active");
    }
    if (window.scrollY >= services.offsetTop - 100) {
        links.forEach((ele) => {
            ele.classList.remove("active");
        });
        links[2].classList.add("active");
    }
    if (window.scrollY >= portfolio.offsetTop - 100) {
        links.forEach((ele) => {
            ele.classList.remove("active");
        });
        links[3].classList.add("active");
    }
    if (window.scrollY >= team.offsetTop - 150) {
        links.forEach((ele) => {
            ele.classList.remove("active");
        });
        links[4].classList.add("active");
    }
    if (window.scrollY >= contact.offsetTop - 200) {
        links.forEach((ele) => {
            ele.classList.remove("active");
        });
        links[5].classList.add("active");
    }
}
window.addEventListener("scroll", changeLinkOfList);