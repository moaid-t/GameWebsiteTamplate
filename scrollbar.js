window.onscroll = function () {
  closeMenu();
};

function closeMenu() {
  if (screen && screen.width <= 1100) {
    let note = document.querySelector("#hamburger").className.split(" ");
    if (window.scrollY >= 40 && note.length == 2) {
      document.querySelector("#hamburger").className = note[0];
      document.querySelector("#nav-menu").className = "nav-menu";
    }
  }
}
