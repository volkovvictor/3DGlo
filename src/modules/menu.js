const menu = () => {
   const menu = document.querySelector('menu');
   const body = document.querySelector('body');

   const handlerMenu = () => {
      menu.classList.toggle('active-menu');
   };

   body.addEventListener('click', (e) => {
      if(e.target.closest('menu>ul>li>a') || 
      e.target.classList.contains('close-btn') || 
      e.target.closest('.menu')) {
         handlerMenu();
      } else if(!e.target.closest('menu')) {
         menu.classList.remove('active-menu');
      }
   });
};

export default menu;