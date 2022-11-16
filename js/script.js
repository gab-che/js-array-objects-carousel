const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let currentIndex = 0;
const imgContainer = document.querySelector(".img_container");
const arrayImg = [];
const arrayTitle = [];
const arrayText = [];
/**
 * Cicla l'array di oggetti e pusha valori con la stessa chiave nei rispettivi array
 */
images.forEach((element) =>{
    arrayImg.push(element.image);
    arrayTitle.push(element.title);
    arrayText.push(element.text);
});

for (let i = 0; i < arrayImg.length; i++){
    const currentImg = arrayImg[i];

    const newImg = document.createElement("img");
    newImg.classList.add("img_carousel");
    newImg.src = currentImg;

    // const newThumb = document.createElement("img");
    // newThumb.classList.add("img_thumbnail");
    // newThumb.src = currentImg;

    if (i === currentIndex){
        newImg.classList.add("visible");
        //newThumb.classList.add("visible");
    }

    imgContainer.append(newImg);
    //thumbContainer.append(newThumb);
}