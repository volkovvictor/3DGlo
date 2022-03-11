'use strict';

import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import scroll from './modules/scroll';
import tabs from './modules/tabs';
import slider from './modules/slider';
import validation from './modules/validation';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

timer('15 Marth 2022');
menu();
modal();
scroll();
tabs();
slider('.portfolio-content', '.portfolio-item', '.portfolio-dots');
validation();
calc(100);
sendForm({
   formId: 'form1',
   someElement: [
      {
         type: 'block',
         id: 'total'
      }
   ]
   });
sendForm({
formId: 'form2',
someElement: [
   {
      type: 'block',
      id: 'total'
   }
]
});
sendForm({
   formId: 'form3',
   someElement: [
      {
         type: 'block',
         id: 'total'
      }
   ]
   });