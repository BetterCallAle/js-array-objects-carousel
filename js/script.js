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
const bottomContainer = document.querySelector(".carousel-bottom")

//read all index in the array and create a div element with the img and info inside
let elementCreatedStringTop = ""
let elementCreatedStringBottom =""

images.forEach((item)=>{
    elementCreatedStringTop += getStringElement(item);
    elementCreatedStringBottom += getStringOnlyImgElement(item)
});

// add the string with element in the DOM
topContainer.innerHTML = elementCreatedStringTop;
bottomContainer.innerHTML = elementCreatedStringBottom;

//exctract the created elements and make the first one visible
const carouselTopContainer = document.getElementsByClassName("carousel-top-img");
const carouselBottom = document.querySelectorAll(".carousel-bottom img")


// declare a variable for knowing the index of carouselTopContainer and moving in it and make active the first one
let index = 0;
carouselTopContainer[index].classList.add("active");
carouselBottom[index].classList.add("active")

//add an event by next for move the images
document.getElementById("next").addEventListener("click", goToNextImg);

//add an event by next for move the images
document.getElementById("prev").addEventListener("click", goToPrevImg);

//add an event by clicking on a preview for showing the big img
activeElementOnClick(carouselBottom, carouselTopContainer);

//add a timer for let the carousel going
const nextTimer = setInterval(goToNextImg, 3000);

// add a reverse timer when clicking on reverse button
let isTimerBackwardGoing = false
let prevTimer;
document.getElementById("reverse-btn").addEventListener("click", stopForwardTimerAndStartBackwardTimer);

//add a stop timer when clicking on the button
document.getElementById("stop-btn").addEventListener("click", function(){
    clearInterval(nextTimer);
    clearInterval(prevTimer)
    isTimerBackwardGoing = false;
})




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

/**
 * Description: function that give a string with dinamic Img HTML element based on an object
 * @param {object} object 
 * @returns {string} string HTML layout
 */
function getStringOnlyImgElement(object){
    const imgStringElement =`
        <img src="${object.image}" alt="Copertina di ${object.title}">
    `
    return imgStringElement
}

/* UI FUNCTIONS */
/**
 * Description: a function that change images forward by pressing a button
 */
function goToNextImg(){
    carouselTopContainer[index].classList.remove("active");
    carouselBottom[index].classList.remove("active")
    if(index < images.length - 1){
        index++
    } else{
        index = 0 
    }
    carouselTopContainer[index].classList.add("active")
    carouselBottom[index].classList.add("active")
}


/**
 * Description: a function that change images backward by pressing a button
 */
 function goToPrevImg(){
    carouselTopContainer[index].classList.remove("active");
    carouselBottom[index].classList.remove("active")
    if(index > 0){
        index --
    } else {
        index = images.length -1 
    }
    carouselTopContainer[index].classList.add("active")
    carouselBottom[index].classList.add("active")
}


/**
 * Description: change the active element by clicking on them
 * @param {array} array with element to show by clicking
 * @param {array} firstElement the big img
 * @param {array} secondElement the preview img
 * @param {number} index the number of the index
 */
 function activeElementOnClick(array, element,){
    for (let i = 0; i < array.length; i++) {
        const thisElement = array[i];
        thisElement.addEventListener("click", function(){
            element[index].classList.remove("active");
            array[index].classList.remove("active")
            index = i
            element[index].classList.add("active")
            array[index].classList.add("active")
        })
    }
}

/**
 * Description: stop the forward timer and start the backward timer 
 * @returns {any}
 */
function stopForwardTimerAndStartBackwardTimer (){

    clearInterval(nextTimer);
    
    if(!isTimerBackwardGoing){
        prevTimer = setInterval(function(){
            goToPrevImg()
        },  3000)
        isTimerBackwardGoing = true;
    }
}