import { objectOfItems } from "./src/objectOfItems.js";
import { addItemsToDoc, productsElements } from "./src/addItemsToDoc.js";

import { createCart } from "./src/cart/createCart.js";
import { addCartElementToStorage } from "./src/cart/addCartElementToStorage.js";

import { searchItem, checkSearch } from "./src/filters/searchItem.js";
import { searchFocused } from "./src/filters/searchFocused.js";
import { priceChange } from "./src/filters/filterForPrice.js";

import { getStorageItem, setStorageItem } from './src/getStorageItem.js';

const body = document.querySelector('body');
const cart = document.querySelector('.header__bag');

const checkboxes = document.querySelectorAll('.products__company_checkbox');
const search = document.querySelector('.products__search');
const range = document.querySelector('.products__price_range');

let buyButtons;

export let checkCheckboxes = false;

const compareNames = (el) => el.lastChild.querySelector('.element__title').innerHTML.includes(search.value) ;
const comparePrice = (el) => Number(el.lastChild.querySelector('.element__price').innerHTML.split('$')[1]) <= document.querySelector('#price').value;

cart.addEventListener('click', createCart)

document.addEventListener('click', (event) => {
    if(event.target.classList.contains('menu__bag_close'))
        body.removeChild(document.querySelector('.wrapper__bag'))
})

document.addEventListener('DOMContentLoaded', addItemsToDoc)

checkboxes.forEach(item => {
    item.addEventListener("change", (event) => {
        if(event.target.checked){
            if(checkCheckboxes == false){
                checkCheckboxes = true;

                productsElements.innerHTML = ' ';

                objectOfItems[event.target.id].forEach(el => {
                    if(compareNames(el) && comparePrice(el)){
                        productsElements.appendChild(el)
                    }
                });
            }else{
                objectOfItems[event.target.id].forEach(el => {
                    if(compareNames(el) && comparePrice(el)){
                        productsElements.appendChild(el)
                    }
                });
            }
        }else{
            const els = document.querySelectorAll(`.${event.target.id}`);
            els.forEach(el => el.remove())

            let counterForCheckboxes = 0;
            checkboxes.forEach(item => {
                item.checked ? counterForCheckboxes++ : false
            })

            if(counterForCheckboxes == 0){
                checkCheckboxes = false;
                productsElements.remove()
            }
        }
    })
})

document.addEventListener('change', (event) => 
    event.target.type === 'checkbox' 
        ? checkCheckboxes == false && checkSearch == false 
            ? addItemsToDoc() 
            : '' 
        : false)

search.addEventListener('input', searchItem)
search.addEventListener('focus', searchFocused)
search.addEventListener('blur', searchFocused)

range.addEventListener('change', priceChange)

setTimeout(() => {
    buyButtons = document.querySelectorAll('.element__buy');

    buyButtons.forEach(button => {
        button.addEventListener('click', addCartElementToStorage)
    })
}, 200)

document.addEventListener('DOMContentLoaded', () => {
    if(!getStorageItem('cart')){
        setStorageItem('cart', `{"items": []}`)
    }

    document.querySelector('.bag__counter').innerHTML = JSON.parse(localStorage.getItem('cart')).items.length
})

