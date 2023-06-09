import {objectOfItems} from './objectOfItems.js'

export const createItems = (item, elements) => {
    const element = document.createElement('div');
    element.classList.add('products__element');
    element.classList.add('element');
    element.classList.add(item.company);

    element.innerHTML = 
        `<img src="${item.img}" alt="image">
        <div class="element__description">
            <h3 class="element__title">${item.name}</h3>
            <p class="element__price">$${item.price}</p>
            <input type="button" value="Buy" class="element__buy">
        </div>`

    if(objectOfItems.ikea.length < 3 || objectOfItems.kartell.length < 3 || objectOfItems.ashley.length < 3){
        item.company == "ikea" 
        ? objectOfItems.ikea.push(element)
        : item.company == "kartell" 
        ? objectOfItems.kartell.push(element)
        : objectOfItems.ashley.push(element);
    }

    elements.appendChild(element);
}