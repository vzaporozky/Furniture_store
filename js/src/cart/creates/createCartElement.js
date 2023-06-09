import { getStorageItem } from "../../getStorageItem.js";

const createItem = (img, name, price) => {
    return `
        <img src=${img} alt="image" class="bag__item_img">

        <div class="bag__item_description">
            <h3 class="bag__item_title">${name}</h3>
            
            <p class="bag__item_price">${price}</p>

            <input type="button" value="remove" class="bag__item_remove">
        </div>

        <div class="bag__item_counter">
            <div class="bag__item_increase bag__item_btn">🡁</div>
            <p class="bag__item_amount">1</p>
            <div class="bag__item_decrease bag__item_btn">🡃</div>

        </div>`
}

export const createCartElement = () => {
    const cart = getStorageItem('cart');
    const cache = {};
    const amountItems = item => document.querySelector(`#${item.name.split(' ').join('')}`).lastChild.firstChild.nextElementSibling.nextElementSibling;

    cart.items.forEach(item => {
        if(cache[item.name]){
            amountItems(item).innerHTML++
        }else{
            cache[item.name] = item.name;

            const itemCart = document.createElement('li');
            itemCart.classList.add('menu__bag_item');
            itemCart.classList.add('bag__item');
            itemCart.id = item.name.split(' ').join('');
    
            itemCart.innerHTML = createItem(item.img, item.name, item.price);
    
            document.querySelector('.menu__bag_list').appendChild(itemCart);
        }
    })
}