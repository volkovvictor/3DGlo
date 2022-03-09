'use strict';

import helpers from './modules/helpers';
import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import scroll from './modules/scroll';
import tabs from './modules/tabs';
import slider from './modules/slider';
import validation from './modules/validation';
import calc from './modules/calc';

helpers();
timer('26 February 2022');
menu();
modal();
scroll();
tabs();
slider('.portfolio-content', '.portfolio-item', '.portfolio-dots');
validation();
calc(100);