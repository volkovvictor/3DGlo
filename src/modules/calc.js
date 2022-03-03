import { animate } from './helpers';

const calc = (price = 100) => {
   const calcBlock = document.querySelector('.calc-block');
   const calcType = document.querySelector('.calc-type');
   const calcSquare = document.querySelector('.calc-square');
   const calcCount = document.querySelector('.calc-count');
   const calcDay = document.querySelector('.calc-day');
   const total = document.getElementById('total');

   const countCalc = () => {
      const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
      const calcSquareValue = +calcSquare.value;

      let totalValue = 0;
      let calcCountValue = 1;
      let calcDayValue = 1;
      let count = 0;

      if(calcCount.value && calcCount.value > 1) {
         calcCountValue += calcCount.value / 10;
      }

      calcDayValue = calcDay.value && calcDay.value < 5 ? 2 : 
      calcDay.value && calcDay.value < 10 ? 1.5 : calcDayValue;
      

      if(calcTypeValue && calcSquareValue) {
         totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
      }

      animate({
         duration: 500,
         timing(timeFraction) {
            return timeFraction;
         },
         draw(progress) {
            total.textContent = Math.floor(progress * totalValue);
         }
      });
   };

   calcBlock.addEventListener('change', (e) => {
      if(e.target === calcType || e.target === calcSquare || 
         e.target === calcCount || e.target === calcDay) {
            countCalc();
      }
   });
};

export default calc;