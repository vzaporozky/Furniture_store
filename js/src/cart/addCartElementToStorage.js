import { getStorageItem } from "../getStorageItem.js";

export const addCartElementToStorage = (event) => {
    let name = event.target.parentNode.querySelector('.element__title').innerHTML;
    let price = event.target.parentNode.querySelector('.element__price').innerHTML;
    let img =  event.target.parentNode.previousElementSibling.src;

    let cart = getStorageItem('cart');
    cart.items.push({name, price, img});
    localStorage.setItem('cart', JSON.stringify(cart));

    const bagCounter = document.querySelector('.bag__counter');
    bagCounter.innerHTML++
}