// selecting the images
let images = document.querySelectorAll(".images");
images.forEach(image => {
    image.addEventListener("click",() => {
        removeActiveClasses();
        image.classList.add("active");
    })
})
function removeActiveClasses(){
    images.forEach(item => {
        item.classList.remove("active");
    })
}