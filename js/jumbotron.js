window.addEventListener("scroll", cambioheader);
function cambioheader(){
    const header = document.querySelector(".jumbotron");
    header.classList.toggle("jumbotron-change",window.scrollY>0);
}