import { setStorageItem } from "../../getStorageItem.js";

export const clearCart = () => {
    setStorageItem('cart', `{"items": []}`)

    const cartItems = document.querySelectorAll('.menu__bag_item');
    cartItems.forEach(item => item.remove())

    const bagCounter = document.querySelector('.bag__counter');
    bagCounter.innerHTML = 0

    document.querySelector('.menu__bag_total').innerHTML = 'Total: ' + 0
}