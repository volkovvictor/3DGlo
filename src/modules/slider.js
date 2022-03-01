const slider = (sliderContent, sliderItems, sliderDots, activeClass = '-active') => {
   const sliderBlock = document.querySelector(sliderContent);
   const slides = document.querySelectorAll(sliderItems);
   const dotsList = document.querySelector(sliderDots);

   let dots;
   let currentSlide = 0;
   let interval;

   if(!sliderBlock || slides.length === 0) return;

   const prevSlide = (elems, index, strClass = elems[0].classList[0] + activeClass) => {
      elems[index].classList.remove(strClass);
   };

   const nextSlide = (elems, index, strClass = elems[0].classList[0] + activeClass) => {
      elems[index].classList.add(strClass);
   };

   const autoSlide = () => {
      prevSlide(slides, currentSlide);
      prevSlide(dots, currentSlide);

      currentSlide++;

      if(currentSlide >= slides.length) {
         currentSlide = 0;
      }

      nextSlide(slides, currentSlide);
      nextSlide(dots, currentSlide);
   };

   const startSlide = () => {
      interval = setInterval(autoSlide, 2000);
   };

   const stopSlide = () => {
      clearInterval(interval);
   };

   const addDots = () => {
      for(let i = 0; i < slides.length; i++) {
         const newDot = document.createElement('li');
         newDot.classList.add('dot');
         dotsList.append(newDot);
      }

      dots = sliderBlock.querySelectorAll('.dot');

      dots[0].classList.add(dots[0].classList[0] + activeClass);
   };

   sliderBlock.addEventListener('click', (e) => {
      e.preventDefault();

      dots = sliderBlock.querySelectorAll('.dot');

      if(!e.target.matches('.dot, .portfolio-btn')) {
         return;
      }

      prevSlide(slides, currentSlide);
      prevSlide(dots, currentSlide);

      if(e.target.matches('#arrow-right')) {
         currentSlide++;
      }

      if(e.target.matches('#arrow-left')) {
         currentSlide--;
      }

      if(e.target.classList.contains('dot')) {
         dots.forEach((dot, index) => {
            if(e.target === dot) {
               currentSlide = index;
            }
         });
      }

      if(currentSlide >= slides.length) {
         currentSlide = 0;
      }

      if(currentSlide < 0) {
         currentSlide = slides.length - 1;
      }

      nextSlide(slides, currentSlide);
      nextSlide(dots, currentSlide);
   });

   sliderBlock.addEventListener('mouseenter', (e) => {
      dots = sliderBlock.querySelectorAll('.dot');

      if(e.target.matches('.dot, .portfolio-btn')) {
         stopSlide();
      }
   }, true);

   sliderBlock.addEventListener('mouseleave', (e) => {
      dots = sliderBlock.querySelectorAll('.dot');

      if(e.target.matches('.dot, .portfolio-btn')) {
         startSlide();
      }
   }, true);
   
   addDots();
   startSlide();
};

export default slider;