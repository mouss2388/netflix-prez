const listItems = document.getElementsByClassName("item-list");


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