'use strict';

import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import scroll from './modules/scroll';
import tabs from './modules/tabs';
import slider from './modules/slider';

timer('26 February 2022');
menu();
modal();
scroll();
tabs();
slider('.portfolio-content', '.portfolio-item', '.portfolio-dots');