const cardObjects = [
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
const lastIndex = cardObjects.length - 1;

const carouselContainer = document.querySelector(".carousel_container");
const imgContainer = document.querySelector(".display_container");
const thumbContainer = document.querySelector(".thumbnail_container");

const btnUp = document.getElementById("button_up");
const btnDown = document.getElementById("button_down");

cardObjects.forEach((element, i) =>{

    //crea div contenitore immagine + testo
    const newDiv = document.createElement("div");
    
    //crea immagini
    const newImg = document.createElement("img");
    newImg.classList.add("img_carousel");
    newImg.src = element.image;
    
    //crea div descrizione
    const newDescription = document.createElement("div");
    newDescription.classList.add("img_description");
    newDescription.innerHTML += `<h1>${element.title}</h1><h5>${element.text}</h5>`;
    
    newDiv.append(newImg, newDescription);

    //crea thumbnail
    const newThumb = document.createElement("img");
    newThumb.classList.add("img_thumbnail");
    newThumb.src = element.image;

    if (i === currentIndex){
        newImg.classList.add("visible");
        newDescription.classList.add("visible");
        newThumb.classList.add("visible");
    }

    imgContainer.append(newDiv);
    thumbContainer.append(newThumb);
});

const allThumbs = thumbContainer.querySelectorAll("img");
const allDescriptions = imgContainer.querySelectorAll(".img_description");
const allImgs = imgContainer.querySelectorAll("img");

btnDown.addEventListener("click", function(){
    currentIndex++;
    if (currentIndex > lastIndex){
        currentIndex = 0;
    }
    removeVisibility(carouselContainer);
    addVisibility(allImgs, allDescriptions, allThumbs);
})

btnUp.addEventListener("click", function(){
    currentIndex--;
    if (currentIndex < 0){
        currentIndex = lastIndex;
    }

    removeVisibility(carouselContainer);
    addVisibility(allImgs, allDescriptions, allThumbs);
})

allThumbs.forEach((element, i)=>{
    element.addEventListener("click", function(){
        currentIndex = i;
        removeVisibility(carouselContainer);
        addVisibility(allImgs, allDescriptions, allThumbs);
    });  
})