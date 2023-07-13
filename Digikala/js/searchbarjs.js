// ===========================================================================================

let mybutton = document.getElementById("btn-back-to-top");

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// ===========================================================================================

function toggleMenu() {
    var menuBox = document.getElementById('menu-box');
    if (menuBox.style.display == "flex") { // if is menuBox displayed, hide it
        menuBox.style.display = "none";
    } else { // if is menuBox hidden, display it
        menuBox.style.display = "flex";
    }
}