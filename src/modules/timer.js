const timer = (deadline) => {
   const hours = document.getElementById('timer-hours');
   const minutes = document.getElementById('timer-minutes');
   const seconds = document.getElementById('timer-seconds');

   const getTimeRemaining = () => {
      const dateStop = new Date(deadline).getTime();
      const dateNow = new Date().getTime();
      const timeRemaining = (dateStop - dateNow) / 1000;
      const hours = Math.floor(timeRemaining / 60 / 60);
      const minutes = Math.floor((timeRemaining / 60) % 60);
      const seconds = Math.floor(timeRemaining % 60);

      return {timeRemaining, hours, minutes, seconds};
   }


   const updateTime = () => {
      const getTime = getTimeRemaining();

      for(let key in getTime) {
         if(key !== 'timeRemaining') {
            let time = getTime[key];

            if(getTime[key].toString().length === 1) {
               getTime[key] = '0' + getTime[key];
            }
         }
      }

      hours.textContent = getTime.hours;
      minutes.textContent = getTime.minutes;
      seconds.textContent = getTime.seconds;

      if(getTime.timeRemaining > 0) {
         setInterval(updateTime, 1000);
      } else {
         hours.textContent = '00';
         minutes.textContent = '00';
         seconds.textContent = '00';
      }
   }

   updateTime()
};

export default timer;