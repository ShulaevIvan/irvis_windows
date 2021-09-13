'use strict'
import './slider'
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import timer from './modules/timer';
import images from './modules/images';
document.addEventListener('DOMContentLoaded', function(){

let deadLine = '2021-09-06';

modals();
tabs('.glazing_slider','.glazing_block', '.glazing_content', 'active');
tabs('.decoration_slider','.no_click', '.decoration_content > div > div', 'after_click');
forms();
timer('.container1', deadLine);
images();
});