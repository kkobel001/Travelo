var slideIndex = 0;
showSlides();


function showSlides() {
  var i;
  var slides = document.getElementsByClassName("carousel-indicators");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length - 1) {slideIndex = 0}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex].style.display = "block";  
  dots[slideIndex].className += " active";
  setTimeout(showSlides, 1000); // Change image every 2 seconds
}