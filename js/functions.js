/**
 * Prende dall'html tutti gli elementi che hanno classe .visible
 * e la toglie, poi la aggiunge se elemento è al currentIndex
 * @param {HTMLElement} container container dal quale selezionare tutti gli elementi con classe .visible
 */
function toggleVisibility(container){

    const allVisibleEl = container.querySelectorAll(".visible");
    allVisibleEl.forEach((element)=>{
        element.classList.remove("visible");
    })

    const allImgs = imgContainer.querySelectorAll("img");
    const allThumbs = thumbContainer.querySelectorAll("img");
    const allDescriptions = imgContainer.querySelectorAll(".img_description");

    allImgs[currentIndex].classList.add("visible");
    allThumbs[currentIndex].classList.add("visible");
    allDescriptions[currentIndex].classList.add("visible");

}