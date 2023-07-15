const menu = document.querySelector(".Menu");
const menuItems = document.querySelectorAll(".MenuItem");
const hamburger= document.querySelector(".Hamburger");

deg =0

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    hamburger.style.WebkitTransform = "rotate("+deg+"deg)";
    deg = (deg == 360)?0:deg+360;
    if (deg == 0) clearInterval(id);
  

  } else {
    menu.classList.add("showMenu");
    hamburger.style.WebkitTransform = "rotate("+deg+"deg)";
    deg = (deg == 360)?0:deg+360;
    if (deg == 0) clearInterval(id);
  }
}

hamburger.addEventListener("click", toggleMenu);


