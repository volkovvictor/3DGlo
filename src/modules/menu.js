const menu = () => {
   const menuBtn = document.querySelector('.menu');
   const menu = document.querySelector('menu');
   const closeBtn = menu.querySelector('.close-btn');
   const menuItems = menu.querySelectorAll('ul>li>a');

   const handlerMenu = () => {
      menu.classList.toggle('active-menu');
   };

   menuBtn.addEventListener('click', handlerMenu);
   closeBtn.addEventListener('click', handlerMenu);
   menuItems.forEach(item => item.addEventListener('click', handlerMenu));

   const link = document.querySelector('main>a');

   const a = document.querySelector(link.getAttribute('href'));

   link.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo(0, a.offsetTop + 200);
   });
};

export default menu;