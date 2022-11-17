/**
 * Prende dall'html tutti gli elementi che hanno classe .visible e la toglie
 * @param {HTMLElement} container container dal quale selezionare tutti gli elementi con classe .visible
 */
function removeVisibility(container){

    const allVisibleEl = container.querySelectorAll(".visible");
    allVisibleEl.forEach((element)=>{
        element.classList.remove("visible");
    })
}
/**
 * Prende un nodo di elementi Html, lo converte in array e aggiunge classe .visible
 * @param  {...NodeList} nodeList nodi presi dal DOM tramite querySelectorAll
 */
function addVisibility(...nodeList){
    let nodeToArray;
    nodeList.forEach((element)=>{
        nodeToArray = Array.from(element);
        nodeToArray[currentIndex].classList.add("visible");
    })
}