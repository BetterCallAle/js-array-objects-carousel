//array with img info
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

//export elements From DOM
const topContainer = document.querySelector(".carousel-top")

//read all index in the array and create a div element with the img and info inside
let elementCreatedString = ""

images.forEach((item)=> elementCreatedString += getStringElement(item));

// add the string with element in the DOM
topContainer.innerHTML = elementCreatedString





/* FUNCTION */
/**
 * Description: function that give a string with dinamic HTML elements based on an object
 * @param {object} object 
 * @returns {string} string HTML layout
 */
function getStringElement(object){
    const stringElement = `
        <div class="carousel-top-img">
            <img src="${object.image}" alt="Copertina di ${object.title}">
            <div class="image-info">
                <h2>${object.title}</h2>
                <p>${object.text}</p>
            </div>
        </div>
    `
    return stringElement
}