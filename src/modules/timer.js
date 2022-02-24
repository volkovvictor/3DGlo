const timer = (deadline) => {
   const hours = document.getElementById('timer-hours');
   const minutes = document.getElementById('timer-minutes');
   const seconds = document.getElementById('timer-seconds');

   let idInterval;

   const getTimeRemaining = () => {
      const dateStop = new Date(deadline).getTime();
      const dateNow = new Date().getTime();
      const timeRemaining = (dateStop - dateNow) / 1000;
      const hours = Math.floor(timeRemaining / 60 / 60);
      const minutes = Math.floor((timeRemaining / 60) % 60);
      const seconds = Math.floor(timeRemaining % 60);

      return {timeRemaining, hours, minutes, seconds};
   };

   const addZero = (num) => {
      if(num.toString().length === 1) {
         return '0' + num;
      } else {
         return num;
      }
   };

   const updateTime = () => {
      const getTime = getTimeRemaining();

      hours.textContent = addZero(getTime.hours);
      minutes.textContent = addZero(getTime.minutes);
      seconds.textContent = addZero(getTime.seconds);

      if(getTime.timeRemaining <= 0) {
         clearInterval(idInterval);
         hours.textContent = '00';
         minutes.textContent = '00';
         seconds.textContent = '00';
      }
   }

   updateTime();

   idInterval = setInterval(updateTime, 1000);
};

export default timer;