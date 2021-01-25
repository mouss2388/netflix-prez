const listItems = document.getElementsByClassName("item-list");
const btn_video = document.getElementsByClassName("btn");
const video = document.querySelector("iframe");

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

function gestionNav() {
  for (let index_target = 0; index_target < listItems.length; index_target++) {
    listItems.item(index_target).addEventListener("click", (e) => {
      `${e.currentTarget.classList.add("active")}`;
      for (idx = 0; idx < listItems.length; idx++) {
        if (idx !== index_target) {
          listItems.item(idx).classList.remove("active");
        }
      }
    });
  }
}

gestionNav();
