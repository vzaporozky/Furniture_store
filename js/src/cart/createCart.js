import { createCartBody } from "./creates/createCartBody.js";
import { createCartElement } from "./creates/createCartElement.js";
import { removeInBtn } from "./removeItems/removeInBtn.js";
import { decrease, increase } from "./IncreaseDecrease/IncreaseDecrease.js";
import { clearCart } from "./removeItems/clearCart.js";


export const createCart = () => {
    const wrapperBag = document.createElement('div');
    
    let total = 0;

    wrapperBag.classList.add('wrapper__bag');
    wrapperBag.innerHTML = createCartBody;
    console.log(wrapperBag)

    const body = document.querySelector('body');
    body.append(wrapperBag)

    createCartElement()

    const menuBagClear = document.querySelector('.menu__bag_clear');
    menuBagClear.addEventListener('click', clearCart)

    const removeButtons = document.querySelectorAll('.bag__item_remove');
    removeButtons.forEach(item => {
        item.addEventListener('click', removeInBtn)
    })

    const cartItems = document.querySelectorAll('.menu__bag_item'); 
    cartItems.forEach(item => {
        total += Number(item.querySelector('.bag__item_price').innerHTML.split('$').join(''))
    })

    document.querySelector('.menu__bag_total').innerHTML += '$' + total


    const itemIncrease = document.querySelectorAll('.bag__item_increase');
    const itemDecrease  = document.querySelectorAll('.bag__item_decrease');
    itemIncrease.forEach(item => {
        item.addEventListener('click', () => increase(item))
    })

    itemDecrease.forEach(item => {
        item.addEventListener('click', () => decrease(item))
    })
}