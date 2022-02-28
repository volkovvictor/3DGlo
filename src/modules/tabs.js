const tabs = () => {
   const serviceHeader = document.querySelector('.service-header');
   const serviceTabs = document.querySelectorAll('.service-header-tab');
   const serviceTabBlock = document.querySelectorAll('.service-tab');

   serviceHeader.addEventListener('click', (e) => {
      if(e.target.closest('.service-header-tab')) {
         const thisTab = e.target.closest('.service-header-tab');

         serviceTabs.forEach((btn, index) => {
            if(btn === thisTab) {
               btn.classList.add('active');
               serviceTabBlock[index].classList.remove('d-none');
            } else {
               btn.classList.remove('active');
               serviceTabBlock[index].classList.add('d-none');
            }
         });
      }
   });
};

export default tabs;