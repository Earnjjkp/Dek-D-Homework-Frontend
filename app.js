let slides = document.querySelectorAll(".product-img");
let slideIndex = 1;
let count = 0;
let indexPage = document.getElementById("index");
let dots = document.getElementsByClassName("dot");

//Show page.
indexPage.innerHTML = `${count+1}/${slides.length}`;

// Previous 
const onPrev = () => {
  if (count != 0) {
    count--;
    slideImg();
  } 
  indexPage.innerHTML = `${count+1}/${slides.length}`;
}

// Next
const onNext = () =>{
  if (count < slides.length - 1) {
    count++;
    slideImg();
  }
  indexPage.innerHTML = `${count+1}/${slides.length}`;
  
}

// Calculate % left
slides.forEach((slide, index) => {
  slide.style.left = `${index *100}%`
})

//function show images.
const slideImg = () =>{
  slides.forEach( 
    (slide)=> {
      slide.style.transform = `translateX(-${count * 100}%)`;
    });
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
    dots[count].className += " active";
}

//Set default dot.
currentSlider(1)

//function when select dots.
function currentSlider(n) {
  count = n-1;
  slideImg();
  indexPage.innerHTML = `${count+1}/${slides.length}`;
}



