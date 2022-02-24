const scroll = () => {
   const main = document.querySelector('main');
   const menuLink = document.querySelectorAll('menu>ul>li>a');
   const bottom = document.querySelector('main>a');

   const animScroll = (link) => {
      const el = document.querySelector(link.getAttribute('href'));

      el.scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   };

   menuLink.forEach(link => {
      link.addEventListener('click', (event) => {
         event.preventDefault();
         animScroll(link);
      });
   });

   bottom.addEventListener('click', (event) => {
      event.preventDefault();
      animScroll(bottom);
   });
};

export default scroll;