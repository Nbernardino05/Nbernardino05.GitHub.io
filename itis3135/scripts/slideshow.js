let slideIndex = 1;

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("demo");
  const captionText = document.getElementById("caption");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].style.border = "none"; // Not using .active
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].style.border = "2px solid #555";
  captionText.innerText = dots[slideIndex - 1].alt;
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
});





  
  
  