// selecting the images
let images = document.querySelectorAll(".images");
// adding active class to each image when clicked
images.forEach(image => {
    image.addEventListener("click",() => {
        removeActiveClasses(); // remove the old active when new image is clicked
        image.classList.add("active");
    })
});
// for removing the active
function removeActiveClasses(){
    images.forEach(item => {
        item.classList.remove("active");
    })
}