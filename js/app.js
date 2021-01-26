const body = document.querySelector("body");
const listItems = document.getElementsByClassName("item-list");
const btn_video = document.getElementsByClassName("btn-trailer");
const video = document.querySelector("iframe");
const profil_icon = document.querySelector(".search-tools .profil-icon");
const menu = document.getElementsByClassName("menu");
const btn_burger = document.querySelector(".btn-burger");

let show_menu = false;
let pos_active_link = 0;

function getFullScreenElement() {
  return (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullscreenElement ||
    document.msFullscreenElement
  );
}

function toggleFullscreen() {
  if (getFullScreenElement()) {
    video.exitFullscreen();
  } else {
    video.requestFullscreen().catch(console.log);
  }
}

btn_video.item(0).addEventListener("click", function () {
  video.classList.toggle("hidden");
  video.requestFullscreen().catch((e) => {});
});


function toggleActiveNav() {
  listItems.item(pos_active_link).classList.add("active");
  for (let index_target = 0; index_target < listItems.length; index_target++) {
    listItems.item(index_target).addEventListener("click", (e) => {
      `${e.currentTarget.classList.add("active")}`;
      for (idx = 0; idx < listItems.length; idx++) {
        if (idx !== index_target) {
          listItems.item(idx).classList.remove("active");
        }
      }
      pos_active_link = index_target;
    });
  }
}

profil_icon.addEventListener("mouseenter", () => {
  menu.item(0).classList.remove("hidden");
  showMenu = true;
});

profil_icon.addEventListener("mouseleave", () => {
  setTimeout(() => {
    menu.item(0).addEventListener("mouseenter", () => {
      menu.item(0).classList.remove("hidden");
      show_menu = true;
    });

    menu.item(0).addEventListener("mouseleave", () => {
      menu.item(0).classList.add("hidden");
      show_menu = false;
    });

    if (!show_menu) {
      menu.item(0).classList.add("hidden");
    }
  }, 1500);
});


btn_burger.addEventListener("click", () => {
  const nav_burger = document.getElementsByClassName("nav-burger");
  nav_burger[0].classList.toggle("hidden");
});


toggleActiveNav();


