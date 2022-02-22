'use strict';


const getRemainingDate = (newYear) => {
   const dateNow = new Date().getTime();
   const newYearDate = new Date(newYear).getTime();
   const timeRemaining = (newYearDate - dateNow) / 1000 / 60 / 60 / 24;
   const days = Math.floor(timeRemaining);
   const hours =  new Date().getHours();
   const currentTime = new Date().toLocaleTimeString('en');
   const day = new Date().toLocaleDateString('ru',  {weekday: 'long'});

   return {timeRemaining, days, hours, currentTime, day};
};

const caseWord = (num, arr) => {
   if(num % 10 === 1 && num % 100 !== 11) {
      return arr[0];
   }
   if(num % 10 > 1 && num % 10 < 5 && ( num % 100 < 12 || num % 100 > 14)) {
      return arr[1];
   }

   return arr[2];
}


const showDate = () => {
   const getDate = getRemainingDate('1 January 2023');

   if(getDate.timeRemaining < 0) {
      getDate.days = 0;
   }

   document.body.style.fontSize = '24px';
   document.body.innerHTML = `
   <p>${(getDate.hours > 0 && getDate.hours < 6) ? 'Доброй ночи' :
   (getDate.hours >= 6 && getDate.hours < 12) ? 'Доброe утро' :
   (getDate.hours >= 12 && getDate.hours < 18) ? 'Добрый день' : 'Добрый вечер'}
   </p>
   <p>Сегодня: ${getDate.day[0].toUpperCase() + getDate.day.slice(1)}</p>
   <p>Текущее время: ${getDate.currentTime}</p>
   <p>До нового года осталось ${getDate.days} ${caseWord(getDate.days, ['день', 'дня', 'дней'])}</p>
`;
};

showDate();