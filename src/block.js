const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const anchorElements = document.querySelectorAll(".thumbnails-anchor");
const mainElement = document.querySelector(".main-class");
const hideButtonElement = document.getElementById("hide-button");
const audio = document.getElementById("audio");
const HIDDEN = "hidden";
const IS_POINT = "is-point";


function showDetails() {
    mainElement.classList.remove(HIDDEN);
    detailsContainer.classList.add(IS_POINT);
    setTimeout(function(){
        detailsContainer.classList.remove(IS_POINT);
    })
}
function hideDetails() {
    mainElement.classList.add(HIDDEN);
}

function setDetails(anchor) {
    const dataImage = anchor.getAttribute("data-details-image");
    detailsImage.src = dataImage;
    showDetails();
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
    audio.setAttribute("src", anchor.getAttribute('sound'));
    audio.play();
    setTimeout(function(){
        audio.onpause();
        audio.currendTime = 0;
    }, 5000)

}

for (let i=0; i < anchorElements.length; i++) {
    anchorElements[i].addEventListener("click", function() {
        setDetails(anchorElements[i]);
        
    } )

}
hideButtonElement.addEventListener("click",hideDetails);
