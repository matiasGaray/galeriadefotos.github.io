const fullImgBox = document.getElementById("fullImgBox"),
fullImg = document.getElementById("fullImg");

const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".navbar-menu")

navToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav-menu_visible")
})

function openImg(reference){
    fullImgBox.style.display="flex"
    fullImg.src= reference

}


function closeImg(){
    fullImgBox.style.display="none";
}
