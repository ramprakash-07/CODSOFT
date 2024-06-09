var slides = document.querySelectorAll(".slides img")
let slideindex = 0;
var a =null;

document.addEventListener("DOMContentLoaded",initilizer);

function initilizer(){
    slides[slideindex].classList.add("displayslide")
    a = setInterval(nextSlide,5000)
}
function showslide(index){
    if(index >= slides.length){
        slideindex = 0;
    }
    else if(index < 0){
        slideindex = slides.length - 1;
    }
    slides.forEach(slide =>{
        slide.classList.remove("displayslide")
    })
    slides[slideindex].classList.add("displayslide")
}
function nextSlide(){
    
    slideindex++;
    showslide(slideindex);
}
function prevSlide(){
    clearInterval(a)
    slideindex--;
    showslide(slideindex);
}