function openImage(src){

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightbox.style.display = "flex";

  lightboxImg.src = src;
}

function closeImage(){

  document.getElementById("lightbox").style.display = "none";

}

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if(window.scrollY > 50){

    header.style.background = "rgba(0,0,0,0.9)";
    header.style.padding = "12px 50px";

  } else {

    header.style.background = "rgba(0,0,0,0.3)";
    header.style.padding = "20px 50px";

  }

});document.getElementById("lightbox").addEventListener("click", function(e){

  if(e.target !== document.getElementById("lightbox-img")){

    closeImage();

  }

});