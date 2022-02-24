const modal = () => {
   const popup = document.querySelector('.popup');
   const popupBtns = document.querySelectorAll('.popup-btn');
   const popupClose = popup.querySelector('.popup-close');
   const popupContent = popup.querySelector('.popup-content');

   let idAnimation;

   const resizeWidth = () => {
      if(window.innerWidth < 768) {
         popupContent.style.opacity = '1';
         popupContent.style.transition = 'none';
         clearInterval(idAnimation);
      } else {
         popupContent.style.transition = `all 0.5s linear`;
         popupContent.style.opacity = '0';
      }
   };

   const animPopup = () => {
      popupContent.style.opacity = '1';
   };

   const openPopup = () => {
      resizeWidth();
      popup.style.display = 'block';
      requestAnimationFrame(animPopup);
   };

   const closePopup = () => {
      popup.style.display = 'none';
      popupContent.style.opacity = '0';
   };

   popupBtns.forEach(btn => {
      btn.addEventListener('click', openPopup);
   });

   popupClose.addEventListener('click', closePopup);
};

export default modal;