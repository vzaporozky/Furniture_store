import { getStorageItem, setStorageItem } from "../../getStorageItem.js"

export const decrease = (item) => {
    item.previousElementSibling.innerHTML--
    
    if(item.previousElementSibling.innerHTML == 0){
        item.parentNode.parentNode.remove()
    }

    const name = item.parentNode.parentNode.firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.innerHTML

    let cart = getStorageItem('cart');
    let filter = cart.items.filter(item => item.name == name)

    filter.pop();

    cart.items = cart.items.filter(item => item.name != name)
    filter.forEach(el => cart.items.push(el))
    setStorageItem('cart', JSON.stringify(cart));
    
    const bagCounter = document.querySelector('.bag__counter');
    bagCounter.innerHTML--
}

export const increase  = (item) => {
    item.nextElementSibling.innerHTML++

    const element = item.parentNode.parentNode.firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling;

    let name = element.innerHTML;
    let price = element.nextElementSibling.innerHTML;
    let img =  item.parentNode.parentNode.firstChild.nextElementSibling.src;

    let cart = getStorageItem('cart');
    cart.items.push({name, price, img});
    setStorageItem('cart', JSON.stringify(cart));

    const bagCounter = document.querySelector('.bag__counter');
    bagCounter.innerHTML++
}