import { filterFunc } from './filterFunc.js';

const value = document.querySelector('.products__price_value_span');

export const priceChange = (event) => {
    value.innerHTML = event.target.value
    
    filterFunc(event);
}