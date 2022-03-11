import { animate } from './helpers';

const modal = () => {
   const popup = document.querySelector('.popup');
   const popupBtns = document.querySelectorAll('.popup-btn');
   const popupClose = popup.querySelector('.popup-close');
   const popupContent = popup.querySelector('.popup-content');

   const resizeWidth = () => {
      if(window.innerWidth < 768) {
         cancelAnimationFrame(animate);
      } else {
         animate({
            duration: 300,
            timing(timeFraction) {
               return timeFraction;
            },
            draw(progress) {
               popupContent.style.opacity = progress;
            }
            });
      }
   };

   const openPopup = () => {
      popup.style.display = 'block';
      resizeWidth();
   };

   const closePopup = () => {
      popup.style.display = 'none';
   };

   popupBtns.forEach(btn => {
      btn.addEventListener('click', openPopup);
   });

   popupClose.addEventListener('click', closePopup);
};

export default modal;