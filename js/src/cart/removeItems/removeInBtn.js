import { getStorageItem, setStorageItem } from "../../getStorageItem.js";

export const removeInBtn = (event) => {
    let cart = getStorageItem('cart');
    let cartFiltered = cart.items.filter(item => item.name != event.target.parentNode.firstChild.nextElementSibling.innerHTML)

    cart.items = cartFiltered
    setStorageItem('cart', JSON.stringify(cart));

    event.target.parentNode.parentNode.remove()
    
    const bagCounter = document.querySelector('.bag__counter');
    bagCounter.innerHTML--
}